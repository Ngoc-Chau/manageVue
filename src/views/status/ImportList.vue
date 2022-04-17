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
              <h2>QUẢN LÝ NHẬP KHO</h2>
            </div>
            <div style="border: 1px solid; padding: 12px;">
              <div style="float: right; margin-bottom: 10px;">
                <a href="" data-toggle="modal" data-target="#addEquipment" @click="addEquipment()"><i class="fa fa-cart-plus"></i> Thêm thiết bị</a>
              </div>
              <!-- modal add -->
              <div
                class="modal fade"
                id="addEquipment"
                tabindex="-1"
                role="dialog"
                aria-labelledby="addUserEquipment"
                aria-hidden="true"
              >
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h3 class="modal-title" id="addUserEquipment">
                        Nhập tài sản / thiết bị
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
                    <div class="modal-body">
                      <div class="row" style="padding: 15px; text-align: left;">
                        <form action="">
                          <div class="list-user">
                            <div class="d-flex py-2">
                              <div class="col-sm-4">Họ và tên</div>
                              <div class="col-sm-8"><input type="text" v-model="name" /></div>
                            </div>
                            <div class="d-flex py-2">
                              <div class="col-sm-4">Bộ phận</div>
                              <div class="col-sm-8"><input type="text" v-model="department" /></div>
                            </div>
                            <div class="d-flex py-2">
                              <div class="col-sm-4">Thời gian</div>
                              <div class="col-sm-8"><input type="date" style="width: 178px;" v-model="date" /></div>
                            </div>
                            <hr/>

                            <div class="" :class="{'available':addActive}">
                              <div class="d-flex py-2">
                                <div class="col-sm-4">Thiết bị hiện có:</div>
                              </div>
                              <div class="d-flex py-2">
                                <div class="col-sm-4">Danh mục thiết bị</div>
                                <div class="col-sm-8">
                                  <select name="cars" class="selection" v-model="selectCat" @click="getCategory()">
                                    <option value="0" selected>-- chọn --</option>
                                    <option v-for="category in categorys"
                                      :key="category.CATEGORY_ID"
                                      :value="category.CATEGORY_ID"
                                    >
                                      {{ category.NAME }}
                                    </option>
                                  </select>
                                </div>
                              </div>
                              <div class="d-flex py-2">
                                <div class="col-sm-4">Loại thiết bị</div>
                                <div class="col-sm-8">
                                  <select name="cars" class="selection" v-model="selectType" @click="getType()">
                                    <option value="0" selected>-- chọn --</option>
                                    <option v-for="type in types"
                                      :key="type.TYPE_ID"
                                      :value="type.TYPE_ID"
                                    >
                                      {{ type.NAME }}
                                    </option>
                                  </select>
                                </div>
                              </div>
                              <div class="d-flex py-2">
                                <div class="col-sm-4">Tên thiết bị</div>
                                <div class="col-sm-8">
                                  <select name="cars" class="selection" v-model="selectRepo">
                                    <option value="0" selected>-- chọn --</option>
                                    <option v-for="repository in repositorys"
                                      :key="repository.PRODUCT_ID"
                                      :value="repository.PRODUCT_ID"
                                    >
                                      {{ repository.NAME }}
                                    </option>
                                  </select>
                                </div>
                              </div>
                              <div class="d-flex py-2">
                                <div class="col-sm-4">Số lượng</div>
                                <div class="col-sm-8"><input type="number" style="width: 180px;" v-model="quantity" /></div>
                              </div>
                              <div class="d-flex py-2">
                                <div class="col-sm-12 checkEquipment">
                                  <a @click="newEquipment"><i class="fa fa-edit"></i> Thiết bị mới</a>
                                </div>
                              </div>
                              <div class="py-3">
                                <button class="btn btn-primary" @click="equipmentOld()" >Nhập kho</button>
                              </div>
                            </div>

                            <!-- EQUIPMENT NEW -->
                            <div class="" :class="{'equipment':isActive}">
                              <div class="d-flex py-2">
                                <div class="col-sm-4">Thiết bị mới:</div>
                              </div>
                              <div class="d-flex py-2">
                                <div class="col-sm-4">Danh mục thiết bị</div>
                                <div class="col-sm-8">
                                  <select name="cars" class="selection" v-model="selectCat" @click="getCategory()">
                                    <option value="0" selected>-- chọn --</option>
                                    <option v-for="category in categorys"
                                      :key="category.CATEGORY_ID"
                                      :value="category.CATEGORY_ID"
                                    >
                                      {{ category.NAME }}
                                    </option>
                                  </select>
                                </div>
                              </div>
                              <div class="d-flex py-2">
                                <div class="col-sm-4">Loại thiết bị</div>
                                <div class="col-sm-8">
                                  <select name="cars" class="selection" v-model="selectType">
                                    <option value="0" selected>-- chọn --</option>
                                    <option v-for="type in types"
                                      :key="type.TYPE_ID"
                                      :value="type.TYPE_ID"
                                    >
                                      {{ type.NAME }}
                                    </option>
                                  </select>
                                </div>
                              </div>
                              <div class="d-flex py-2">
                                <div class="col-sm-4">Tên thiết bị</div>
                                <div class="col-sm-8">
                                  <input type="text" class="selection" v-model="equipment" placeholder="Nhận tên" />
                                </div>
                              </div>
                              <div class="d-flex py-2">
                                <div class="col-sm-4">Màu sắc</div>
                                <div class="col-sm-8">
                                  <input type="text" class="selection" v-model="color" placeholder="" />
                                </div>
                              </div>
                              <div class="d-flex py-2">
                                <div class="col-sm-4">Mô tả</div>
                                <div class="col-sm-8">
                                  <textarea type="text" class="selection" v-model="description" placeholder=""></textarea>
                                </div>
                              </div>
                              <div class="d-flex py-2">
                                <div class="col-sm-4">Số lượng</div>
                                <div class="col-sm-8"><input type="number" v-model="quantity" style="width: 180px;" /></div>
                              </div>
                              <div class="d-flex py-2">
                                <div class="col-sm-12 checkEquipment">
                                  <a @click="equipmentAvailable"><i class="fa fa-edit"></i> Thiết bị có sẵn</a>
                                </div>
                              </div>
                              <div class="py-3">
                                <button class="btn btn-primary" @click="equipmentOld()" >Nhập kho</button>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- end modal add -->
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
                  <tr v-for="listImport, index in listImports" :key="listImport.MANAGE_ID">
                    <td>{{ index +1 }}</td>
                    <td>{{ listImport.ID }}</td>
                    <td>{{ listImport.name }}</td>
                    <td>{{ listImport.department_code }}</td>
                    <td>{{ listImport.lend.DEVICE_CODE }}</td>
                    <td>{{ listImport.repository.NAME }}</td>
                    <td>{{ listImport.QUANTITY }}</td>
                    <td>{{ listImport.IMPORT_DATE }}</td>
                    <td>{{ listImport.REASON }}</td>
                    <td>
                      <a data-toggle="modal" data-target="#moveTrash"><i class="fa fa-trash"></i></a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!-- modal move trash -->
            <div
              class="modal fade"
              id="moveTrash"
              tabindex="-1"
              role="dialog"
              aria-labelledby="moveTrashUser"
              aria-hidden="true"
            >
              <div class="modal-dialog" role="document">
                <div
                  class="modal-content"
                  style="margin: 130px auto"
                >
                  <div class="modal-header">
                    <h3 class="modal-title" id="moveTrashUser">
                      Xuất khỏi kho
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
                            <div class="col-sm-8"><input type="text" /></div>
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
            <!-- end modal trash -->
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
import axios from 'axios';
export default {
  components: { Sidebar, HeaderEsc },
  async created () {
     this.getData();
  },
  data() {
    return {
      addActive: false,
      isActive: true,
      listImports: [],
      user_id: "0048",
      name: "Phạm Thị Hằng",
      department: "HR",
      date: null,
      selectCat: 0,
      categorys: [],
      selectType: 0,
      types: [],
      selectRepo: 0,
      repositorys: [],
      quantity: null,
      equipment: null,
      color: null,
      description: null,
      a: null,
    };
  },
  methods: {
    getData: async function() {
      const list = await axios.get('http://127.0.0.1:8000/api/import')
        this.listImports = list.data
        var formatted_date = new Date().toJSON().slice(0,10).replace(/-/g,'-');
        this.date = formatted_date
        console.log(1111, this.listImports);
    },
    addEquipment: async function() {
      const cat = await axios.get('http://127.0.0.1:8000/api/category')
      this.categorys = cat.data
    },
    getCategory: async function() {
      const type = await axios.post('http://127.0.0.1:8000/api/type', {cat_id: this.selectCat})
      this.types = type.data
    },
    getType: async function() {
      const repo = await axios.post('http://127.0.0.1:8000/api/repository', {type_id: this.selectType})
      this.repositorys = repo.data
      console.log(7899999,this.repositorys)
    },
    newEquipment: function () {
      this.addActive = true;
      this.isActive = false;
      this.check = 1;
    },
    equipmentAvailable: function () {
      this.addActive = false;
      this.isActive = true;
      this.check = 0;
    },
    equipmentOld: async function() {
      console.log(234, this.selectRepo);
      console.log(456, this.quantity);
      const add = await axios.post('http://127.0.0.1:8000/api/equipment-old', {
        product_id: this.selectRepo,
        quantity: this.quantity,
      })
        this.a = add.data
        console.log(add.data);
        alert('co le nào');
      // if(add.data == 'success'){
      //   alert('Nhập thành công!');
      //   this.getData();
      // }
    },
    // equipmentNew: async function() {
    //   const add = await axios.post('http://127.0.0.1:8000/api/equipment-new', {
    //     product_id: this.selectRepo,
    //     quantity: this.quantity,
    //     equipment: this.equipment,
    //     color: this.color,
    //     description: this.description,
    //   })
    //   if(add.data == 'success'){
    //     alert('Nhập thành công!');
    //     this.getData();
    //   }
    // },
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
