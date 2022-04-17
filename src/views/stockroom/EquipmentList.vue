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
              <h2>QUẢN LÝ DANH SÁCH THIẾT BỊ TRONG KHO</h2>
            </div>
            <div style="border: 1px solid; padding: 12px;">
              <table class="table table-striped" style="border: 2px solid; margin: 0;">
                <thead>
                  <tr>
                    <th scope="col">Thiết bị</th>
                    <th scope="col">Loại thiết bị</th>
                    <th scope="col">Số lượng còn trong kho</th>
                    <th scope="col">Màu sắc</th>
                    <th scope="col">Thông tin</th>
                    <th scope="col">Chức năng</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="equipment in equipments"
                  :key="equipment.PRODUCT_ID">
                    <td>{{ equipment.type.NAME }}</td>
                    <td>{{ equipment.NAME }}</td>
                    <td>{{ equipment.QUANTITY }}</td>
                    <td>{{ equipment.COLOR }}</td>
                    <td>
                        {{ equipment.DESCRIPTION }}
                    </td>
                    <td><a class="mr-3" @click="edit(equipment.PRODUCT_ID)"><i class="fa fa-edit"></i> Chỉnh sửa</a></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!-- modal edit -->
            <div
              class="modal fade"
              v-bind:class="{show: isActive }"
              v-bind:style="{display: isDisplay, background: isColor }"
              id="detailEquipment"
              tabindex="-1"
              role="dialog"
              aria-labelledby="detailEquipmentList"
              aria-hidden="true"
            >
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h3 class="modal-title" id="detailEquipmentList">
                      Thông tin thiết bị
                    </h3>
                    <button
                      type="button"
                      @click="close"
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
                          <div class="col-sm-4">Tên thiết bị</div>
                          <div class="col-sm-8"><input type="text" v-model="name" disabled/></div>
                        </div>
                        <div class="d-flex py-2">
                          <div class="col-sm-4">Số lượng</div>
                          <div class="col-sm-8"><input type="text" v-model="quantity" disabled/></div>
                        </div>
                        <div class="d-flex py-2">
                          <div class="col-sm-4">Thông tin</div>
                          <div class="col-sm-8">
                            <textarea name="" id="" cols="22" rows="5" v-model="description"></textarea>
                          </div>
                        </div>
                        <div class="py-3">
                          <button type="button" @click="updateEquipment(product_id)" class="btn btn-primary">Cập nhật</button>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- end modal edit -->
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
      id: this.$route.params.id,
      equipments: [],
      product: [],
      isActive: false,
      isDisplay: 'none',
      isColor: 'none',
      product_id: null,
      name: null,
      quantity: null,
      description: null,
    };
  },
  methods: {
    getData: async function() {
      const items = await axios.get(`http://127.0.0.1:8000/api/equipment-list/${this.id}`)
          this.equipments = items.data
        console.log(2222, this.id);
    },
    edit: function (id) {
      axios.post('http://127.0.0.1:8000/api/equipment-post', {id:id})
      .then(response => {
        this.product_id = response.data.PRODUCT_ID
        this.name = response.data.NAME
        this.quantity = response.data.QUANTITY
        this.description = response.data.DESCRIPTION
      })
      this.isActive = true;
      this.isDisplay = 'block';
      this.isColor = '#0000007a';
    },
    close: function() {
      this.isActive = false;
      this.isDisplay = 'none';
      this.isColor = 'none';
    },
    updateEquipment: async function(product_id) {
      const updateNew = await axios.post('http://127.0.0.1:8000/api/equipment-update', {product_id:product_id, description:this.description})
      if(updateNew.data == 'success'){
        this.isActive = false;
        this.isDisplay = 'none';
        this.isColor = 'none';
        this.getData();
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
