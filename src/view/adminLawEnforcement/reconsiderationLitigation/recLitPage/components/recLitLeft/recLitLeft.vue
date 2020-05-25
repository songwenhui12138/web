<template>
    <div class="recLitLeft">
        <titleName>复议案件来源分布</titleName>
        <charts :option="optTop" class="leftTop"></charts>
        <div class="botList">
            <div :class="['list','list_'+i]" v-for="(data,i) in botChartsData">
                <div class="cir">{{data.value}}</div>
                <div class="line"></div>
            </div>
        </div>
        <titleName>复议事项类型分布</titleName>
        <charts :option="optMid" class="leftMid"></charts>
        <titleName>案件应诉方式分布</titleName>
        <charts :option="optBot" class="leftBot"></charts>
    </div>
</template>

<script>
    import titleName from "@/components/titleName"
    import charts from "@/components/charts"
    import navChart from "@/components/navChart"
    export default {
        name: "recLitLeft",
        components: {
            titleName,
            charts,
            navChart
        },
        data() {
            return {
                optTop: {},
                optBot: {},
                optMid: {},
            }
        },
        props: {
            botChartsData: {
                type: Array,
                default() {
                    return [
                        {
                            name: "正常",
                            value: 754
                        },
                        {
                            name: "历史",
                            value: 388
                        },
                        {
                            name: "应诉",
                            value: 458
                        }
                    ]
                }
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            init() {
                this.drawTop();
                this.drawMid();
                this.drawBot();
            },
            drawTop() {
                let data = this.botChartsData;
                let sumNum = eval(data.map(item => {
                    return item.value
                }).join('+'));

                /*
                data 数据来源
                initRadius 初始化圆心的宽度
                initSpace 饼图之间的间隔
                initWidth 饼图的宽度
                 */
                function getData(data, initRadius, initWidth, initSpace) {
                    var res = []
                    for (let i = 0; i < data.length; i++) {
                        res.push({
                            name: data[i].name,
                            type: 'pie',
                            clockWise: false, //顺时加载
                            hoverAnimation: false, //鼠标移入变大
                            legendHoverLink: false,
                            radius: [initRadius + (i * (initSpace + initWidth)) + "%", initRadius + (i * (initSpace + initWidth) + initWidth) + "%"],
                            center: ["34%", "56%"],
                            label: {
                                show: false
                            },
                            color: ["#147cff", "#08ff56", "#01fecf"][i],
                            data: [{
                                value: sumNum / 2,
                                name: '',
                                itemStyle: {
                                    color: "#011c31"
                                }
                            }, {
                                value: data[i].value,
                                name: data[i].name,
                                itemStyle: {
                                    color: ["#147cff", "#08ff56", "#01fecf"][i]
                                }
                            }, {
                                value: sumNum - data[i].value,
                                name: '',
                                itemStyle: {
                                    color: "#03475a"
                                }
                            }, {
                                value: sumNum / 2,
                                name: '',
                                itemStyle: {
                                    color: "#011c31"
                                }
                            }]
                        })
                    }
                    return res;
                }

                const opt = {
                    series: getData(data, 36, 6, 5),
                    legend: {
                        bottom: "68px",
                        right: "60px",
                        textStyle: {
                            color: "#fff"
                        },
                        selectedMode:false,
                        orient: "vertical",
                        data: data.map(i => {
                            return {name: i.name, icon: "rect"}
                        })
                    },
                };
                this.optTop = opt
            },
            drawMid() {
                let data = [{
                    name: "行政处罚",
                    value: 2331
                }, {
                    name: "行政强制措施",
                    value: 1855
                }, {
                    name: "行政征收",
                    value: 1870
                }, {
                    name: "行政许可",
                    value: 1153
                }, {
                    name: "举报投诉处理",
                    value: 2219
                }, {
                    name: "行政确权",
                    value: 729
                }, {
                    name: "行政确认",
                    value: 327
                }, {
                    name: "信息公开",
                    value: 227
                }, {
                    name: "行政不作为",
                    value: 227
                }, {
                    name: "其他",
                    value: 227
                }];
                const opt = {
                    tooltip: {
                        formatter: '{b}: {c}人, 占比{d}%'
                    },
                    color: ["#00ffd0", "#00ff55", "#177dff", "#00b6ff", "#41d700", "#d7d700", "#ff7d35", "#ff4141", "#d35ee8", "#6683ff"],
                    series: {
                        type: 'pie',
                        radius: [20, 90],
                        center: ['50%', '50%'],
                        roseType: 'area',
                        data: data || [],
                        labelLine: {
                            smooth: true,
                            length: 2,
                            length2: 3,
                            lineStyle: {
                                color: "#fff",
                            }
                        },
                        label: {
                            color: "#fff",
                            fontSize: 14,
                        },
                    }
                };
                this.optMid = opt;
            },
            drawBot() {
                let data = [
                    {value: 601, name: '兼职'},
                    {value: 121, name: '专职'},
                ];
                const opt = {
                    tooltip: {
                        formatter: '{b}: {c}, 占比{d}%'
                    },
                    series: {
                        type: 'pie',
                        color: ["#177dff", "#00ff55"],
                        radius: [64, 73],
                        center: ['50%', '50%'],
                        label: {
                            position: 'outside',
                            formatter: '{b|{b}：}{c|{c}}\n {b|占比:{d}%}',
                            rich: {
                                b: {
                                    align: "center",
                                    fontSize: 14,
                                    color: "#fff",
                                    lineHeight: 20,
                                    borderColor: '#fff'
                                },
                                c: {
                                    fontWeight: "bold",
                                    align: "center",
                                    fontSize: 18,
                                    lineHeight: 20,
                                }
                            }
                        },
                        labelLine: {
                            length: 5,
                        },
                        hoverOffset: 5,
                        selectedOffset: 5,
                        data: data,
                    }
                };
                this.optBot = opt;
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "recLitLeft.stylus"
</style>
