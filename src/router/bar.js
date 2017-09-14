import BarHome from '../views/bar/home.vue'
import Home from '../views/Home.vue'

export default {
    path: '/',
    component: Home,
    name: '菜鸟图表',
    iconCls: 'fa fa-bar-chart',//图标样式class
    leaf: true,
    children: [{
        path: '/bar',
        component: BarHome,
        name: '柱状图'
    }]
};
