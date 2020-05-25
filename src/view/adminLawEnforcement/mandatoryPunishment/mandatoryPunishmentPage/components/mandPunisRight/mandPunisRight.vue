<template>
    <div class="mandPunisRight">
        <titleName>被监管对象类型分布</titleName>
        <charts :option="optTop" class="rightTop"></charts>
        <titleName>案源来源分布</titleName>
        <charts :option="optMid" class="rightMid"></charts>
        <titleName>案源状态分布</titleName>
        <charts :option="optBot" class="rightBot"></charts>
    </div>
</template>

<script>
    import titleName from "@/components/titleName"
    import charts from "@/components/charts"

    export default {
        name: "mandPunisRight",
        components: {
            titleName,
            charts
        },
        data() {
            return {
                optTop: {},
                optBot: {},
                optMid: {},
            }
        },
        mounted() {
            this.init();
        },
        methods: {
            init() {
                this.drawTop();
                this.drawMid();
                this.drawBot();
            },
            drawTop() {
                const opt = {
                    tooltip: {
                        formatter: '{b}: {c}人, 占比{d}%'
                    },
                    series: {
                        type: 'pie',
                        color: ["#00ffd0", "#00ff55", "#177dff", "#00b6ff", "#41d700", "#d7d700", "#ff7d35", "#ff4141"],
                        radius: [65, 90],
                        name: '访问来源',
                        label: {
                            formatter: "{b}\n{c}，{d}%",
                            color: "#fff",
                            fontSize: 14,
                        },
                        labelLine: {
                            // length: 5,
                            // length2:3,
                            lineStyle: {
                                color: "#fff",
                            }
                        },
                        itemStyle: {
                            borderColor: '#05223a',
                            borderWidth: 2,
                        },
                        hoverOffset: 5,
                        selectedOffset: 5,
                        data: [
                            {value: 335, name: '企业'},
                            {value: 679, name: '个体户'},
                            {value: 1548, name: '农村专业合作社'},
                            {value: 679, name: '事业单位'},
                            {value: 679, name: '政府机关'},
                            {value: 679, name: '社会团体'},
                            {value: 679, name: '其他'},
                        ],
                    }
                };
                this.optTop = opt;
            },
            //
            drawMid() {
                let data = [
                    [5000, 14000, 28000, 31000, 42000, 28000, 31000]
                ]
                let opt = {
                    color: ["rgba(0,183,238, 1)", "rgba(86,199,60, 1)"],
                    tooltip: {
                        show: false,
                    },
                    radar: {
                        center: ["50%", "53%"],
                        radius: "60%",
                        startAngle: 90,
                        splitNumber: 4,
                        shape: "circle",
                        splitArea: {
                            areaStyle: {
                                color: ["transparent"]
                            }
                        },
                        axisLabel: {
                            show: false,
                            fontSize: 20,
                            color: "#000",
                            fontStyle: "normal",
                            fontWeight: "normal"
                        },
                        axisLine: {
                            show: true,
                            lineStyle: {
                                type: "dotted",
                                color: "#00ffff"
                            }
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                type: "dotted",
                                color: "#00ffff"
                            }
                        },
                        // shape: 'circle',
                        name: {
                            formatter: function (value, indicator) {
                                return `{a|${value}}\n{a|${data[0][indicator.key]}}`
                            },
                            rich: {
                                a: {
                                    color: '#fff',
                                    fontSize: 14
                                },

                            }
                        },
                        indicator: [
                            {
                                name: '电话举报',
                                key: 0
                            },
                            {
                                name: '来信举报',
                                key: 1
                            },
                            {
                                name: '来访举报',
                                key: 2
                            },
                            {
                                name: '网络举报',
                                key: 3
                            },
                            {
                                name: '执法检查',
                                key: 4
                            },
                            {
                                name: '其他机关移送',
                                key: 5
                            },
                            {
                                name: '其他',
                                key: 5
                            },
                        ]
                    },

                    series: {
                        type: "radar",
                        symbol: "circle",
                        symbolSize: 5,
                        areaStyle: {
                            normal: {
                                color: "rgba(0,255,255, 0.4)"
                            }
                        },
                        itemStyle: {
                            color: 'rgba(0,255,255, 1)',
                            borderColor: 'rgba(0,255,255, 0.3)',
                            borderWidth: 5,
                        },
                        lineStyle: {
                            normal: {
                                color: "rgba(0,255,255, 0.3)",
                                width: 0
                            },
                        },
                        data: data
                    }
                };
                this.optMid = opt;
            },
            drawBot() {
                const opt = {
                    tooltip : {
                        trigger: 'axis',
                        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        },
                    },
                    grid: {
                        left:"20px",
                        right:"20px",
                        bottom:"40px",
                        top:"40px",
                        containLabel: true
                    },
                    xAxis: {
                        type : 'category',
                        axisLine: {
                            lineStyle: {
                                color: "#00fefe",
                                width: 1
                            }
                        },
                        splitLine: {
                            show:false
                        },
                        axisLabel: {
                            color: "#fff",
                            interval: 0,
                            formatter:function(params) {
                                var newParamsName = "";
                                var paramsNameNumber = params.length;
                                var provideNumber = 3;  //一行显示几个字
                                var rowNumber = Math.ceil(paramsNameNumber / provideNumber);
                                if (paramsNameNumber > provideNumber) {
                                    for (var p = 0; p < rowNumber; p++) {
                                        var tempStr = "";
                                        var start = p * provideNumber;
                                        var end = start + provideNumber;
                                        if (p == rowNumber - 1) {
                                            tempStr = params.substring(start, paramsNameNumber);
                                        } else {
                                            tempStr = params.substring(start, end) + "\n";
                                        }
                                        newParamsName += tempStr;
                                    }

                                } else {
                                    newParamsName = params;
                                }
                                return newParamsName
                            },
                        },
                        axisTick: {
                            show: false
                        },
                        data : ['案源登记','案源登记','审核中','待立案','不予立案','立案处理中','已结案']
                    },
                    yAxis: {
                        axisLine: {
                            show:false
                        },
                        splitLine: {
                            lineStyle: {
                                color: ["#007a77"]
                            }
                        },
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            color: "#fff",
                            formatter: function (value) {
                                return value > 1000 ? Math.ceil(value / 1000) + "k" : value
                            }
                        }
                    },
                    series:[
                        {
                            type: 'bar',
                            stack: '总量',
                            barWidth:22,
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
                            data: [0, 1700, 1400, 1200, 300, 0,0]
                        },
                        {
                            type: 'bar',
                            stack: '总量',
                            label: {
                                normal: {
                                    show: true,
                                    position: 'inside'
                                }
                            },
                            barWidth:22,
                            itemStyle: {
                                color: {
                                    type: 'linear',
                                    x: 0,
                                    y: 1,
                                    x2: 0,
                                    y2: 0,
                                    colorStops: [{
                                        offset: 0, color: '#00b5b6' // 0% 处的颜色
                                    }, {
                                        offset: 1, color: '#11ebbf' // 100% 处的颜色
                                    }],
                                    global: false // 缺省为 false
                                },
                                // barBorderRadius: [4, 0, 0, 4],
                            },
                            data:[2900, 1200, 300, 200, 900, 300, 300]
                        }
                    ]
                };
                this.optBot = opt;
            },
        },
    }
</script>

<style lang="stylus" scoped>
    @import "mandPunisRight.stylus"
</style>
