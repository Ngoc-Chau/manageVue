<template>
  <div class="wrapper">
    <sidebar />
    <div class="main">
      <header-esc />
      <main class="content">
        <div class="container-fluid p-0">
          <div class="row" style="background: white">
            <div style="border: 1px solid; padding-top: 25px; padding-bottom: 15px;">
              <h2>THÊM TÀI SẢN / THIẾT BỊ MƯỢN</h2>
            </div>
            <div style="border: 1px solid; padding: 12px;">
                <div class="row">
                    <div class="col-sm-3" style="text-align: left;">
                        <p>ID:</p>
                        <p>Họ và tên:</p>
                        <p>Bộ phận:</p>
                        <p>Các thiết bị mượn:</p>
                    </div>
                    <div class="col-sm-9" style="text-align: left;">
                        <p>{{ user.id }}</p>
                        <p>{{ user.name }}</p>
                        <p>{{ user.department_code }}</p>
                    </div>
                </div>
                <table class="table table-striped" style="border: 2px solid; margin: 0;">
                    <thead>
                    <tr>
                        <th scope="col">
                          <p style="margin:0">Tất cả</p>
                          <input type="checkbox" v-model="select_all" @click="select()"/>
                        </th>
                        <th scope="col"><p>Mã thiết bị</p></th>
                        <th scope="col"><p>Loại thiết bị</p></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="equipment in equipments" :key="equipment.LEND_ID">
                        <td>
                          <input type="checkbox" v-bind:value="equipment.LEND_ID" v-model="selected" @click="updateCheckall()"/>
                        </td>
                        <td>{{ equipment.DEVICE_CODE }}</td>
                        <td>{{ equipment.repository.NAME }}</td>
                    </tr>
                    </tbody>
                </table>
                <h1>{{ selected }}</h1>
                <div class="row mt-3">
                    <div class="col-sm-3" style="text-align: left;">
                        <p>Thời gian mượn:</p>
                        <p>Thời gian trả:</p>
                    </div>
                    <div class="col-sm-9" style="text-align: left;">
                        <p><input type="date" name="rent_time" v-model="rent_time"></p>
                        <p><input type="date" name="pay_time" v-model="pay_time"></p>
                    </div>
                </div>
                <button type="button" class="btn btn-success" @click="addRemote">Thêm</button>
            </div>
            
          </div>
        </div>
      </main>
      <footer class="footer">
        <div class="container-fluid">
          <div class="row text-muted">
            <div class="col-6 text-start">
              <p class="mb-0">
                Copyright &copy; 2021 Fabbi JSC. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import HeaderEsc from "../Header.vue";
import Sidebar from "../Sidebar.vue";
import axios from 'axios'
export default {
  components: { Sidebar, HeaderEsc },
  async created () {
     this.getData();
  },
  data() {
    return {
      user_id: this.$route.params.user_id,
      user: null,
      equipments: [],
      select_all: false,
      selected: [],
      rent_time: null,
      pay_time: null,
    };
  },
  methods: {
    getData: async function() {
      const add = await axios.post('http://127.0.0.1:8000/api/remote-user', {user_id: this.user_id})
      this.user = add.data[0]
      this.equipments = add.data[1]
    },
    select: function() {
      this.selected = []
      console.log(1111, this.selected);
      if(!this.select_all){
        for(let i in this.equipments) {
          this.selected.push(this.equipments[i].LEND_ID)
        }
        console.log(2222, this.selected);
        console.log(6666, this.select_all);
      }
    },
    updateCheckall: function() {
      console.log(2222, this.selected);
      // if(this.selected.length == this.equipments.length) {
      //   this.select_all = true
      // } else {
      //   this.select_all = false
      // }
    },
    addRemote: async function() {
      console.log(9999, this.selected);
      console.log(2121, this.rent_time);
      const add = await axios.post('http://127.0.0.1:8000/api/remote-add', {
        selected: this.selected, rent_time: this.rent_time, pay_time: this.pay_time
        })
       if(add.data == 'success'){
         alert('Thêm thành công');
         this.$router.push({ name: 'RentalList'});
       }
    }
  },
};
</script>

<style scoped>
.content {
  margin-top: 8em;
}
table th {
  border-color: #495057!important;;
  border-left: 2px solid;
  border-right: 2px solid;
  padding: 5px;
}
table td {
  border: none;
  border-left: 2px solid;
  border-right: 2px solid;
  padding: 5px;
}
</style>
