import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    // {
    //     path : '/tugas2',
    //     name : 'transaksi.tugas2',
    //     component:()=> import('../views/transaksi/tugas2.vue')
    // },
    {
        path : '/tugas.vue',
        name : 'transaksi.tugas',
        require:()=> import('../views/transaksi/tugas.vue')
    }
    // {
    //     path : '/tugas4',
    //     name : 'transaksi.tugas4',
    //     component:()=> import('../views/transaksi/tugas4.vue')
    // }
];
const router = createRouter({
    history : createWebHistory(),
    routes
})
export default router;