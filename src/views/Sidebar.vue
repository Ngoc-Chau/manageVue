<template>
  <nav id="sidebar" class="sidebar js-sidebar">
    <div class="sidebar-content js-simplebar">
      <div class="bg-dark" style="position: fixed; width: 259px; z-index: 999">
        <a class="sidebar-brand headBar" href="/">
          <span class="align-middle">Fabbi</span>
        </a>
      </div>

      <ul class="sidebar-nav" style="margin-top: 66px">
        <li class="sidebar-item">
          <a class="sidebar-link navItem" href="/">
            <i class="fa fa-dashboard"></i>
            <span class="align-middle">Dashboard</span>
          </a>
        </li>

        <li class="sidebar-header">MANAGEMENT</li>

        <li class="sidebar-item">
          <a class="sidebar-link navItem" href="/equipment-stock">
            <i class="fa fa-list-alt"></i>
            <span class="align-middle">Danh sách trong kho</span>
          </a>
        </li>

        <li class="sidebar-item">
          <a class="sidebar-link navItem" href="/">
            <i class="fa fa-calendar"></i>
            <span class="align-middle">Danh sách mượn thiết bị</span>
          </a>
        </li>

        <li class="sidebar-item">
          <a class="sidebar-link navItem" href="/import-list">
            <i class="fa fa-cart-plus"></i>
            <span class="align-middle">Nhập thiết bị</span>
          </a>
        </li>

        <li class="sidebar-item">
          <a class="sidebar-link navItem" href="/export-list">
            <i class="fa fa-cart-arrow-down"></i>
            <span class="align-middle">Xuất thiết bị</span>
          </a>
        </li>

        <li class="sidebar-item">
          <a class="sidebar-link navItem" href="">
            <i class="fa fa-book"></i>
            <span class="align-middle">Huong dan su dung</span>
          </a>
        </li>
      </ul>

      <div class="sidebar-cta footBar">
        <a class="sidebar-brand" href="/" style="float: right">
          <i class="align-middle" data-feather="chevron-left"></i>
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
.headBar {
  background: #303c54;
}
.footBar {
  background: #303c54;
}
.footBar:hover {
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
.navItem {
  padding-top: 1.5em;
  padding-bottom: 1.5em;
}
</style>>
