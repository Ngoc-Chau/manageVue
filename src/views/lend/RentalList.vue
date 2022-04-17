<template>
  <div class="wrapper">
    <sidebar />
    <div class="main">
      <header-esc />
      <main class="content">
        <div class="container-fluid p-0">
          <!-- start message ----------------------------------------------------------------------------- -->
          <div v-if="success" class="row mt-4">
            <h4 style="text-align: right; padding-right: 77px">
              <i class="fa fa-user-plus"></i> Them moi thanh cong ...
            </h4>
          </div>
          <div v-if="success" class="row mt-4">
            <h4 style="text-align: right; padding-right: 77px">
              <i class="fa fa-trash-o"></i> Xoa thanh cong ...
            </h4>
          </div>
          <div v-if="success" class="row mt-4">
            <h4 style="text-align: right; padding-right: 77px">
              <i class="fa fa-check-circle-o"></i> Chuyen thanh cong ...
            </h4>
          </div>
          <!-- end mesage ------------------------------------------------------------------------------------- -->
          <div class="row" style="background: white">
            <div style="border: 1px solid; padding-top: 25px; padding-bottom: 15px;">
              <h2>QUẢN LÝ DANH SÁCH MƯỢN THIẾT BỊ REMOTE</h2>
            </div>
            <div style="border: 1px solid; padding: 12px;">
              <div style="float: left; margin-top: 5px; font-size: 15px;">
                <a href="/usage-list">DANH SÁCH SỬ DỤNG</a> | 
                <a href="/insurance-list">DANH SÁCH BẢO HÀNH</a>
              </div>
              <div style="float: right; margin-bottom: 10px;">
                <input type="number" class="mr-2" id="gsearch" name="gsearch" v-model="user_id" placeholder="Nhập ID"/>
                <a class="btn btn-success" @click="search" >Thêm</a>
              </div>
              <table class="table table-striped" style="border: 2px solid; margin: 0;">
                <thead>
                  <tr>
                    <th scope="col">STT</th>
                    <th scope="col">ID</th>
                    <th scope="col">Họ và tên</th>
                    <th scope="col">Bộ phận</th>
                    <th scope="col">Mã thiết bị</th>
                    <th scope="col">Mô tả</th>
                    <th scope="col">Tình trạng</th>
                    <th scope="col">Thời gian mượn</th>
                    <th scope="col">Thời gian trả</th>
                    <th scope="col">Chức năng</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(list, index) in lists" :key="list.LEND_ID">
                    <td>{{ index+1 }}</td>
                    <td>{{ list.ID }}</td>
                    <td>{{ list.name }}</td>
                    <td>{{ list.department_code }}</td>
                    <td>{{ list.DEVICE_CODE }}</td>
                    <td>{{ list.repository.NAME }}</td>
                    <td>{{ list.CONDITION }}</td>
                    <td>{{ list.RENT_TIME }}</td>
                    <td>{{ list.PAY_TIME }}</td>
                    <td>
                      <a class="mr-3" data-toggle="modal" data-target="#editRent" @click="check(list.LEND_ID)"><i class="fa fa-address-book-o"></i></a>
                      <a data-toggle="modal" data-target="#delRent" @click="check(list.LEND_ID)"><i class="fa fa-minus-circle"></i></a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!-- modal edit -->
            <div
              class="modal fade"
              id="editRent"
              tabindex="-1"
              role="dialog"
              aria-labelledby="editUserRent"
              aria-hidden="true"
            >
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h3 class="modal-title" id="editUserRent">
                      Chỉnh sửa mượn tài sản / thiết bị
                    </h3>
                    <button
                      type="button"
                      class="close"
                      style="background: none!important;"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <div class="row" style="padding: 15px">
                      <div class="list-user">
                        <div class="d-flex py-2">
                          <div class="col-sm-4">Mã thiết bị</div>
                          <div class="col-sm-8"><input type="text" v-model="code" disabled/></div>
                        </div>
                        <div class="d-flex py-2">
                          <div class="col-sm-4">Mô tả</div>
                          <div class="col-sm-8"><input type="text" v-model="equipment_name" disabled/></div>
                        </div>
                        <div class="d-flex py-2">
                          <div class="col-sm-4">Thời gian mượn</div>
                          <div class="col-sm-8"><input type="date" v-model="rent_time" style="width: 178px;" /></div>
                          </div>
                        <div class="d-flex py-2">
                          <div class="col-sm-4">Thời gian trả</div>
                          <div class="col-sm-8"><input type="date" v-model="pay_time" style="width: 178px;" /></div>
                        </div>
                        <div class="py-3">
                          <button type="button" @click="updateTime(lend_id)" data-dismiss="modal" class="btn btn-primary">Cập nhật</button>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- end modal edit -->
            <!-- modal del -->
            <div
              class="modal fade"
              id="delRent"
              tabindex="-1"
              role="dialog"
              aria-labelledby="delRentUser"
              aria-hidden="true"
            >
              <div class="modal-dialog" role="document">
                <div
                  class="modal-content"
                  style="width: 60%; margin: 130px auto"
                >
                  <div class="modal-body">
                    <div class="row">
                      <h3 class="mb-4">Canh bao</h3>
                      <p class="mt-4">Kết thúc Remote</p>
                    </div>
                  </div>
                  <div class="modal-footer" style="padding: 0">
                    <div
                      class="col-sm-6"
                      style="border-right: 1px solid #dee2e6; padding: 1em 0"
                      data-dismiss="modal"
                      @click="changeRemote(lend_id)"
                    >
                      <a class="message-del">Đồng ý</a>
                    </div>
                    <div class="col-sm-6 message-del" data-dismiss="modal" aria-label="Close" style="padding: 1em 0">
                      <a>Không</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- end modal del -->
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
      lists: [],
      user_id: null,
      lend_id: null,
      code: null,
      equipment_name: null,
      rent_time: null,
      pay_time: null,
      time: null,
    };
  },
  methods: {
    getData: async function() {
      const remoteList = await axios.get('http://127.0.0.1:8000/api/remote')
          this.lists = remoteList.data
    },
    check: function(lend_id){
      axios.post('http://127.0.0.1:8000/api/equipment-rent', {lend_id:lend_id})
      .then(response => {
        this.lend_id = response.data.LEND_ID
        this.code = response.data.DEVICE_CODE
        this.equipment_name = response.data.repository.NAME
        this.rent_time = response.data.RENT_TIME
        this.pay_time = response.data.PAY_TIME
      })
    },
    updateTime: async function(lend_id) {
      console.log(this.rent_time);
      const update = await axios.post('http://127.0.0.1:8000/api/update-time', {
        lend_id: lend_id, rent_time: this.rent_time, pay_time: this.pay_time
       });
      console.log(update);

      if(update.data == 'success'){
        this.getData();
      }
    },
    changeRemote: async function(lend_id) {
      const changeNew = await axios.post('http://127.0.0.1:8000/api/remote-change', {lend_id: lend_id})
      if(changeNew.data == 'success'){
        this.getData();
      }
    },
    search: async function() {
      if(this.user_id == null){
        alert('Vui lòng nhập ID người remote');
      }else{
        const add = await axios.post('http://127.0.0.1:8000/api/remote-new', {user_id: this.user_id})
        if(add.data == 'cancel') {
          alert('ID này không có hoặc đã remote');
        } else {
          this.$router.push({ name: 'AddRentalList', params: {user_id: this.user_id }});
        }
      }
    },
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
