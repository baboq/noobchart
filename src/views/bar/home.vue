<template>
    <section class="chart-container">
        <el-row>
            <el-col :span="12">
                <div id="chartBar" style="width:100%; height:400px;"></div>
                <div style="float:right;">
                    <el-button type="primary" @click="goDraw()">使用模板</el-button>
                </div>
            </el-col>
            <el-col :span="12">
                <div id="chartBar2" style="width:100%; height:400px;"></div>
                <div style="float:right;">
                    <el-button type="primary">使用模板</el-button>
                </div>
            </el-col>
        </el-row>
    </section>
</template>

<script>
    import echarts from 'echarts'

    export default {
        data() {
            return {
                chartBar: null,
                chartBar2: null,
		options1: {
                    title: {
                        text: '各国人口',
                        subtext: '数据来自网络'
                    },
                    toolbox: {
                        show: true,
                        feature: {
                            saveAsImage: {}
                        }
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    },
                    legend: {
                        data: ['2011年', '2012年']
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'value',
                        boundaryGap: [0, 0.01]
                    },
                    yAxis: {
                        type: 'category',
                        data: ['巴西', '印尼', '美国', '印度', '中国', '世界人口(万)']
                    },
                    series: [
                        {
                            name: '2011年',
                            type: 'bar',
                            data: [18203, 23489, 29034, 104970, 131744, 630230]
                        },
                        {
                            name: '2012年',
                            type: 'bar',
                            data: [19325, 23438, 31000, 121594, 134141, 681807]
                        }
                    ]
		},
                options2: {
                    title: {
                        text: '深圳月最低生活费组成（单位:元）',
                        subtext: 'From ExcelHome',
                        sublink: 'http://e.weibo.com/1341556070/AjQH99che'
                    },
                    tooltip : {
                        trigger: 'axis',
                        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        },
                        formatter: function (params) {
                            var tar = params[1];
                            return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
                        }
                    },
                    toolbox: {
                        show: true,
                        feature: {
                            saveAsImage: {}
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: {
                        type : 'category',
                        splitLine: {show:false},
                        data : ['总费用','房租','水电费','交通费','伙食费','日用品数']
                    },
                    yAxis: {
                        type : 'value'
                    },
                    series: [
                        {
                            name: '辅助',
                            type: 'bar',
                            stack:  '总量',
                            itemStyle: {
                                normal: {
                                    barBorderColor: 'rgba(0,0,0,0)',
                                    color: 'rgba(0,0,0,0)'
                                },
                                emphasis: {
                                    barBorderColor: 'rgba(0,0,0,0)',
                                    color: 'rgba(0,0,0,0)'
                                }
                            },
                            data: [0, 1700, 1400, 1200, 300, 0]
                        },
                        {
                            name: '生活费',
                            type: 'bar',
                            stack: '总量',
                            label: {
                                normal: {
                                    show: true,
                                    position: 'inside'
                                }
                            },
                            data:[2900, 1200, 300, 200, 900, 300]
                        }
                    ]
		}
            }
        },
	methods: {
	    goDraw: function() {
		 this.$router.push("/bar/draw1");
            }
	},
        mounted: function () {
            var _this = this;
            //基于准备好的dom，初始化echarts实例
            this.chartBar = echarts.init(document.getElementById('chartBar'));
            this.chartBar2 = echarts.init(document.getElementById('chartBar2'));

            this.chartBar.setOption(this.options1);
            this.chartBar2.setOption(this.options2);
        }
    }
</script>
<style scoped>
    .chart-container {
        width: 100%;
        float: left;
    }

    .el-col {
        padding: 30px 20px;
    }
</style>
