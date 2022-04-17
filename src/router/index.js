import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: '/',
    name: 'RentalList',
    component: () => import('../views/lend/RentalList.vue')
  },
  {
    path: '/add-rental-list/:user_id',
    name: 'AddRentalList',
    component: () => import('../views/lend/AddRentalList.vue')
  },
  {
    path: '/usage-list',
    name: 'UsageList',
    component: () => import('../views/lend/UsageList.vue')
  },
  {
    path: '/insurance-list',
    name: 'Insurance',
    component: () => import('../views/lend/Insurance.vue')
  },
  {
    path: '/import-list',
    name: 'ImportList',
    component: () => import('../views/status/ImportList.vue')
  },
  {
    path: '/export-list',
    name: 'ExportList',
    component: () => import('../views/status/ExportList.vue')
  },
  {
    path: '/equipment-stock',
    name: 'EquipmentStock',
    component: () => import('../views/stockroom/Equipment.vue')
  },
  {
    path: '/equipment-list/:id',
    name: 'EquipmentList',
    component: () => import('../views/stockroom/EquipmentList.vue')
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
