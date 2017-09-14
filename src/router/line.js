import LineHome from '../views/line/home.vue'
import Home from '../views/Home.vue'

export default {
    path: '/',
    component: Home,
    name: '菜鸟图表',
    iconCls: 'fa fa-line-chart',//图标样式class
    leaf: true,
    children: [{
        path: '/line',
        component: LineHome,
        name: '折线图'
    }]
};
