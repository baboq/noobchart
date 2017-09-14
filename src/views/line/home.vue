<template>
    <section class="chart-container">
        <el-row>
            <el-col :span="12">
                <div id="chartLine" style="width:100%; height:400px;"></div>
                <div style="float:right;">
                    <el-button type="primary">使用模板</el-button>
                </div>
            </el-col>
            <el-col :span="12">
                <div id="chartLine2" style="width:100%; height:400px;"></div>
                <div style="float:right;">
                    <el-button type="primary">使用模板</el-button>
                </div>
            </el-col>
        </el-row>
        <el-row style="padding-top:20px;">
            <el-col :span="12">
                <div id="chartLine3" style="width:100%; height:400px;"></div>
                <div style="float:right;">
                    <el-button type="primary">使用模板</el-button>
                </div>
            </el-col>
            <el-col :span="12">
                <div id="chartLine4" style="width:100%; height:400px;"></div>
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
                chartLine: null,
                chartLine2: null,
                chartLine3: null,
                chartLine4: null,
            }
        },
        mounted: function () {
            var _this = this;
            //基于准备好的dom，初始化echarts实例
            this.chartLine = echarts.init(document.getElementById('chartLine'));
            this.chartLine2 = echarts.init(document.getElementById('chartLine2'));
            this.chartLine3 = echarts.init(document.getElementById('chartLine3'));
            this.chartLine4 = echarts.init(document.getElementById('chartLine4'));

            this.chartLine.setOption({
                title: {
                    text: '访问入口统计'
                },
                tooltip: {
                    trigger: 'axis'
                },
                toolbox: {
                    show: true,
                    feature: {
                        saveAsImage: {}
                    }
                },
                legend: {
                    data: ['邮件营销', '联盟广告', '搜索引擎']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        name: '邮件营销',
                        type: 'line',
                        stack: '总量',
                        data: [120, 132, 101, 134, 90, 230, 210]
                    },
                    {
                        name: '联盟广告',
                        type: 'line',
                        stack: '总量',
                        data: [220, 182, 191, 234, 290, 330, 310]
                    },
                    {
                        name: '搜索引擎',
                        type: 'line',
                        stack: '总量',
                        data: [820, 932, 901, 934, 1290, 1330, 1320]
                    }
                ]
            });
            this.chartLine2.setOption({
                title: {
                    text: '一天用电量分布',
                    subtext: '纯属虚构'
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross'
                    }
                },
                toolbox: {
                    show: true,
                    feature: {
                        saveAsImage: {}
                    }
                },
                xAxis:  {
                    type: 'category',
                    boundaryGap: false,
                    data: ['00:00', '01:15', '02:30', '03:45', '05:00', '06:15', '07:30', '08:45', '10:00', '11:15', '12:30', '13:45', '15:00', '16:15', '17:30', '18:45', '20:00', '21:15', '22:30', '23:45']
                },
                yAxis: {
                    type: 'value',
                    axisLabel: {
                        formatter: '{value} W'
                    },
                    axisPointer: {
                        snap: true
                    }
                },
                visualMap: {
                    show: false,
                    dimension: 0,
                    pieces: [{
                        lte: 6,
                        color: 'green'
                    }, {
                        gt: 6,
                        lte: 8,
                        color: 'red'
                    }, {
                        gt: 8,
                        lte: 14,
                        color: 'green'
                    }, {
                        gt: 14,
                        lte: 17,
                        color: 'red'
                    }, {
                        gt: 17,
                        color: 'green'
                    }]
                },
                series: [
                    {
                        name:'用电量',
                        type:'line',
                        smooth: true,
                        data: [300, 280, 250, 260, 270, 300, 550, 500, 400, 390, 380, 390, 400, 500, 600, 750, 800, 700, 600, 400],
                        markArea: {
                            data: [ [{
                                name: '早高峰',
                                xAxis: '07:30'
                            }, {
                                xAxis: '10:00'
                            }], [{
                                name: '晚高峰',
                                xAxis: '17:30'
                            }, {
                                xAxis: '21:15'
                            }] ]
                        }
                    }
                ]
            });

            this.chartLine3.setOption({
                title: {
                    text: '堆叠区域图'
                },
                tooltip : {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: '#6a7985'
                        }
                    }
                },
                legend: {
                    data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
                },
                toolbox: {
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
                xAxis : [
                    {
                        type : 'category',
                        boundaryGap : false,
                        data : ['周一','周二','周三','周四','周五','周六','周日']
                    }
                ],
                yAxis : [
                    {
                        type : 'value'
                    }
                ],
                series : [
                    {
                        name:'邮件营销',
                        type:'line',
                        stack: '总量',
                        areaStyle: {normal: {}},
                        data:[120, 132, 101, 134, 90, 230, 210]
                    },
                    {
                        name:'联盟广告',
                        type:'line',
                        stack: '总量',
                        areaStyle: {normal: {}},
                        data:[220, 182, 191, 234, 290, 330, 310]
                    },
                    {
                        name:'视频广告',
                        type:'line',
                        stack: '总量',
                        areaStyle: {normal: {}},
                        data:[150, 232, 201, 154, 190, 330, 410]
                    },
                    {
                        name:'直接访问',
                        type:'line',
                        stack: '总量',
                        areaStyle: {normal: {}},
                        data:[320, 332, 301, 334, 390, 330, 320]
                    },
                    {
                        name:'搜索引擎',
                        type:'line',
                        stack: '总量',
                        label: {
                            normal: {
                                show: true,
                                position: 'top'
                            }
                        },
                        areaStyle: {normal: {}},
                        data:[820, 932, 901, 934, 1290, 1330, 1320]
                    }
                ]
                        });
                        this.chartLine4.setOption({
                            title: {
                                text: '一天用电量分布',
                                subtext: '纯属虚构'
                            },
                            tooltip: {
                                trigger: 'axis',
                                axisPointer: {
                                    type: 'cross'
                                }
                            },
                            toolbox: {
                                show: true,
                                feature: {
                                    saveAsImage: {}
                                }
                            },
                            xAxis:  {
                                type: 'category',
                                boundaryGap: false,
                                data: ['00:00', '01:15', '02:30', '03:45', '05:00', '06:15', '07:30', '08:45', '10:00', '11:15', '12:30', '13:45', '15:00', '16:15', '17:30', '18:45', '20:00', '21:15', '22:30', '23:45']
                            },
                            yAxis: {
                                type: 'value',
                                axisLabel: {
                                    formatter: '{value} W'
                                },
                                axisPointer: {
                                    snap: true
                                }
                            },
                            visualMap: {
                                show: false,
                                dimension: 0,
                                pieces: [{
                                    lte: 6,
                                    color: 'green'
                                }, {
                                    gt: 6,
                                    lte: 8,
                                    color: 'red'
                                }, {
                                    gt: 8,
                                    lte: 14,
                                    color: 'green'
                                }, {
                                    gt: 14,
                                    lte: 17,
                                    color: 'red'
                                }, {
                                    gt: 17,
                                    color: 'green'
                                }]
                            },
                            series: [
                                {
                                    name:'用电量',
                                    type:'line',
                                    smooth: true,
                                    data: [300, 280, 250, 260, 270, 300, 550, 500, 400, 390, 380, 390, 400, 500, 600, 750, 800, 700, 600, 400],
                                    markArea: {
                                        data: [ [{
                                            name: '早高峰',
                                            xAxis: '07:30'
                                        }, {
                                            xAxis: '10:00'
                                        }], [{
                                            name: '晚高峰',
                                            xAxis: '17:30'
                                        }, {
                                            xAxis: '21:15'
                                        }] ]
                                    }
                                }
                            ]
                        });
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
