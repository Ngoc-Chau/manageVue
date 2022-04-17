<template>
  <div class="" style="position: fixed; width: 1650px; z-index: 999">
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
            <a
              class="nav-icon dropdown-toggle d-inline-block d-sm-none"
              href="#"
              data-bs-toggle="dropdown"
            >
              <i class="align-middle" data-feather="settings"></i>
            </a>
            <a
              class="nav-link dropdown-toggle d-none d-sm-inline-block"
              href="#"
              data-bs-toggle="dropdown"
            >
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
              <img
                src="img/icons/images.png"
                width="30px"
                class="rounded-circle"
                alt="hihi"
              />
            </a>
            <div class="dropdown-menu dropdown-menu-end">
              <a class="dropdown-item" href="pages-profile.html"
                ><i class="align-middle me-1" data-feather="user"></i>Thong tin
                ca nhan</a
              >
              <a class="dropdown-item" href="#"
                ><i class="align-middle me-1" data-feather="pie-chart"></i>Doi
                mat khau</a
              >
              <a class="dropdown-item" href="#"
                ><i class="align-middle me-1" data-feather="pie-chart"></i>dang
                xuat</a
              >
            </div>
          </li>
        </ul>
      </div>
    </nav>
    <nav
      class="navbar navbar-expand navbar-light navbar-bg"
      style="border-bottom: 2px solid"
    >
      <a class="nav-tag" href="">Trang chu </a>
      <span>/</span>
      <a class="nav-tag" href="">Danh sach cong so </a>
      <span>/</span>
      <a class="nav-tag"> cho ngoi </a>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
