<template>
    <div class="admArbitMidTop">
        <lightingTit :lightingData="lightingData"></lightingTit>
        <chart :option="mapOptions"></chart>
    </div>
</template>

<script>
    import chart from "@/components/charts"
    import lightingTit from "@/components/lightingTit"

    export default {
        name: "admArbitMidTop",
        data() {
            return {
                boxTitle: "山东省",
                mapOptions: {},
                lightingData: [{
                    icon: "iconjigou",
                    num: 156,
                    name: "仲裁庭"
                }, {
                    icon: "iconzhifarenyuan",
                    num: 265,
                    name: "仲裁员"
                }, {
                    icon: "iconanjian1",
                    num: 369,
                    name: "仲裁案件"
                }]
            }
        },
        components: {
            chart,
            lightingTit
        },
        mounted() {
            this.init()
        },
        methods: {
            init() {
                this.drawMap()
            },
            drawMap() {
                let opt = {
                    baseOption: {
                        timeline: {
                            left: 0,
                            right: 0,
                            data: ["2014年", "2015年", "2016年", "2017年", "2018年"],
                            axisType: 'category',
                            tooltip: {
                                trigger: 'none'
                            },
                            bottom: 0,
                            lineStyle: {
                                color: "#00fdfb"
                            },
                            label: {
                                color: "#fff"
                            },
                            controlStyle: {
                                color: "#00ffff",
                                borderColor: "#00ffff"
                            }
                        },
                        color: ["#05bacb"],
                        legend: {
                            textStyle: {
                                color: "#fff"
                            },
                            icon: "rect",
                            left: "10%",
                            bottom: "8%",
                            data: ['纠纷数量']
                        },
                        tooltip: {
                            show: true,
                            // formatter: function(params) {
                            //     if (params.data) return params.name + '：' + params.data['value']
                            // },
                        },
                        visualMap: {
                            min: 0,
                            max: 1000,
                            left: "4%",
                            bottom: "8%",
                            text: ['高', '低'],
                            calculable: true,
                            color: ["#384685", "#05bacb"],
                            itemWidth: 16,
                            itemHeight: 120,
                            textStyle: {
                                color: "#fff"
                            },
                            seriesIndex: 1
                        },
                        geo: [{ // 地图配置
                            center: [118, 36.46],
                            map: '山东',
                            zoom: 0.9,
                            itemStyle: {
                                normal: {
                                    borderWidth: 4,//区域边框宽度
                                    borderColor: '#10fffd',//区域边框颜色
                                    shadowColor: '#046d80',
                                    shadowBlur: 14,
                                    shadowOffsetX: 10,
                                    shadowOffsetY: 5
                                }
                            }
                        }],
                        series: [{
                            type: 'effectScatter',
                            coordinateSystem: 'geo',
                            data: require("@/api/config").shandongMap["features"].map(i => {
                                return {
                                    name: i.properties.name,
                                    value: i.properties.cp
                                }
                            }),
                            itemStyle: {
                                normal: {
                                    color: '#ff6360'
                                }
                            },
                            symbolSize: 16,
                            symbolOffset: [0, -24],
                            tooltip: {
                                trigger: 'none'
                            }
                        }, { // 地图配置
                            center: [118, 36.46],
                            data: [
                                {value: 200, name: "济南市"}, {value: 900, name: "德州市"}, {value: 600, name: "潍坊市"}
                            ],
                            name: "纠纷数量",
                            type: "map",
                            map: '山东',
                            zoom: 0.9,
                            showLegendSymbol: false,
                            label: {
                                offset: [0, 8],
                                fontSize: 14,
                                show: true,//显示省份标签
                                textStyle: {color: "#fff"},//省份标签字体颜色
                                emphasis: {//对应的鼠标悬浮效果
                                    fontSize: 16,
                                    show: true,
                                    textStyle: {color: "#07508c"}
                                }
                            },
                            itemStyle: {
                                normal: {
                                    borderWidth: 1,//区域边框宽度
                                    borderColor: '#4e8fab',//区域边框颜色
                                    areaColor: "#287496"//区域颜色
                                },
                                emphasis: {
                                    borderWidth: 0,
                                    areaColor: "#fffc00"
                                }
                            }
                        }]
                    }
                }
                this.mapOptions = opt
            }
        }
    }
</script>
<style lang="stylus" scoped>
    @import "admArbitMidTop.stylus"
</style>
