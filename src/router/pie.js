import PieHome from '../views/pie/home.vue'
import Home from '../views/Home.vue'

export default {
    path: '/',
    component: Home,
    name: '菜鸟图表',
    iconCls: 'fa fa-pie-chart',//图标样式class
    leaf: true,
    children: [{
        path: '/pie',
        component: PieHome,
        name: '饼形图'
    }]
};
