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
                    <th scope="col">Danh mục</th>
                    <th scope="col">Loại thiết bị</th>
                    <th scope="col">Trạng thái</th>
                    <th scope="col">Số lượng còn trong kho</th>
                    <th scope="col">Các loại sản phẩm</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="equipment in equipments"
                    :key ="equipment.TYPE_ID">
                    <td>{{ equipment.category.NAME }}</td>
                    <td>{{ equipment.NAME }}</td>
                    <td>Dùng được</td>
                    <td>{{ equipment.QUANTITY }}</td>
                    <td>
                      <router-link
                        :to="{
                          name: 'EquipmentList',
                          params: { id: `${equipment.TYPE_ID}` },
                        }"
                        >Xem chi tiết
                      </router-link>
                    </td>
                  </tr>
                  <!-- <tr>
                    <td>Bộ PC</td>
                    <td>Màn hình</td>
                    <td>Dùng được</td>
                    <td>12</td>
                    <td><a href="/equipment-list">Xem chi tiết</a></td>
                  </tr>
                  <tr>
                    <td>Bộ PC</td>
                    <td>Case máy tính</td>
                    <td>Dùng được</td>
                    <td>5</td>
                    <td><a href="/equipment-list">Xem chi tiết</a></td>
                  </tr>
                  <tr>
                    <td>Bộ PC</td>
                    <td>Bàn phím</td>
                    <td>Dùng được</td>
                    <td>9</td>
                    <td><a href="/equipment-list">Xem chi tiết</a></td>
                  </tr>
                  <tr>
                    <td>Laptop</td>
                    <td>Laptop Dell</td>
                    <td>Dùng được</td>
                    <td>16</td>
                    <td><a href="/equipment-list">Xem chi tiết</a></td>
                  </tr>
                  <tr>
                    <td>Laptop</td>
                    <td>Laptop ASUS</td>
                    <td>Dùng được</td>
                    <td>11</td>
                    <td><a href="/equipment-list">Xem chi tiết</a></td>
                  </tr> -->
                </tbody>
              </table>
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
      equipments: [],
    };
  },
  methods: {
    getData: async function() {
      const getItem = await axios.get('http://127.0.0.1:8000/api/equipment-stock')
      this.equipments = getItem.data
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
