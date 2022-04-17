<template>
  <div class="wrapper">
    <nav id="sidebar" class="sidebar js-sidebar">
      <div class="sidebar-content js-simplebar">
        <div class="bg-dark" style="position: fixed; width: 259px; z-index: 999;">
          <a class="sidebar-brand headBar" href="/">
            <span class="align-middle">Fabbi</span>
          </a>
        </div>

        <ul class="sidebar-nav" style="margin-top: 66px;">
          <li class="sidebar-item">
            <a class="sidebar-link navItem" href="/">
              <i class="align-middle" data-feather="sliders"></i>
              <span class="align-middle">Dashboard</span>
            </a>
          </li>

          <li class="sidebar-header">MANAGEMENT</li>

          <li class="sidebar-item">
            <a class="sidebar-link navItem" href="">
              <i class="align-middle" data-feather="sliders"></i>
              <span class="align-middle">Cong so</span>
            </a>
          </li>

          <li class="sidebar-item">
            <a class="sidebar-link navItem" href="">
              <i class="align-middle" data-feather="clock"></i>
              <span class="align-middle">Lam them OT</span>
            </a>
          </li>

          <li class="sidebar-item">
            <a class="sidebar-link navItem" href="">
              <i class="align-middle" data-feather="file-plus"></i>
              <span class="align-middle">Bo sung cong so</span>
            </a>
          </li>

          <li class="sidebar-item">
            <a class="sidebar-link navItem" href="">
              <i class="align-middle" data-feather="file-text"></i>
              <span class="align-middle">Nghi phep</span>
            </a>
          </li>

          <li class="sidebar-item">
            <a class="sidebar-link navItem" href="">
              <i class="align-middle" data-feather="book"></i>
              <span class="align-middle">Huong dan su dung</span>
            </a>
          </li>
        </ul>

        <div class="sidebar-cta footBar">
            <a class="sidebar-brand" href="/" style="float: right;">
              <i class="align-middle" data-feather="chevron-left"></i>
            </a>
        </div>
      </div>
    </nav>

    <div class="main">  
      <div class="" style="position: fixed; width: 1650px; z-index: 999;">
        <nav class="navbar navbar-expand navbar-light navbar-bg border-bottom">
          <a class="sidebar-toggle js-sidebar-toggle">
          <i class="hamburger align-self-center"></i>
          </a>

          <div class="navbar-collapse collapse">
          <ul class="navbar-nav navbar-align">
            <li class="nav-item dropdown">
            <a
              class="nav-icon dropdown-toggle"
              href="#"
              id="alertsDropdown"
              data-bs-toggle="dropdown"
            >
              <div class="position-relative">
              <i class="align-middle" data-feather="bell"></i>
              <span class="indicator">4</span>
              </div>
            </a>
            <div
              class="dropdown-menu dropdown-menu-lg dropdown-menu-end py-0"
              aria-labelledby="alertsDropdown"
            >
              <div class="dropdown-menu-header">4 thong bao</div>
              <div class="list-group">
              <a href="#" class="list-group-item">
                <div class="row g-0 align-items-center">
                <div class="col-2">
                  <i class="text-danger" data-feather="alert-circle"></i>
                </div>
                <div class="col-10">
                  <div class="text-dark">thuc hien gi do</div>
                  <div class="text-muted small mt-1">khoi dong lai</div>
                  <div class="text-muted small mt-1">30s</div>
                </div>
                </div>
              </a>
              </div>
              <div class="dropdown-menu-footer">
              <a href="#" class="text-muted">hien thi tat ca</a>
              </div>
            </div>
            </li>
            <li class="nav-item dropdown" style="border: 1px solid">
            <a class="nav-icon dropdown-toggle d-inline-block d-sm-none" href="#" data-bs-toggle="dropdown">
              <i class="align-middle" data-feather="settings"></i>
            </a>
            <a class="nav-link dropdown-toggle d-none d-sm-inline-block" href="#" data-bs-toggle="dropdown">
              <span class="text-dark">Tieng viet</span>
            </a>
            <div class="dropdown-menu dropdown-menu-end">
              <a class="dropdown-item" href="pages-profile.html">Tieng anh</a>
              <a class="dropdown-item" href="#">Tieng viet</a>
              <a class="dropdown-item" href="#">Tieng nhat</a>
            </div>
            </li>
            <li class="nav-item dropdown">
            <a
              class="nav-icon dropdown-toggle"
              href="#"
              id="messagesDropdown"
              data-bs-toggle="dropdown"
            >
              <img src="img/icons/images.png" width="30px" class="rounded-circle" alt="hihi"/>
            </a>
            <div class="dropdown-menu dropdown-menu-end">
              <a class="dropdown-item" href="pages-profile.html"
              ><i class="align-middle me-1" data-feather="user"></i>Thong
              tin ca nhan</a
              >
              <a class="dropdown-item" href="#"
              ><i class="align-middle me-1" data-feather="pie-chart"></i>Doi
              mat khau</a
              >
              <a class="dropdown-item" href="#"
              ><i class="align-middle me-1" data-feather="pie-chart"></i
              >dang xuat</a
              >
            </div>
            </li>
          </ul>
          </div>
        </nav>
          <nav class="navbar navbar-expand navbar-light navbar-bg" style="border-bottom: 2px solid;">
          <a class="nav-tag" href="">Trang chu </a>
          <span>/</span>
          <a class="nav-tag" href="">Danh sach cong so </a>
          <span>/</span>
          <a class="nav-tag"> cho ngoi </a>
        </nav>
      </div>

      <main class="content">
				<div class="container-fluid p-0">
          <div class="row">
            <div class="text-center head-title">
              <h1 class="h3 mb-3" style="font-size: 40px">Danh sach cho ngoi Fabbi</h1>
              <div class="step">
                <a
                  class="nav-link dropdown-toggle d-none d-sm-inline-block"
                  data-bs-toggle="dropdown" style="border: 1px solid; color:duck"
                >
                  <span class="text-dark">Tang 17</span>
                </a>
                <div class="dropdown-menu dropdown-menu-end">
                  <a class="dropdown-item" href="/rental-list">Danh sách mượn tb</a>
                  <a class="dropdown-item" href="/import-list">Nhập kho</a>
                  <a class="dropdown-item" href="/Export-list">Xuất kho</a>
                  <a class="dropdown-item" href="#">Tang 15</a>
                  <a class="dropdown-item" href="#">Tang 17</a>
                </div>
              </div>
            </div>
          </div>
					<div class="row mt-4">
						<div class="col-sm-6 set-table">
							<div class="d-flex justify-content-center">
                <div class="col-sm-3 seat tool-tip">
                  <span class="tooltiptext">
                    <div class="d-flex tooltip-head" style="padding: 5px 0;">
                      <a href="">
                        <i class="" data-feather="trash-2"></i>
                      </a>
                      <a href="">
                        <i class="" data-feather="repeat"></i>
                      </a>
                      <span style="margin: 0 35px 0 35px;">Thong tin</span>
                      <a href="">
                        <i class="" data-feather="x"></i>
                      </a>
                    </div>
                    <div class="toolborder" >
                      <p style="text-align:center;">ID: 444</p>
                      <p>Ho va ten: Nguyen thi thu minh</p>
                      <p>Email: minhntt@fabbi.io</p>
                      <p>Don vi: D1</p>
                      <p>Chuc vu: nhan vien</p>
                    </div>
                  </span>
                  <p><i class="check" data-feather="check"></i></p>
                  <p>nguyet NTM - HRM</p>
                  <p> 1</p>
                </div>
                <div class="col-sm-3 seat tool-tip">
                  <span class="tooltiptext">
                    <div class="d-flex tooltip-head" style="padding: 5px 0;">
                      <a href="">
                        <i class="" data-feather="trash-2"></i>
                      </a>
                      <a href="">
                        <i class="" data-feather="repeat"></i>
                      </a>
                      <span style="margin: 0 35px 0 35px;">Thong tin</span>
                      <a href="">
                        <i class="" data-feather="x"></i>
                      </a>
                    </div>
                    <div class="toolborder" >
                      <p style="text-align:center;">ID: 444</p>
                      <p>Ho va ten: Nguyen thi thu minh</p>
                      <p>Email: minhntt@fabbi.io</p>
                      <p>Don vi: D1</p>
                      <p>Chuc vu: nhan vien</p>
                    </div>
                  </span>
                  <p><i class="check" data-feather="check"></i></p>
                  <p>khanh NTM - HRM</p>
                  <p> 1</p>
                </div>
                <div class="col-sm-3 seat tool-tip">
                  <span class="tooltiptext">
                    <div class="d-flex tooltip-head" style="padding: 5px 0;">
                      <a href="">
                        <i class="" data-feather="trash-2"></i>
                      </a>
                      <a href="">
                        <i class="" data-feather="repeat"></i>
                      </a>
                      <span style="margin: 0 35px 0 35px;">Thong tin</span>
                      <a href="">
                        <i class="" data-feather="x"></i>
                      </a>
                    </div>
                    <div class="toolborder" >
                      <p style="text-align:center;">ID: 444</p>
                      <p>Ho va ten: Nguyen thi thu minh</p>
                      <p>Email: minhntt@fabbi.io</p>
                      <p>Don vi: D1</p>
                      <p>Chuc vu: nhan vien</p>
                    </div>
                  </span>
                  <p><i class="check" data-feather="check"></i></p>
                  <p>hung NTM - HRM</p>
                  <p> 1</p>
                </div>
              </div>
              <div class="d-flex justify-content-center">
                <div class="col-sm-3 seat">
                  <p><i class="check" data-feather="check"></i></p>
                  <p>Hungng NTM - HRM</p>
                  <p> 1</p>
                </div>
                <div class="col-sm-3 seat">
                  <p><i class="check" data-feather="check"></i></p>
                  <p>Hungng NTM - HRM</p>
                  <p> 1</p>
                </div>
                <div class="col-sm-3 seat">
                  <p><i class="check" data-feather="check"></i></p>
                  <p>Hungng NTM - HRM</p>
                  <p> 1</p>
                </div>
              </div>
						</div>
            <div class="col-sm-6 set-table">
							<div class="d-flex justify-content-center">
                <div class="col-sm-3 seat tool-tip">
                  <span class="tooltiptext">
                    <div class="d-flex tooltip-head" style="padding: 5px 0;">
                      <a href="">
                        <i class="" data-feather="trash-2"></i>
                      </a>
                      <a href="">
                        <i class="" data-feather="repeat"></i>
                      </a>
                      <span style="margin: 0 35px 0 35px;">Thong tin</span>
                      <a href="">
                        <i class="" data-feather="x"></i>
                      </a>
                    </div>
                    <div class="toolborder" >
                      <p style="text-align:center;">ID: 444</p>
                      <p>Ho va ten: Nguyen thi thu minh</p>
                      <p>Email: minhntt@fabbi.io</p>
                      <p>Don vi: D1</p>
                      <p>Chuc vu: nhan vien</p>
                    </div>
                  </span>
                  <p><i class="check" data-feather="check"></i></p>
                  <p>Hungng NTM - HRM</p>
                  <p> 1</p>
                </div>
                <div class="col-sm-3 seat tool-tip">
                  <span class="tooltiptext">
                    <div class="d-flex tooltip-head" style="padding: 5px 0;">
                      <a href="">
                        <i class="" data-feather="trash-2"></i>
                      </a>
                      <a href="">
                        <i class="" data-feather="repeat"></i>
                      </a>
                      <span style="margin: 0 35px 0 35px;">Thong tin</span>
                      <a href="">
                        <i class="" data-feather="x"></i>
                      </a>
                    </div>
                    <div class="toolborder" >
                      <p style="text-align:center;">ID: 444</p>
                      <p>Ho va ten: Nguyen thi thu minh</p>
                      <p>Email: minhntt@fabbi.io</p>
                      <p>Don vi: D1</p>
                      <p>Chuc vu: nhan vien</p>
                    </div>
                  </span>
                  <p><i class="check" data-feather="check"></i></p>
                  <p>Hungng NTM - HRM</p>
                  <p> 1</p>
                </div>
                <div class="col-sm-3 seat tool-tip">
                  <span class="tooltiptext">
                    <div class="d-flex tooltip-head" style="padding: 5px 0;">
                      <a href="">
                        <i class="" data-feather="trash-2"></i>
                      </a>
                      <a href="">
                        <i class="" data-feather="repeat"></i>
                      </a>
                      <span style="margin: 0 35px 0 35px;">Thong tin</span>
                      <a href="">
                        <i class="" data-feather="x"></i>
                      </a>
                    </div>
                    <div class="toolborder" >
                      <p style="text-align:center;">ID: 444</p>
                      <p>Ho va ten: Nguyen thi thu minh</p>
                      <p>Email: minhntt@fabbi.io</p>
                      <p>Don vi: D1</p>
                      <p>Chuc vu: nhan vien</p>
                    </div>
                  </span>
                  <p><i class="check" data-feather="check"></i></p>
                  <p>Hungng NTM - HRM</p>
                  <p> 1</p>
                </div>
                
              </div>
              <div class="d-flex justify-content-center">
                <div class="col-sm-3 seat">
                  <p><i class="check" data-feather="check"></i></p>
                  <p>Hungng NTM - HRM</p>
                  <p> 1</p>
                </div>
                <div class="col-sm-3 seat">
                  <p><i class="check" data-feather="check"></i></p>
                  <p>Hungng NTM - HRM</p>
                  <p> 1</p>
                </div>
                <div class="col-sm-3 seat">
                  <p><i class="check" data-feather="check"></i></p>
                  <p>Hungng NTM - HRM</p>
                  <p> 1</p>
                </div>
              </div>
						</div>

            <div class="col-sm-6 set-table">
							<div class="d-flex justify-content-center">
                <div class="col-sm-3 seat">
                  <i class="check" data-feather="x"></i>
                  <p>item 2</p>
                  <p> 1</p>
                </div>
                <div class="col-sm-3 seat">
                  <i class="check" data-feather="x"></i>
                  <p>item 2</p>
                  <p> 1</p>
                </div>
                <div class="col-sm-3 seat">
                  <i class="check" data-feather="x"></i>
                  <p>item 2</p>
                  <p> 1</p>
                </div>
              </div>
              <div class="d-flex justify-content-center">
                <div class="col-sm-3 seat">
                  <i class="check" data-feather="x"></i>
                  <p>item 2</p>
                  <p> 1</p>
                </div>
                <div class="col-sm-3 seat">
                  <i class="check" data-feather="x"></i>
                  <p>item 2</p>
                  <p> 1</p>
                </div>
                <div class="col-sm-3 seat">
                  <i class="check" data-feather="x"></i>
                  <p>item 2</p>
                  <p> 1</p>
                </div>
              </div>
						</div>
            <div class="col-sm-6 set-table">
							<div class="d-flex justify-content-center">
                <div class="col-sm-3 seat">
                  <i class="check" data-feather="x"></i>
                  <p>item 2</p>
                  <p> 1</p>
                </div>
                <div class="col-sm-3 seat">
                  <i class="check" data-feather="x"></i>
                  <p>item 2</p>
                  <p> 1</p>
                </div>
                <div class="col-sm-3 seat">
                  <i class="check" data-feather="x"></i>
                  <p>item 2</p>
                  <p> 1</p>
                </div>
              </div>
              <div class="d-flex justify-content-center">
                <div class="col-sm-3 seat">
                  <i class="check" data-feather="x"></i>
                  <p>item 2</p>
                  <p> 1</p>
                </div>
                <div class="col-sm-3 seat">
                  <i class="check" data-feather="x"></i>
                  <p>item 2</p>
                  <p> 1</p>
                </div>
                <div class="col-sm-3 seat">
                  <i class="check" data-feather="x"></i>
                  <p>item 2</p>
                  <p> 1</p>
                </div>
              </div>
						</div>
					</div>
				</div>
			</main>


      <footer class="footer">
        <div class="container-fluid">
          <div class="row text-muted">
            <div class="col-6 text-start">
              <p class="mb-0">Copyright &copy; 2021 Fabbi JSC. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "Home",
  components: {},
};
</script>

<style scoped>
  .headBar {
    background: #303c54;
  }
  .footBar{
    background: #303c54;
  }
  .footBar:hover{
    background: #212529;
  }
  .sidebar-nav {
    background: #3c4b64;
    text-align: left;
  }
  .sidebar-link {
    background: #3c4b64;
  }
  .sidebar-link:hover {
    background: #6610f2;
  }
  .nav-tag {
    padding: 0 5px;
  }
  .navItem{
    padding-top: 1.5em;
    padding-bottom: 1.5em;
  }
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
</style>
