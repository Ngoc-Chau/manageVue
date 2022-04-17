<template>
  <div class="wrapper">
    <sidebar />
    <div class="main">
      <header-esc />
      <main class="content">
        <div class="container-fluid p-0">
          <div class="row">
            <div class="text-center head-title">
              <h2 class="h3 mb-3" style="font-size: 40px">
                Danh sach cho ngoi Fabbi
              </h2>
              <div class="step">
                <a
                  class="nav-link dropdown-toggle d-none d-sm-inline-block"
                  data-bs-toggle="dropdown"
                  style="border: 1px solid; color: duck"
                >
                  <span class="text-dark">Tang 11</span>
                </a>
                <div
                  class="dropdown-menu dropdown-menu-end"
                  style="text-align: center"
                >
                  <a class="dropdown-item active" href="/tang11">Tang 11</a>
                  <a class="dropdown-item" href="/tang13">Tang 13</a>
                  <a class="dropdown-item" href="#">Tang 14</a>
                  <a class="dropdown-item" href="#">Tang 15</a>
                  <a class="dropdown-item" href="/">Tang 17</a>
                </div>
              </div>
            </div>
          </div>

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
          <div class="row">
            <div class="" :class="{ 'col-sm-8': addActive }">
              <div class="row mt-2">
                <div class="col-sm-12 set-table">
                  <div class="d-flex justify-content-center">
                    <div class="stage">
                      <h2>SAN KHAU</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <!-- left ----------------------------------------------------------------------------------------------------------- -->
                <div class="col-sm-4">
                  <div class="mt-4">
                    <div class="d-flex justify-content-center">
                      <div class="pantry-1">
                        <h2>PANTRY 1</h2>
                      </div>
                    </div>
                  </div>
                  <div class="mb-4">
                    <div class="d-flex justify-content-center">
                      <div class="phone-booth">
                        <h2>PHONE BOOTH</h2>
                      </div>
                      <div class="phone-booth">
                        <h2>PHONE BOOTH</h2>
                      </div>
                    </div>
                  </div>
                  <div class="pt-4">
                    <div class="d-flex justify-content-center">
                      <div class="phone-booth">
                        <h2>PHONE BOOTH</h2>
                      </div>
                      <div class="phone-booth">
                        <h2>PHONE BOOTH</h2>
                      </div>
                    </div>
                  </div>
                  <div class="">
                    <div class="d-flex justify-content-center">
                      <div class="meeting static">
                        <h2>PHONG HOP TINH</h2>
                      </div>
                    </div>
                  </div>
                  <div class="">
                    <div class="d-flex justify-content-center">
                      <div class="meeting heat">
                        <h2>PHONG HOP NHIET</h2>
                      </div>
                    </div>
                  </div>
                  <div class="">
                    <div class="d-flex justify-content-center">
                      <div class="serve">
                        <h2>SERVE</h2>
                      </div>
                    </div>
                  </div>
                  <div class="">
                    <div class="d-flex justify-content-center">
                      <div class="serve">
                        <h2>KHO</h2>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- center ----------------------------------------------------------------------------------------------------------- -->
                <div class="col-sm-4">
                  <div class="py-4">
                    <div class="d-flex justify-content-center">
                      <div class="seat tool-tip">
                        <span class="tooltiptext">
                          <div
                            class="d-flex tooltip-head"
                            style="padding: 5px 0"
                          >
                            <a
                              href=""
                              data-toggle="modal"
                              data-target="#delUser"
                            >
                              <i class="fa fa-trash-o"></i>
                            </a>
                            <a @click="transfer">
                              <i class="fa fa-refresh"></i>
                            </a>
                            <span style="margin: 0 35px 0 35px">Thong tin</span>
                            <a href="">
                              <i class="fa fa-close"></i>
                            </a>
                          </div>
                          <div class="toolborder">
                            <p style="text-align: center">ID: 444</p>
                            <p>Ho va ten: Nguyen thi thu minh</p>
                            <p>Email: minhntt@fabbi.io</p>
                            <p>Don vi: D1</p>
                            <p>Chuc vu: nhan vien</p>
                          </div>
                        </span>
                        <p><i class="check fa fa-check"></i></p>
                        <p>nguyet NTM - HRM</p>
                        <p>1</p>
                      </div>
                      <div class="seat tool-tip">
                        <span class="tooltiptext">
                          <div
                            class="d-flex tooltip-head"
                            style="padding: 5px 0"
                          >
                            <a href="">
                              <i class="fa fa-trash-o"></i>
                            </a>
                            <a href="">
                              <i class="fa fa-refresh"></i>
                            </a>
                            <span style="margin: 0 35px 0 35px">Thong tin</span>
                            <a href="">
                              <i class="fa fa-close"></i>
                            </a>
                          </div>
                          <div class="toolborder">
                            <p style="text-align: center">ID: 444</p>
                            <p>Ho va ten: Nguyen thi thu minh</p>
                            <p>Email: minhntt@fabbi.io</p>
                            <p>Don vi: D1</p>
                            <p>Chuc vu: nhan vien</p>
                          </div>
                        </span>
                        <p><i class="check fa fa-check"></i></p>
                        <p>khanh NTM - HRM</p>
                        <p>1</p>
                      </div>
                      <div class="seat tool-tip">
                        <span class="tooltiptext">
                          <div
                            class="d-flex tooltip-head"
                            style="padding: 5px 0"
                          >
                            <a href="">
                              <i class="fa fa-trash-o"></i>
                            </a>
                            <a href="">
                              <i class="fa fa-refresh"></i>
                            </a>
                            <span style="margin: 0 35px 0 35px">Thong tin</span>
                            <a href="">
                              <i class="fa fa-close"></i>
                            </a>
                          </div>
                          <div class="toolborder">
                            <p style="text-align: center">ID: 444</p>
                            <p>Ho va ten: Nguyen thi thu minh</p>
                            <p>Email: minhntt@fabbi.io</p>
                            <p>Don vi: D1</p>
                            <p>Chuc vu: nhan vien</p>
                          </div>
                        </span>
                        <p><i class="check fa fa-check"></i></p>
                        <p>khanh NTM - HRM</p>
                        <p>1</p>
                      </div>
                      <div class="seat tool-tip">
                        <span class="tooltiptext">
                          <div
                            class="d-flex tooltip-head"
                            style="padding: 5px 0"
                          >
                            <a href="">
                              <i class="fa fa-trash-o"></i>
                            </a>
                            <a href="">
                              <i class="fa fa-refresh"></i>
                            </a>
                            <span style="margin: 0 35px 0 35px">Thong tin</span>
                            <a href="">
                              <i class="fa fa-close"></i>
                            </a>
                          </div>
                          <div class="toolborder">
                            <p style="text-align: center">ID: 444</p>
                            <p>Ho va ten: Nguyen thi thu minh</p>
                            <p>Email: minhntt@fabbi.io</p>
                            <p>Don vi: D1</p>
                            <p>Chuc vu: nhan vien</p>
                          </div>
                        </span>
                        <p><i class="check fa fa-check"></i></p>
                        <p>hung NTM - HRM</p>
                        <p>1</p>
                      </div>
                    </div>
                    <div class="d-flex justify-content-center">
                      <div class="seat">
                        <p><i class="check fa fa-check"></i></p>
                        <p>Hungng NTM - HRM</p>
                        <p>1</p>
                      </div>
                      <div class="seat">
                        <p><i class="check fa fa-check"></i></p>
                        <p>Hungng NTM - HRM</p>
                        <p>1</p>
                      </div>
                      <div class="seat">
                        <p><i class="check fa fa-check"></i></p>
                        <p>Hungng NTM - HRM</p>
                        <p>1</p>
                      </div>
                      <div class="seat">
                        <p><i class="check fa fa-check"></i></p>
                        <p>Hungng NTM - HRM</p>
                        <p>1</p>
                      </div>
                    </div>
                  </div>
                  <div class="py-4">
                    <div class="d-flex justify-content-center">
                      <div class="seat">
                        <p><i class="check fa fa-check"></i></p>
                        <p>Hungng NTM - HRM</p>
                        <p>1</p>
                      </div>
                      <div class="seat">
                        <p><i class="check fa fa-check"></i></p>
                        <p>Hungng NTM - HRM</p>
                        <p>1</p>
                      </div>
                      <div class="seat">
                        <p><i class="check fa fa-check"></i></p>
                        <p>Hungng NTM - HRM</p>
                        <p>1</p>
                      </div>
                      <div class="seat">
                        <p><i class="check fa fa-check"></i></p>
                        <p>Hungng NTM - HRM</p>
                        <p>1</p>
                      </div>
                    </div>
                    <div class="d-flex justify-content-center">
                      <div class="seat">
                        <p><i class="check fa fa-check"></i></p>
                        <p>Hungng NTM - HRM</p>
                        <p>1</p>
                      </div>
                      <div class="seat">
                        <p><i class="check fa fa-check"></i></p>
                        <p>Hungng NTM - HRM</p>
                        <p>1</p>
                      </div>
                      <div class="seat">
                        <p><i class="check fa fa-check"></i></p>
                        <p>Hungng NTM - HRM</p>
                        <p>1</p>
                      </div>
                      <div class="seat">
                        <p><i class="check fa fa-check"></i></p>
                        <p>Hungng NTM - HRM</p>
                        <p>1</p>
                      </div>
                    </div>
                  </div>
                  <div class="py-4">
                    <div class="d-flex justify-content-center">
                      <div class="seat">
                        <p><i class="check fa fa-check"></i></p>
                        <p>Hungng NTM - HRM</p>
                        <p>1</p>
                      </div>
                      <div class="seat">
                        <p><i class="check fa fa-check"></i></p>
                        <p>Hungng NTM - HRM</p>
                        <p>1</p>
                      </div>
                      <div class="seat">
                        <p><i class="check fa fa-check"></i></p>
                        <p>Hungng NTM - HRM</p>
                        <p>1</p>
                      </div>
                      <div class="seat">
                        <p><i class="check fa fa-check"></i></p>
                        <p>Hungng NTM - HRM</p>
                        <p>1</p>
                      </div>
                    </div>
                    <div class="d-flex justify-content-center">
                      <div class="seat">
                        <p><i class="check fa fa-check"></i></p>
                        <p>Hungng NTM - HRM</p>
                        <p>1</p>
                      </div>
                      <div class="seat">
                        <p><i class="check fa fa-check"></i></p>
                        <p>Hungng NTM - HRM</p>
                        <p>1</p>
                      </div>
                      <div class="seat">
                        <p><i class="check fa fa-check"></i></p>
                        <p>Hungng NTM - HRM</p>
                        <p>1</p>
                      </div>
                      <div class="seat">
                        <p><i class="check fa fa-check"></i></p>
                        <p>Hungng NTM - HRM</p>
                        <p>1</p>
                      </div>
                    </div>
                  </div>
                  <div class="py-4">
                    <div class="d-flex justify-content-center">
                      <div class="seat">
                        <p><i class="check fa fa-check"></i></p>
                        <p>Hungng NTM - HRM</p>
                        <p>1</p>
                      </div>
                      <div class="seat">
                        <p><i class="check fa fa-check"></i></p>
                        <p>Hungng NTM - HRM</p>
                        <p>1</p>
                      </div>
                      <div class="seat">
                        <p><i class="check fa fa-check"></i></p>
                        <p>Hungng NTM - HRM</p>
                        <p>1</p>
                      </div>
                      <div class="seat">
                        <p><i class="check fa fa-check"></i></p>
                        <p>Hungng NTM - HRM</p>
                        <p>1</p>
                      </div>
                    </div>
                    <div class="d-flex justify-content-center">
                      <div class="seat">
                        <p><i class="check fa fa-check"></i></p>
                        <p>Hungng NTM - HRM</p>
                        <p>1</p>
                      </div>
                      <div class="seat">
                        <p><i class="check fa fa-check"></i></p>
                        <p>Hungng NTM - HRM</p>
                        <p>1</p>
                      </div>
                      <div class="seat">
                        <p><i class="check fa fa-check"></i></p>
                        <p>Hungng NTM - HRM</p>
                        <p>1</p>
                      </div>
                      <div class="seat">
                        <p><i class="check fa fa-check"></i></p>
                        <p>Hungng NTM - HRM</p>
                        <p>1</p>
                      </div>
                    </div>
                  </div>
                  <div class="py-4">
                    <div class="d-flex justify-content-center">
                      <div class="seat">
                        <p><i class="check fa fa-check"></i></p>
                        <p>Hungng NTM - HRM</p>
                        <p>1</p>
                      </div>
                      <div class="seat">
                        <p><i class="check fa fa-check"></i></p>
                        <p>Hungng NTM - HRM</p>
                        <p>1</p>
                      </div>
                      <div class="seat">
                        <p><i class="check fa fa-check"></i></p>
                        <p>Hungng NTM - HRM</p>
                        <p>1</p>
                      </div>
                      <div class="seat">
                        <p><i class="check fa fa-check"></i></p>
                        <p>Hungng NTM - HRM</p>
                        <p>1</p>
                      </div>
                    </div>
                    <div class="d-flex justify-content-center">
                      <div class="seat">
                        <p><i class="check fa fa-check"></i></p>
                        <p>Hungng NTM - HRM</p>
                        <p>1</p>
                      </div>
                      <div class="seat">
                        <p><i class="check fa fa-check"></i></p>
                        <p>Hungng NTM - HRM</p>
                        <p>1</p>
                      </div>
                      <div class="seat">
                        <p><i class="check fa fa-check"></i></p>
                        <p>Hungng NTM - HRM</p>
                        <p>1</p>
                      </div>
                      <div class="seat">
                        <p><i class="check fa fa-check"></i></p>
                        <p>Hungng NTM - HRM</p>
                        <p>1</p>
                      </div>
                    </div>
                  </div>
                  <div class="py-4">
                    <div class="d-flex justify-content-center">
                      <div class="seat">
                        <p><i class="check fa fa-check"></i></p>
                        <p>Hungng NTM - HRM</p>
                        <p>1</p>
                      </div>
                      <div class="seat">
                        <p><i class="check fa fa-check"></i></p>
                        <p>Hungng NTM - HRM</p>
                        <p>1</p>
                      </div>
                      <div class="seat">
                        <p><i class="check fa fa-check"></i></p>
                        <p>Hungng NTM - HRM</p>
                        <p>1</p>
                      </div>
                      <div class="seat">
                        <p><i class="check fa fa-check"></i></p>
                        <p>Hungng NTM - HRM</p>
                        <p>1</p>
                      </div>
                    </div>
                    <div class="d-flex justify-content-center">
                      <div class="seat">
                        <p><i class="check fa fa-check"></i></p>
                        <p>Hungng NTM - HRM</p>
                        <p>1</p>
                      </div>
                      <div class="seat">
                        <p><i class="check fa fa-check"></i></p>
                        <p>Hungng NTM - HRM</p>
                        <p>1</p>
                      </div>
                      <div class="seat">
                        <p><i class="check fa fa-check"></i></p>
                        <p>Hungng NTM - HRM</p>
                        <p>1</p>
                      </div>
                      <div class="seat">
                        <p><i class="check fa fa-check"></i></p>
                        <p>Hungng NTM - HRM</p>
                        <p>1</p>
                      </div>
                    </div>
                  </div>
                  <div class="py-4">
                    <div class="d-flex justify-content-center">
                      <div class="seat">
                        <p><i class="check fa fa-check"></i></p>
                        <p>Hungng NTM - HRM</p>
                        <p>1</p>
                      </div>
                      <div class="seat">
                        <p><i class="check fa fa-check"></i></p>
                        <p>Hungng NTM - HRM</p>
                        <p>1</p>
                      </div>
                      <div class="seat">
                        <p><i class="check fa fa-check"></i></p>
                        <p>Hungng NTM - HRM</p>
                        <p>1</p>
                      </div>
                      <div class="seat">
                        <p><i class="check fa fa-check"></i></p>
                        <p>Hungng NTM - HRM</p>
                        <p>1</p>
                      </div>
                    </div>
                    <div class="d-flex justify-content-center">
                      <div class="seat">
                        <p><i class="check fa fa-check"></i></p>
                        <p>Hungng NTM - HRM</p>
                        <p>1</p>
                      </div>
                      <div class="seat">
                        <p><i class="check fa fa-check"></i></p>
                        <p>Hungng NTM - HRM</p>
                        <p>1</p>
                      </div>
                      <div class="seat">
                        <p><i class="check fa fa-check"></i></p>
                        <p>Hungng NTM - HRM</p>
                        <p>1</p>
                      </div>
                      <div class="seat">
                        <p><i class="check fa fa-check"></i></p>
                        <p>Hungng NTM - HRM</p>
                        <p>1</p>
                      </div>
                    </div>
                  </div>
                  <div class="py-4">
                    <div class="d-flex justify-content-center">
                      <div class="seat">
                        <p><i class="check fa fa-check"></i></p>
                        <p>Hungng NTM - HRM</p>
                        <p>1</p>
                      </div>
                      <div class="seat">
                        <p><i class="check fa fa-check"></i></p>
                        <p>Hungng NTM - HRM</p>
                        <p>1</p>
                      </div>
                      <div class="seat">
                        <p><i class="check fa fa-check"></i></p>
                        <p>Hungng NTM - HRM</p>
                        <p>1</p>
                      </div>
                      <div class="seat">
                        <p><i class="check fa fa-check"></i></p>
                        <p>Hungng NTM - HRM</p>
                        <p>1</p>
                      </div>
                    </div>
                    <div class="d-flex justify-content-center">
                      <div class="seat">
                        <p><i class="check fa fa-check"></i></p>
                        <p>Hungng NTM - HRM</p>
                        <p>1</p>
                      </div>
                      <div class="seat">
                        <p><i class="check fa fa-check"></i></p>
                        <p>Hungng NTM - HRM</p>
                        <p>1</p>
                      </div>
                      <div class="seat">
                        <p><i class="check fa fa-check"></i></p>
                        <p>Hungng NTM - HRM</p>
                        <p>1</p>
                      </div>
                      <div class="seat">
                        <p><i class="check fa fa-check"></i></p>
                        <p>Hungng NTM - HRM</p>
                        <p>1</p>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- right --------------------------------------------------------------------------------------- -->
                <div class="col-sm-4">
                  <div class="py-4">
                    <div class="d-flex justify-content-center">
                      <div class="seat">
                        <p><i class="check fa fa-check"></i></p>
                        <p>Hungng NTM - HRM</p>
                        <p>1</p>
                      </div>
                      <div class="seat">
                        <p><i class="check fa fa-check"></i></p>
                        <p>Hungng NTM - HRM</p>
                        <p>1</p>
                      </div>
                      <div class="seat">
                        <p>
                          <a
                            data-toggle="modal"
                            data-target="#addSeat"
                            data-whatever="@mdo"
                            ><i class="check fa fa-close"></i
                          ></a>
                        </p>
                        <p></p>
                        <p>22</p>
                      </div>
                    </div>
                    <div class="d-flex justify-content-center">
                      <div class="seat">
                        <p><i class="check fa fa-check"></i></p>
                        <p>Hungng NTM - HRM</p>
                        <p>1</p>
                      </div>
                      <div class="seat">
                        <p><i class="check fa fa-check"></i></p>
                        <p>Hungng NTM - HRM</p>
                        <p>1</p>
                      </div>
                      <div class="seat">
                        <p><i class="check fa fa-check"></i></p>
                        <p>Hungng NTM - HRM</p>
                        <p>1</p>
                      </div>
                    </div>
                  </div>
                  <div class="py-4">
                    <div class="d-flex justify-content-center">
                      <div class="seat">
                        <p><i class="check fa fa-check"></i></p>
                        <p>Hungng NTM - HRM</p>
                        <p>1</p>
                      </div>
                      <div class="seat">
                        <p><i class="check fa fa-check"></i></p>
                        <p>Hungng NTM - HRM</p>
                        <p>1</p>
                      </div>
                      <div class="seat">
                        <p><i class="check fa fa-check"></i></p>
                        <p>Hungng NTM - HRM</p>
                        <p>1</p>
                      </div>
                    </div>
                    <div class="d-flex justify-content-center">
                      <div class="seat">
                        <p><i class="check fa fa-check"></i></p>
                        <p>Hungng NTM - HRM</p>
                        <p>1</p>
                      </div>
                      <div class="seat">
                        <p><i class="check fa fa-check"></i></p>
                        <p>Hungng NTM - HRM</p>
                        <p>1</p>
                      </div>
                      <div class="seat">
                        <p><i class="check fa fa-check"></i></p>
                        <p>Hungng NTM - HRM</p>
                        <p>1</p>
                      </div>
                    </div>
                  </div>
                  <div class="py-4">
                    <div class="d-flex justify-content-center">
                      <div class="seat">
                        <p><i class="check fa fa-check"></i></p>
                        <p>Hungng NTM - HRM</p>
                        <p>1</p>
                      </div>
                      <div class="seat">
                        <p><i class="check fa fa-check"></i></p>
                        <p>Hungng NTM - HRM</p>
                        <p>1</p>
                      </div>
                      <div class="seat">
                        <p><i class="check fa fa-check"></i></p>
                        <p>Hungng NTM - HRM</p>
                        <p>1</p>
                      </div>
                    </div>
                    <div class="d-flex justify-content-center">
                      <div class="seat">
                        <p><i class="check fa fa-check"></i></p>
                        <p>Hungng NTM - HRM</p>
                        <p>1</p>
                      </div>
                      <div class="seat">
                        <p><i class="check fa fa-check"></i></p>
                        <p>Hungng NTM - HRM</p>
                        <p>1</p>
                      </div>
                      <div class="seat">
                        <p><i class="check fa fa-check"></i></p>
                        <p>Hungng NTM - HRM</p>
                        <p>1</p>
                      </div>
                    </div>
                  </div>
                  <div class="py-4">
                    <div class="d-flex justify-content-center">
                      <div class="cabinet">
                        <h2>TU GIAY</h2>
                      </div>
                    </div>
                  </div>
                  <div class="py-4">
                    <div class="d-flex justify-content-center">
                      <div class="cabinet">
                        <h2>PANTRY 2</h2>
                      </div>
                    </div>
                  </div>
                  <div class="py-4">
                    <div class="d-flex justify-content-center">
                      <div class="seat">
                        <p><i class="check fa fa-check"></i></p>
                        <p>Hungng NTM - HRM</p>
                        <p>1</p>
                      </div>
                      <div class="seat">
                        <p><i class="check fa fa-check"></i></p>
                        <p>Hungng NTM - HRM</p>
                        <p>1</p>
                      </div>
                      <div class="seat">
                        <p><i class="check fa fa-check"></i></p>
                        <p>Hungng NTM - HRM</p>
                        <p>1</p>
                      </div>
                    </div>
                    <div class="d-flex justify-content-center">
                      <div class="seat">
                        <p><i class="check fa fa-check"></i></p>
                        <p>Hungng NTM - HRM</p>
                        <p>1</p>
                      </div>
                      <div class="seat">
                        <p><i class="check fa fa-check"></i></p>
                        <p>Hungng NTM - HRM</p>
                        <p>1</p>
                      </div>
                      <div class="seat">
                        <p><i class="check fa fa-check"></i></p>
                        <p>Hungng NTM - HRM</p>
                        <p>1</p>
                      </div>
                    </div>
                  </div>
                  <div class="py-4">
                    <div class="d-flex justify-content-center">
                      <div class="seat">
                        <p><i class="check fa fa-check"></i></p>
                        <p>Hungng NTM - HRM</p>
                        <p>1</p>
                      </div>
                      <div class="seat">
                        <p><i class="check fa fa-check"></i></p>
                        <p>Hungng NTM - HRM</p>
                        <p>1</p>
                      </div>
                      <div class="seat">
                        <p><i class="check fa fa-check"></i></p>
                        <p>Hungng NTM - HRM</p>
                        <p>1</p>
                      </div>
                    </div>
                    <div class="d-flex justify-content-center">
                      <div class="seat">
                        <p><i class="check fa fa-check"></i></p>
                        <p>Hungng NTM - HRM</p>
                        <p>1</p>
                      </div>
                      <div class="seat">
                        <p><i class="check fa fa-check"></i></p>
                        <p>Hungng NTM - HRM</p>
                        <p>1</p>
                      </div>
                      <div class="seat">
                        <p><i class="check fa fa-check"></i></p>
                        <p>Hungng NTM - HRM</p>
                        <p>1</p>
                      </div>
                    </div>
                  </div>
                  <div class="py-4">
                    <div class="d-flex justify-content-center">
                      <div class="seat">
                        <p><i class="check fa fa-check"></i></p>
                        <p>Hungng NTM - HRM</p>
                        <p>1</p>
                      </div>
                      <div class="seat">
                        <p><i class="check fa fa-check"></i></p>
                        <p>Hungng NTM - HRM</p>
                        <p>1</p>
                      </div>
                      <div class="seat">
                        <p><i class="check fa fa-check"></i></p>
                        <p>Hungng NTM - HRM</p>
                        <p>1</p>
                      </div>
                    </div>
                    <div class="d-flex justify-content-center">
                      <div class="seat">
                        <p><i class="check fa fa-check"></i></p>
                        <p>Hungng NTM - HRM</p>
                        <p>1</p>
                      </div>
                      <div class="seat">
                        <p><i class="check fa fa-check"></i></p>
                        <p>Hungng NTM - HRM</p>
                        <p>1</p>
                      </div>
                      <div class="seat">
                        <p><i class="check fa fa-check"></i></p>
                        <p>Hungng NTM - HRM</p>
                        <p>1</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- modal add ---------------------------------------------------------------------------- -->
              <div
                class="modal fade"
                id="addSeat"
                tabindex="-1"
                role="dialog"
                aria-labelledby="addUserSeat"
                aria-hidden="true"
              >
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h3 class="modal-title" id="addUserSeat">
                        Them thanh vien
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
                      <div class="row" style="padding: 15px">
                        <div class="list-user">
                          <div class="d-flex py-2">
                            <div class="col-sm-9 add-user">thang ND - D2</div>
                            <div class="col-sm-3">
                              <button
                                type="button"
                                class="btn btn-outline-dark"
                              >
                                ADD
                              </button>
                            </div>
                          </div>
                          <div class="d-flex py-2">
                            <div class="col-sm-9 add-user">Hung BB - D1</div>
                            <div class="col-sm-3">
                              <button
                                type="button"
                                class="btn btn-outline-dark"
                              >
                                ADD
                              </button>
                            </div>
                          </div>
                          <div class="d-flex py-2">
                            <div class="col-sm-9 add-user">
                              Nguyen NVH - RHM
                            </div>
                            <div class="col-sm-3">
                              <button
                                type="button"
                                class="btn btn-outline-dark"
                              >
                                ADD
                              </button>
                            </div>
                          </div>
                          <div class="d-flex py-2">
                            <div class="col-sm-9 add-user">thang ND - D2</div>
                            <div class="col-sm-3">
                              <button
                                type="button"
                                class="btn btn-outline-dark"
                              >
                                ADD
                              </button>
                            </div>
                          </div>
                          <div class="d-flex py-2">
                            <div class="col-sm-9 add-user">Hung BB - D1</div>
                            <div class="col-sm-3">
                              <button
                                type="button"
                                class="btn btn-outline-dark"
                              >
                                ADD
                              </button>
                            </div>
                          </div>
                          <div class="d-flex py-2">
                            <div class="col-sm-9 add-user">
                              Nguyen NVH - RHM
                            </div>
                            <div class="col-sm-3">
                              <button
                                type="button"
                                class="btn btn-outline-dark"
                              >
                                ADD
                              </button>
                            </div>
                          </div>
                          <div class="d-flex py-2">
                            <div class="col-sm-9 add-user">thang ND - D2</div>
                            <div class="col-sm-3">
                              <button
                                type="button"
                                class="btn btn-outline-dark"
                              >
                                ADD
                              </button>
                            </div>
                          </div>
                          <div class="d-flex py-2">
                            <div class="col-sm-9 add-user">Hung BB - D1</div>
                            <div class="col-sm-3">
                              <button
                                type="button"
                                class="btn btn-outline-dark"
                              >
                                ADD
                              </button>
                            </div>
                          </div>
                          <div class="d-flex py-2">
                            <div class="col-sm-9 add-user">
                              Nguyen NVH - RHM
                            </div>
                            <div class="col-sm-3">
                              <button
                                type="button"
                                class="btn btn-outline-dark"
                              >
                                ADD
                              </button>
                            </div>
                          </div>
                          <div class="d-flex py-2">
                            <div class="col-sm-9 add-user">thang ND - D2</div>
                            <div class="col-sm-3">
                              <button
                                type="button"
                                class="btn btn-outline-dark"
                              >
                                ADD
                              </button>
                            </div>
                          </div>
                          <div class="d-flex py-2">
                            <div class="col-sm-9 add-user">Hung BB - D1</div>
                            <div class="col-sm-3">
                              <button
                                type="button"
                                class="btn btn-outline-dark"
                              >
                                ADD
                              </button>
                            </div>
                          </div>
                          <div class="d-flex py-2">
                            <div class="col-sm-9 add-user">
                              Nguyen NVH - RHM
                            </div>
                            <div class="col-sm-3">
                              <button
                                type="button"
                                class="btn btn-outline-dark"
                              >
                                ADD
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- end add -------------------------------------------------------------------------- -->

              <!-- modal del seat ---------------------------------------------------------------------------- -->
              <div
                class="modal fade"
                id="delUser"
                tabindex="-1"
                role="dialog"
                aria-labelledby="delSeatUser"
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
                      >
                        <a class="message-del">YES</a>
                      </div>
                      <div class="col-sm-6" style="padding: 1em 0">
                        <a
                          class="message-del"
                          data-dismiss="modal"
                          aria-label="Close"
                          >No</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- end del -------------------------------------------------------------------------- -->
            
            </div>
            <div class="col-sm-4" :class="{ blockRight: isActive }">
              <div class="row mt-4" style="border: 2px solid; padding: 15px">
                <div class="d-flex">
                  <div style="flex-grow: 1">
                    <h4 class="mb-3">Danh sach chuyen cho ngoi tang xx</h4>
                  </div>
                  <div>
                    <a @click="outTransfer"><i class="fa fa-remove"></i></a>
                  </div>
                </div>
                <!-- <div class="row" style="padding: 15px"> -->
                <div class="d-flex list-user">
                  <div class="row">
                    <div class="col-sm-6">
                      <div class="py-4">
                        <div class="d-flex justify-content-center">
                          <div class="seat" style="width: 100%">
                            <p>Ban so 1</p>
                            <p>Trang thai:</p>
                            <p>trong</p>
                          </div>
                          <div style="margin-top: 2.5em">
                            <button type="button" class="btn btn-outline-dark" data-toggle="modal"
                              data-target="#transfer">
                              Chuyen
                            </button>
                          </div>
                        </div>
                        <div class="d-flex justify-content-center">
                          <div class="seat" style="width: 100%">
                            <p>Ban so 1</p>
                            <p>Trang thai:</p>
                            <p>trong</p>
                          </div>
                          <div style="margin-top: 2.5em">
                            <button type="button" class="btn btn-outline-dark">
                              Chuyen
                            </button>
                          </div>
                        </div>
                        <div class="d-flex justify-content-center">
                          <div class="seat" style="width: 100%">
                            <p>Ban so 1</p>
                            <p>Trang thai:</p>
                            <p>trong</p>
                          </div>
                          <div style="margin-top: 2.5em">
                            <button type="button" class="btn btn-outline-dark">
                              Chuyen
                            </button>
                          </div>
                        </div>
                        <div class="d-flex justify-content-center">
                          <div class="seat" style="width: 100%">
                            <p>Ban so 1</p>
                            <p>Trang thai:</p>
                            <p>trong</p>
                          </div>
                          <div style="margin-top: 2.5em">
                            <button type="button" class="btn btn-outline-dark">
                              Chuyen
                            </button>
                          </div>
                        </div>
                        <div class="d-flex justify-content-center">
                          <div class="seat" style="width: 100%">
                            <p>Ban so 1</p>
                            <p>Trang thai:</p>
                            <p>trong</p>
                          </div>
                          <div style="margin-top: 2.5em">
                            <button type="button" class="btn btn-outline-dark">
                              Chuyen
                            </button>
                          </div>
                        </div>
                        <div class="d-flex justify-content-center">
                          <div class="seat" style="width: 100%">
                            <p>Ban so 1</p>
                            <p>Trang thai:</p>
                            <p>trong</p>
                          </div>
                          <div style="margin-top: 2.5em">
                            <button type="button" class="btn btn-outline-dark">
                              Chuyen
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="py-4">
                        <div class="d-flex justify-content-center">
                          <div class="seat" style="width: 100%">
                            <p>Ban so 1</p>
                            <p>Ten: hung NV</p>
                            <p>Trang thai: ton tai</p>
                          </div>
                          <div style="margin-top: 2.5em">
                            <button type="button" class="btn btn-outline-dark">
                              Chuyen
                            </button>
                          </div>
                        </div>
                        <div class="d-flex justify-content-center">
                          <div class="seat" style="width: 100%">
                            <p>Ban so 1</p>
                            <p>Ten: hung NV</p>
                            <p>Trang thai: ton tai</p>
                          </div>
                          <div style="margin-top: 2.5em">
                            <button type="button" class="btn btn-outline-dark">
                              Chuyen
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- modal transfer seat ---------------------------------------------------------------------------- -->
              <div
                class="modal fade"
                id="transfer"
                tabindex="-1"
                role="dialog"
                aria-labelledby="checkTransfer"
                aria-hidden="true"
              >
                <div class="modal-dialog" role="document">
                  <div
                    class="modal-content"
                    style="width: 60%; margin: 130px auto"
                  >
                    <div class="modal-body">
                      <div class="row">
                        <h3 class="mb-4">Thong bao</h3>
                        <p class="mt-4">Ban co muon chuyen doi cho ngoi khong?</p>
                      </div>
                    </div>
                    <div class="modal-footer" style="padding: 0">
                      <div
                        class="col-sm-6"
                        style="border-right: 1px solid #dee2e6; padding: 1em 0"
                      >
                        <a class="message-del">YES</a>
                      </div>
                      <div class="col-sm-6" style="padding: 1em 0">
                        <a
                          class="message-del"
                          data-dismiss="modal"
                          aria-label="Close"
                          >No</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- end transfer -------------------------------------------------------------------------- -->
            
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
import HeaderEsc from "./Header.vue";
import Sidebar from "./Sidebar.vue";
import axios from 'axios'
export default {
  components: { Sidebar, HeaderEsc },
  setup () {
    const blockAs = []
    const getBlockA = async () => {
      try {
        const blockA = await axios.get('http://localhost:8080/v2/e2bf1d7a/list_floor/11/1')
        blockAs.value = blockA.data
      } catch (error) {
        console.log(error);
      }
    }
    getBlockA()
    console.log(blockAs);
  },
  data() {
    return {
      addActive: false,
      isActive: true,
    };
  },
  methods: {
    transfer: function () {
      this.addActive = true;
      this.isActive = false;
    },
    outTransfer: function () {
      this.addActive = false;
      this.isActive = true;
    },
  },
};
</script>

<style scoped>
.content {
  margin-top: 10em;
}

.head-title {
  position: relative;
}
.step {
  position: absolute;
  top: 0;
  right: 0;
}
.seat {
  border: 2px solid;
  margin: 10px;
  line-height: 15px;
  font-weight: bolder;
  width: 22%;
}
.seat:hover {
  background: #1ea11a;
}
.check {
  margin-top: 10px;
}
.set-table {
  margin: 2em 0;
}

.tool-tip {
  position: relative;
  display: inline-block;
}
.tool-tip .tooltiptext {
  visibility: hidden;
  width: 220px;
  background-color: #fff;
  color: black;
  text-align: left;
  border-radius: 6px;
  border: 2px solid;
  padding: 0 10px 10px 10px;
  /* Position the tooltip */
  position: absolute;
  z-index: 1;
  bottom: 100%;
  left: 0%;
  /* margin-left: -60px; */
}
.tool-tip:hover .tooltiptext {
  visibility: visible;
}
.tool-tip .tooltip-head a {
  color: black;
}
.tool-tip .tooltip-head a:hover {
  color: blue;
}
.tool-tip .toolborder {
  border-radius: 6px;
  border: 2px solid;
  padding: 10px;
  font-weight: normal;
}
.tool-tip .toolborder p {
  margin: 5px 0;
}

/* right */
.cabinet {
  border: 2px solid;
  width: 74%;
  height: 214px;
  margin: 10px;
  padding: 90px 0;
  background: #7fd178;
}

/* left */
.pantry-1 {
  border: 2px solid;
  width: 74%;
  height: 100px;
  margin: 10px;
  padding: 30px 0;
  background: #7fd178;
}
.phone-booth {
  border: 2px solid;
  width: 36%;
  height: 200px;
  margin: 0 5px 5px 5px;
  padding: 68px 0;
}
.meeting {
  border: 2px solid;
  width: 74%;
  height: 500px;
  margin: 5px;
  padding: 230px 0;
}
.static {
  background: #bad1ff;
}
.heat {
  background: #fd8686;
}
.serve {
  border: 2px solid;
  width: 74%;
  height: 290px;
  margin: 5px;
  padding: 120px 0;
  background: #756f6f;
}
/* stage */
.stage {
  border: 2px solid;
  height: 200px;
  width: 92%;
  padding: 80px 0;
  background: #faffba;
}

.list-user {
  height: 370px;
  overflow-y: scroll;
  border: 2px solid;
  padding: 10px;
}
.blockRight {
  display: none;
}

.add-user {
  border: 2px solid;
  margin-left: 10px;
  text-align: left;
  line-height: 30px;
}
.message-del {
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1;
  color: #000;
  text-shadow: 0 1px 0 #fff;
  opacity: 0.5;
}
</style>
