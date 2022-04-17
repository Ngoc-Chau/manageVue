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
              <h2>QUẢN LÝ XUẤT KHO</h2>
            </div>
            <div style="border: 1px solid; padding: 12px;">
              <table class="table table-striped" style="border: 2px solid; margin: 0;">
                <thead>
                  <tr>
                    <th scope="col">STT</th>
                    <th scope="col">ID</th>
                    <th scope="col">Họ và tên</th>
                    <th scope="col">Bộ phận</th>
                    <th scope="col">Mã thiết bị</th>
                    <th scope="col">Loại</th>
                    <th scope="col">Số lượng</th>
                    <th scope="col">Thời gian</th>
                    <th scope="col">Lí do</th>
                    <th scope="col">Chức năng</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="listExport, index in listExports" :key="listExport.MANAGE_ID">
                    <td>{{ index +1 }}</td>
                    <td>{{ listExport.ID }}</td>
                    <td>{{ listExport.name }}</td>
                    <td>{{ listExport.department_code }}</td>
                    <td>{{ listExport.lend.DEVICE_CODE }}</td>
                    <td>{{ listExport.repository.NAME }}</td>
                    <td>{{ listExport.QUANTITY }}</td>
                    <td>{{ listExport.EXPORT_DATE }}</td>
                    <td>{{ listExport.REASON }}</td>
                    <td>
                      <a data-toggle="modal" data-target="#delStatus" @click="check(listExport.MANAGE_ID)"><i class="fa fa-minus-circle"></i></a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!-- modal del -->
            <div
              class="modal fade"
              id="delStatus"
              tabindex="-1"
              role="dialog"
              aria-labelledby="delStatusList"
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
                      <p class="mt-4">Ban co chac chan muon xoa khong</p>
                    </div>
                  </div>
                  <div class="modal-footer" style="padding: 0">
                    <div
                      class="col-sm-6"
                      style="border-right: 1px solid #dee2e6; padding: 1em 0"
                      data-dismiss="modal"
                      @click="del(manage_id)"
                    >
                      <a class="message-del">Đồng ý</a>
                    </div>
                    <div class="col-sm-6" style="padding: 1em 0">
                      <a
                        class="message-del"
                        data-dismiss="modal"
                        aria-label="Close"
                        >Không</a
                      >
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
      listExports: [],
      manage_id: null
    };
  },
  methods: {
    getData: async function() {
      const list = await axios.get('http://127.0.0.1:8000/api/export')
      this.listExports = list.data
      console.log(1111, this.listExports);
    },
    check: function(manage_id) {
      this.manage_id = manage_id;
    },
    del: async function(manage_id) {
      const delExport = await axios.post('http://127.0.0.1:8000/api/export-delete', { manage_id: manage_id })
      if(delExport.data == 'success'){
        this.getData();
        alert('Xóa thành công!');
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
.available {
  display: none;
}
.equipment {
  display: none;
}
.selectOption {
  width: 180;
}
.selection {
  width: 180px;
}
.checkEquipment {
  font-weight: bold;
  color: blueviolet;
}
.checkEquipment:hover {
  color: blue;
  text-decoration: underline;
}
</style>
