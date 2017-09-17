<template>
    <section class="chart-container">
        <el-row v-loading="loading">
            <div id="chartBar" style="width:100%; height:400px;"></div>
            <div style="float:right;">
                <el-button type="primary" @click.native="dialogShow=true">修改数据</el-button>
            </div>
        </el-row>
        <el-dialog title="填写数据" v-model="dialogShow" :close-on-click-modal="false">
            <el-form :model="temp" label-width="100px" ref="temp">
            <el-form-item>
                    <el-input type="primary" v-model="temp.title"></el-input>
                </el-form-item>
            <el-form-item>
                    <el-input type="primary" v-model="temp.subtitle"></el-input>
                </el-form-item>
            <el-form-item>
                    <el-input type="primary" v-model="temp.yaxis.value"></el-input>
                </el-form-item>
            <el-form-item>
                    <el-input type="primary" v-model="temp.datas.data1"></el-input>
                </el-form-item>
            <el-form-item>
                    <el-input type="primary" v-model="temp.datas.data2"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click.native="draw()" :loading="loading">绘 图</el-button>
            </div>
        </el-dialog>
    </section>
</template>

<script>
    import echarts from 'echarts'

    export default {
        data() {
            return {
	        loading: false,
	        dialogShow: true,
                chartBar: null,
		temp: {
		    title: "各国人口",
	            subtitle: "数据来自网络",
		    yaxis: {
			value: "巴西,印尼,美国,印度,中国,世界人口(万)",
	            },
	            datas: {
	                data1: "",
			data2: "",
	            },
		},
		options1: {
                    title: {
                        text: '',
                        subtext: ''
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
            }
        },
	methods: {
            draw: function () {
		   this.loading = true;
		   this.options1.title.text = this.temp.title;
		   this.options1.title.subtext = this.temp.subtitle;
		   this.options1.yAxis.data = this.temp.yaxis.value.split(",");
		   this.options1.series[0].data = this.temp.datas.data1.split(",");
		   this.options1.series[1].data = this.temp.datas.data2.split(",");
		   this.chartBar.setOption(this.options1);
		   this.loading = false;
		   this.dialogShow = false;
            }
	},
        mounted: function () {
            var _this = this;
            //基于准备好的dom，初始化echarts实例
            this.chartBar = echarts.init(document.getElementById('chartBar'));
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
