<template>
    <div class="midBottom">
        <titleName>各监狱人员分布</titleName>
        <div class="midContent sdcmScrollbar">
            <div class="content" :style="filWidth">
                <chart :option="option"></chart>
            </div>
        </div>
    </div>
</template>

<script>
    import titleName from "@/components/titleName"
    import chart from "@/components/charts"
    import echarts from 'echarts'

    export default {
        name: "midBottom",
        components: {
            titleName,
            chart
        },
        data() {
            return {
                option: {},
                contentWidth: ""
            }
        },
        props: {
            //各监狱人员分布
            prisonPersonnelFB: {
                type: Object
            }
        },
        mounted() {
            this.init()
        },
        computed: {
            filWidth() {
                return `min-width:${(this.prisonPersonnelFB.xName ? this.prisonPersonnelFB.xName.length * 80 : 0) + 150}px`
            }
        },
        methods: {
            init() {
                this.draw()
            },
            draw() {
                let opt = {
                    legend: {
                        textStyle: {
                            color: "#fff"
                        },
                        left: 50,
                        top: 6,
                        data: [{name: '在押罪犯', icon: "rect"}, {name: '女性罪犯', icon: "rect"}, {name: "未成年犯", icon: "rect"}]
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    grid: {
                        left: 60,
                        top: 40,
                        bottom: 30,
                        right: 20
                    },
                    xAxis: {
                        data: this.prisonPersonnelFB.xName || [],
                        axisLabel: {
                            color: "#fff",
                            interval: 0
                        },
                        axisTick: {
                            alignWithLabel: true
                        },
                        axisLine: {
                            lineStyle: {
                                color: "#00fefe"
                            }
                        }
                    },
                    yAxis: {
                        splitLine: {
                            lineStyle: {
                                color: ["#007a77"]
                            }
                        },
                        axisLine: {
                            show: false
                        },
                        axisLabel: {
                            color: "#fff",
                            formatter: function (value) {
                                return value > 1000 ? Math.ceil(value / 1000) + "k" : value
                            }
                        }
                    },
                    series: [{
                        name: "在押罪犯",
                        type: 'bar',
                        itemStyle: {
                            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                offset: 0,
                                color: "#17bd7f" // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: "#00f0be" // 100% 处的颜色
                            }], false),
                            barBorderRadius: [4, 4, 0, 0]
                        },
                        data: this.prisonPersonnelFB.zyData || []
                    }, {
                        name: "女性罪犯",
                        type: 'bar',
                        itemStyle: {
                            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                offset: 0,
                                color: "#0053b8" // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: "#1d79e6" // 100% 处的颜色
                            }], false),
                            barBorderRadius: [4, 4, 0, 0]
                        },
                        data: this.prisonPersonnelFB.nxData || []
                    }, {
                        name: "未成年犯",
                        type: 'bar',
                        itemStyle: {
                            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                offset: 0,
                                color: "#0db232" // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: "#04e77b" // 100% 处的颜色
                            }], false),
                            barBorderRadius: [4, 4, 0, 0]
                        },
                        data: this.prisonPersonnelFB.wcnData || []
                    }]
                };
                this.option = opt
            }
        },
        watch: {
            prisonPersonnelFB() {
                this.init();
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "midBottom.stylus"
</style>
