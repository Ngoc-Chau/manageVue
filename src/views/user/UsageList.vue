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
                <a href="/rental-list">DANH SÁCH MƯỢN THIẾT BỊ REMOTE</a> | 
                <a href="/usage-list">DANH SÁCH SỬ DỤNG</a> | 
                <a href="/insurance-list">DANH SÁCH BẢO HÀNH</a> | 
                <a href="">KHÁC</a>
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
                    <a class="dropdown-item active" href="">D1</a>
                    <a class="dropdown-item" href="">D2</a>
                    <a class="dropdown-item" href="#">D3</a>
                    <a class="dropdown-item" href="#">QA1</a>
                    <a class="dropdown-item" href="#">QA2</a>
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
                  <tr>
                    <td>1</td>
                    <td>0441</td>
                    <td>Vũ Khúc Minh Lượng</td>
                    <td>D1</td>
                    <td>MON_64765</td>
                    <td>Màn ViewSonic</td>
                    <td>Mới</td>
                    <td>22/12/2021</td>
                    <td>
                      <a class="mr-3" data-toggle="modal" data-target="#insurance"><i class="fa fa-cogs"></i></a>
                      <a data-toggle="modal" data-target="#delRent"><i class="fa fa-minus-circle"></i></a>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>0441</td>
                    <td>Vũ Khúc Minh Lượng</td>
                    <td>D1</td>
                    <td>MON_64765</td>
                    <td>Màn ViewSonic</td>
                    <td>Mới</td>
                    <td>22/12/2021</td>
                    <td>
                      <a class="mr-3" data-toggle="modal" data-target="#delRent"><i class="fa fa-cogs"></i></a>
                      <a data-toggle="modal" data-target="#delRent"><i class="fa fa-minus-circle"></i></a>
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
                            <div class="col-sm-8"><input type="text" value="Nguyễn Văn Ngọc Hoàng" disabled/></div>
                          </div>
                          <div class="d-flex py-2">
                            <div class="col-sm-4">Bộ phận</div>
                            <div class="col-sm-8"><input type="text" value="D1" disabled/></div>
                          </div>
                          <div class="d-flex py-2">
                            <div class="col-sm-4">Mã thiết bị</div>
                            <div class="col-sm-8"><input type="text" value="Mon_24534" disabled/></div>
                          </div>
                          <div class="d-flex py-2">
                            <div class="col-sm-4">Mô tả</div>
                            <div class="col-sm-8"><input type="text" value="Màn hình ViewSonic" disabled/></div>
                          </div>
                          <div class="d-flex py-2">
                            <div class="col-sm-4">Thời gian bảo hành</div>
                            <div class="col-sm-8"><input type="date" style="width: 178px;" /></div>
                          </div>
                          <div class="d-flex py-2">
                            <div class="col-sm-4">Thời gian trả</div>
                            <div class="col-sm-8"><input type="date" style="width: 178px;" /></div>
                          </div>
                          <div class="d-flex py-2">
                            <div class="col-sm-4">Ghi chú</div>
                            <div class="col-sm-8"><textarea style="width: 178px;" type="text"></textarea></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="modal-footer" style="padding: 0">
                      <div
                        class="col-sm-6"
                        style="border-right: 1px solid #dee2e6; padding: 1em 0"
                      >
                        <button type="submit" style="border: none; background: none;" class="message-del">Xuất</button>
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
                  style="margin: 130px auto"
                >
                  <div class="modal-header">
                    <h3 class="modal-title" id="delRentUser">
                      Xuất về kho
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
                            <div class="col-sm-8"><input type="text" value="Nguyễn Văn Ngọc Hoàng" disabled/></div>
                          </div>
                          <div class="d-flex py-2">
                            <div class="col-sm-4">Bộ phận</div>
                            <div class="col-sm-8"><input type="text" value="D1" disabled/></div>
                          </div>
                          <div class="d-flex py-2">
                            <div class="col-sm-4">Mã thiết bị</div>
                            <div class="col-sm-8"><input type="text" value="Mon_24534" disabled/></div>
                          </div>
                          <div class="d-flex py-2">
                            <div class="col-sm-4">Mô tả</div>
                            <div class="col-sm-8"><input type="text" value="Màn hình ViewSonic" disabled/></div>
                          </div>
                          <div class="d-flex py-2">
                            <div class="col-sm-4">Lý do</div>
                            <div class="col-sm-8"><input type="text" placeholder="nhập..." /></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="modal-footer" style="padding: 0">
                      <div
                        class="col-sm-6"
                        style="border-right: 1px solid #dee2e6; padding: 1em 0"
                      >
                        <button type="submit" style="border: none; background: none;" class="message-del">Xuất</button>
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
            <!-- end modal del -->
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
      addActive: false,
      isActive: true,
      blockAs: [],
      blockBs: [],
      areaSeat: [],
    };
  },
  methods: {
    transferChange: function (ob)  {
      this.addActive = true;
      this.isActive = false;
      this.areaSeat = ob;
      console.log(123123, ob);
    },
    outTransfer: function () {
      this.addActive = false;
      this.isActive = true;
    },
    getData: async function() {
      const blockA = await axios.get('http://localhost:8080/v2/e2bf1d7a/testdata')
          this.blockAs = blockA.data.data[0]
          this.blockBs = blockA.data.data[1]
          console.log(1111, this.blockAs);
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
