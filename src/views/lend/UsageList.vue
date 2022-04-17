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
              <h2>QUẢN LÝ DANH SÁCH MƯỢN TÀI SẢN / THIẾT BỊ</h2>
            </div>
            <div style="border: 1px solid; padding: 12px;">
              <div style="float: left; margin-top: 5px; font-size: 15px;">
                <a href="/">DANH SÁCH MƯỢN THIẾT BỊ REMOTE</a> | 
                <a href="/insurance-list">DANH SÁCH BẢO HÀNH</a>
              </div>
              <div style="float: right; margin-bottom: 10px;">
                <div class="step">
                    <input type="search" class="mr-2" style="height: 38px; border-radius: 20px; border: 1px solid black;" name="search" placeholder="Tìm kiếm"/>
                    <a
                    class="nav-link dropdown-toggle d-none d-sm-inline-block"
                    data-bs-toggle="dropdown"
                    style="border: 1px solid; color: duck"
                    >
                    <span class="text-dark">FABBI JSC</span>
                    </a>
                    <div
                    class="dropdown-menu dropdown-menu-end"
                    style="text-align: center"
                    >
                    <a class="dropdown-item" @click="getData()" :class="{active: isAll}">Tất cả</a>
                    <span
                      v-for="unit in units" 
                        :key="unit"
                        @click="department(unit)"
                    >
                      <span v-if="checkUnit == unit">
                        <a class="dropdown-item" :class="{active: isUnit}"> {{unit}} </a>
                      </span>
                      <span v-else >
                        <a class="dropdown-item"> {{unit}} </a>
                      </span>
                    </span>
                    </div>
                </div>
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
                    <th scope="col">Ngày cập nhật</th>
                    <th scope="col">Chức năng</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(useRent, index) in useRents" :key="useRent.LEND_ID">
                    <td>{{ index+1 }}</td>
                    <td>{{ useRent.ID }}</td>
                    <td>{{ useRent.name }}</td>
                    <td>{{ useRent.department_code }}</td>
                    <td>{{ useRent.DEVICE_CODE }}</td>
                    <td>{{ useRent.repository.NAME }}</td>
                    <td>{{ useRent.CONDITION }}</td>
                    <td>{{ useRent.created_at }}</td>
                    <td>
                      <a class="mr-3" data-toggle="modal" data-target="#insurance" @click="check(useRent.LEND_ID)"><i class="fa fa-cogs"></i></a>
                      <a class="mr-3" data-toggle="modal" data-target="#import" @click="check(useRent.LEND_ID)"><i class="fa fa-plus-circle"></i></a>
                      <a data-toggle="modal" data-target="#export" @click="check(useRent.LEND_ID)"><i class="fa fa-minus-circle"></i></a>
                    </td>
                  </tr>
                </tbody>
              </table>
            <!-- modal insurance -->
            <div
              class="modal fade"
              id="insurance"
              tabindex="-1"
              role="dialog"
              aria-labelledby="insuranceUser"
              aria-hidden="true"
            >
              <div class="modal-dialog" role="document">
                <div
                  class="modal-content"
                  style="margin: 130px auto"
                >
                  <div class="modal-header">
                    <h3 class="modal-title" id="insuranceUser">
                      Chuyển đi bảo hành
                    </h3>
                    <button
                      type="button"
                      class="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <form action="">
                    <div class="modal-body">
                      <div class="row" style="padding: 15px; text-align: left">
                        <div class="list-user">
                          <div class="d-flex py-2">
                            <div class="col-sm-4">Họ và tên</div>
                            <div class="col-sm-8"><input type="text" v-model="nameUser" disabled/></div>
                          </div>
                          <div class="d-flex py-2">
                            <div class="col-sm-4">Bộ phận</div>
                            <div class="col-sm-8"><input type="text" v-model="department_code" disabled/></div>
                          </div>
                          <div class="d-flex py-2">
                            <div class="col-sm-4">Mã thiết bị</div>
                            <div class="col-sm-8"><input type="text" v-model="code" disabled/></div>
                          </div>
                          <div class="d-flex py-2">
                            <div class="col-sm-4">Mô tả</div>
                            <div class="col-sm-8"><input type="text" v-model="name" disabled/></div>
                          </div>
                          <div class="d-flex py-2">
                            <div class="col-sm-4">Thời gian bảo hành</div>
                            <div class="col-sm-8"><input type="date" style="width: 178px;" v-model="insurance_start" /></div>
                          </div>
                          <div class="d-flex py-2">
                            <div class="col-sm-4">Thời gian trả</div>
                            <div class="col-sm-8"><input type="date" style="width: 178px;" v-model="insurance_end" /></div>
                          </div>
                          <div class="d-flex py-2">
                            <div class="col-sm-4">Phiếu bảo hành</div>
                            <div class="col-sm-8"><input type="text" v-model="warranty" /></div>
                          </div>
                          <div class="d-flex py-2">
                            <div class="col-sm-4">Ghi chú</div>
                            <div class="col-sm-8">
                              <textarea style="width: 178px;" type="text" v-model="describe"></textarea>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="modal-footer" style="padding: 0">
                      <div
                        class="col-sm-6"
                        style="border-right: 1px solid #dee2e6; padding: 1em 0"
                      >
                        <a
                          class="message-del"
                          data-dismiss="modal"
                          @click="updateWarranty(lend_id)"
                          >Xuất</a
                        >
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
                  </form>
                </div>
              </div>
            </div>
            <!-- end modal insurance -->
            <!-- modal import -->
            <div
              class="modal fade"
              id="import"
              tabindex="-1"
              role="dialog"
              aria-labelledby="importUser"
              aria-hidden="true"
            >
              <div class="modal-dialog" role="document">
                <div
                  class="modal-content"
                  style="margin: 130px auto"
                >
                  <div class="modal-header">
                    <h3 class="modal-title" id="delRentUser">
                      Nhập về kho
                    </h3>
                    <button
                      type="button"
                      class="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <form action="">
                    <div class="modal-body">
                      <div class="row" style="padding: 15px; text-align: left">
                        <div class="list-user">
                          <div class="d-flex py-2">
                            <div class="col-sm-4">Họ và tên</div>
                            <div class="col-sm-8"><input type="text" v-model="nameUser" disabled/></div>
                          </div>
                          <div class="d-flex py-2">
                            <div class="col-sm-4">Bộ phận</div>
                            <div class="col-sm-8"><input type="text" v-model="department_code" disabled/></div>
                          </div>
                          <div class="d-flex py-2">
                            <div class="col-sm-4">Mã thiết bị</div>
                            <div class="col-sm-8"><input type="text" v-model="code" disabled/></div>
                          </div>
                          <div class="d-flex py-2">
                            <div class="col-sm-4">Mô tả</div>
                            <div class="col-sm-8"><input type="text" v-model="name" disabled/></div>
                          </div>
                          <div class="d-flex py-2">
                            <div class="col-sm-4">Lý do</div>
                            <div class="col-sm-8"><input type="text" placeholder="nhập..." v-model="reason" /></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="modal-footer" style="padding: 0">
                      <div class="col-sm-6" style="border-right: 1px solid #dee2e6; padding: 1em 0" >
                        <a
                          class="message-del"
                          data-dismiss="modal"
                          @click="warehouse(lend_id)"
                          >Nhập kho</a
                        >
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
                  </form>
                </div>
              </div>
            </div>
            <!-- end modal import -->
            <!-- modal export -->
            <div
              class="modal fade"
              id="export"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exportUser"
              aria-hidden="true"
            >
              <div class="modal-dialog" role="document">
                <div
                  class="modal-content"
                  style="margin: 130px auto"
                >
                  <div class="modal-header">
                    <h3 class="modal-title" id="delRentUser">
                      Xuất thiết bị
                    </h3>
                    <button
                      type="button"
                      class="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <form action="">
                    <div class="modal-body">
                      <div class="row" style="padding: 15px; text-align: left">
                        <div class="list-user">
                          <div class="d-flex py-2">
                            <div class="col-sm-4">Họ và tên</div>
                            <div class="col-sm-8"><input type="text" v-model="nameUser" disabled/></div>
                          </div>
                          <div class="d-flex py-2">
                            <div class="col-sm-4">Bộ phận</div>
                            <div class="col-sm-8"><input type="text" v-model="department_code" disabled/></div>
                          </div>
                          <div class="d-flex py-2">
                            <div class="col-sm-4">Mã thiết bị</div>
                            <div class="col-sm-8"><input type="text" v-model="code" disabled/></div>
                          </div>
                          <div class="d-flex py-2">
                            <div class="col-sm-4">Mô tả</div>
                            <div class="col-sm-8"><input type="text" v-model="name" disabled/></div>
                          </div>
                          <div class="d-flex py-2">
                            <div class="col-sm-4">Lý do</div>
                            <div class="col-sm-8"><input type="text" placeholder="nhập..." v-model="reason" /></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="modal-footer" style="padding: 0">
                      <div class="col-sm-6" style="border-right: 1px solid #dee2e6; padding: 1em 0" >
                        <a
                          class="message-del"
                          data-dismiss="modal"
                          @click="remove(lend_id)"
                          >Xuất</a
                        >
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
                  </form>
                </div>
              </div>
            </div>
            <!-- end modal export -->
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
      useRents: [],
      units: ["D1","D2","D3","QA1","QA2","HR","PR"],
      isAll: true,
      isUnit: false,
      checkUnit: null,
      lend_id: null,
      user_id: null,
      nameUser: null,
      department_code: null,
      code: null,
      name: null,
      insurance_start: null,
      insurance_end: null,
      warranty: null,
      describe: null,
      reason: null,
      product: null,
    };
  },
  methods: {
    getData: async function() {
      const userRent = await axios.get('http://127.0.0.1:8000/api/use-rent')
          this.useRents = userRent.data
          this.isUnit = false;
          console.log(1111, this.useRents);
    },
    newUpdate: async function(newId) {
      console.log(newId);
       const changeSeat = await axios.get('http://localhost:8080/v2/e2bf1d7a/update', {
         a: 1,
       });
       if(changeSeat == 'success'){
         console.log(changeSeat);
         this.getData();
       }
    },
    department: async function(unit) {
      const checkUnit = await axios.post('http://127.0.0.1:8000/api/department', { unit: unit })
      this.useRents = checkUnit.data
      this.isUnit = true;
      this.isAll = false;
      this.check = unit;
    },
    check: function(lend_id) {
      axios.post('http://127.0.0.1:8000/api/warranty', {lend_id: lend_id})
      .then(response => {
        this.lend_id = response.data.LEND_ID
        this.user_id = response.data.ID
        this.nameUser = response.data.name
        this.department_code = response.data.department_code
        this.code = response.data.DEVICE_CODE
        this.name = response.data.repository.NAME
        this.product = response.data.repository.PRODUCT_ID
        console.log(response.data);
      })
    },
    updateWarranty: async function(lend_id) {
      if(this.warranty == '') {
        alert("Vui lòng nhập Phiếu bảo hành!");
      } else {
        const update = await axios.post('http://127.0.0.1:8000/api/warranty-update', {
          lend_id: lend_id,
          insurance_start: this.insurance_start,
          insurance_end: this.insurance_end,
          warranty: this.warranty,
          describe: this.describe,
        })
        if(update.data == 'success'){
          alert('Chuyển bảo hành thành công!');
          this.getData();
        }
      }
    },
    warehouse: async function(lend_id) {
      var formatted_date = new Date().toJSON().slice(0,10).replace(/-/g,'-');
      const importNew = await axios.post('http://127.0.0.1:8000/api/lend-import', {
        lend_id: lend_id,
        user_id: this.user_id,
        reason: this.reason,
        product: this.product,
        date: formatted_date,
      })
      if(importNew.data == 'success'){
        alert('Nhập về kho thành công!');
        this.reason = '';
        this.getData();
      }
    },
    remove: async function(lend_id) {
      var formatted_date = new Date().toJSON().slice(0,10).replace(/-/g,'-');
      const exportNew = await axios.post('http://127.0.0.1:8000/api/lend-export', {
        lend_id: lend_id,
        user_id: this.user_id,
        reason: this.reason,
        product: this.product,
        date: formatted_date,
      })
      if(exportNew.data == 'success'){
        alert('Xuất thiết bị thành công!');
        this.reason = '';
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
