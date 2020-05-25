<template>
    <div class="admLicMidBot">
        <titleName>各区域审批人员分布</titleName>
        <charts class="mbChart" :option="optCharts"></charts>
    </div>
</template>

<script>
    import titleName from "@/components/titleName"
    import charts from "@/components/charts"

    export default {
        name: "admLicMidBot",
        components: {
            titleName,
            charts
        },
        data() {
            return {
                optCharts: {}
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            init() {
                this.draw()
            },
            draw() {
                let dataOpt = {
                    x: ["济南市", "青岛市", "潍坊市", "烟台市", "临沂市", "济宁市", "淄博市", "泰安市",  "威海市", "东营市", "聊城市", "滨州市", "德州市", "枣庄市", "日照市", "菏泽市"],
                    d: [1012, 1540, 1830, 1230, 1800,1012, 1540, 1830, 1230, 1800,1012, 1540, 1830, 1230, 1800, 1800]
                };
                let data = dataOpt.d;
                let xData = dataOpt.x;
                let max = Math.max(...data) * 1.1
                const opt = {
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow',       // 默认为直线，可选为：'line' | 'shadow'
                            shadowStyle: {},
                        }
                    },
                    grid: {
                        left: 25,
                        right: 25,
                        bottom: 10,
                        top: 20,
                        containLabel: true
                    },
                    yAxis: {
                        type: 'value',
                        boundaryGap: [0, 0.01],
                        axisLine: {
                            show: false
                        },
                        axisLabel: {
                            show: false
                        },
                        splitLine: {
                            show: false
                        },
                        max:max
                    },
                    xAxis: {
                        type: 'category',
                        data: xData,
                        axisLine: {
                            show: false,
                            lineStyle: {
                                color: '#00ffff',
                            }
                        },
                        axisTick: {
                            show: false
                        },
                        nameGap: 10,
                        axisLabel: {
                            fontSize: 14,
                            color: "#fff"
                        }
                    },
                    series: {
                        type: 'bar',
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
                            // barBorderRadius: [30, 30, 0, 0],
                        },
                        barWidth: 40,
                        label: {
                            show: true,
                            position: "top",
                            color: "#fff",
                            fontSize: 14,
                        },
                        data: data
                    },
                };
                this.optCharts = opt;
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "admLicMidBot.stylus"
</style>
