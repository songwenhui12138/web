<template>
    <div class="norDocumentsPageMidTop">
        <div class="boxTitle">
            <p class="t">{{boxTitle}}</p>
            <p class="m">{{`截止日期:${afterDate}`}}</p>
        </div>
        <chart :option="mapOptions"></chart>
    </div>
</template>

<script>
    import chart from "@/components/charts"
    import {afterDate} from "@/lib/tools"

    export default {
        name: "norDocumentsPageMidTop",
        data() {
            return {
                boxTitle: "山东省",
                mapOptions: {}
            }
        },
        components: {
            chart
        },
        computed: {
            afterDate
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
                    color: ["#05bacb"],
                    legend: {
                        textStyle: {
                            color: "#fff"
                        },
                        selectedMode: 'single',
                        icon: "rect",
                        left: "12%",
                        bottom: "2%",
                        data: ["风险点数量"]
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
                        bottom: "0",
                        text: ['高', '低'],
                        calculable: true,
                        color: ["#384685", "#05bacb"],
                        itemWidth: 16,
                        itemHeight: 120,
                        textStyle: {
                            color: "#fff"
                        }
                    },
                    geo: { // 地图配置
                        center: [118, 36.26],
                        map: '山东',
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
                    },
                    series: [{ // 地图配置
                        center: [118, 36.26],
                        data: [
                            {value: 200, name: "济南市"}, {value: 900, name: "德州市"}, {value: 600, name: "潍坊市"}
                        ],
                        name: "风险点数量",
                        type: "map",
                        map: '山东',
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
                this.mapOptions = opt
            }
        }
    }
</script>
<style lang="stylus" scoped>
    @import "norDocumentsPageMidTop.stylus"
</style>
