<template>
    <div class="LawEnSupMidBot">
        <titleName>待办业务数量变化趋势</titleName>
        <charts class="mbChart" :option="optCharts"></charts>
    </div>
</template>

<script>
    import titleName from "@/components/titleName"
    import charts from "@/components/charts"

    export default {
        name: "LawEnSupMidBot",
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
                let xAxisData = [2014, 2015, 2016, 2017,2018,2019], registeredCriminals =  [561, 962, 123, 421, 2342, 1111],
                    releaseTheCriminals = [1122, 2341, 1232, 561, 962, 123];
                let opt = {
                    tooltip: {
                        trigger: 'axis',
                        formatter:"{b}年:{c}",
                        axisPointer: {
                            type: 'cross',
                            label: {
                                backgroundColor: '#6a7985'
                            }
                        }
                    },
                    legend: {
                        left:"center",
                        top: 10,
                        textStyle: {
                            color: "#fff",
                            fontSize: 12,
                        },
                        data: [{name: '待办类型1', icon: "rect"}, {name: '待办类型2', icon: "rect"}]
                    },
                    dataZoom: {
                        type:"slider",
                        bottom: '16',
                        height: '30',
                        dataBackground: {
                            lineStyle: {
                                color: '#00ffff',
                                opacity: 1,
                                width:1
                            },
                            areaStyle: {
                                color: '#00ffff',
                                opacity: 0.4,
                            }
                        },
                        fillerColor: 'rgba(0,255,255,.3)',
                        borderColor: '#017683',
                        textStyle: {
                            color: '#fff',
                        },
                        end: 100,
                    },
                    grid: {
                        top: "50px",
                        left: '20px',
                        right: '40px',
                        bottom: '55px',
                        containLabel: true
                    },
                    xAxis: [
                        {
                            axisLine: {
                                lineStyle: {
                                    color: "#00fefe",
                                    width: 2
                                }
                            },
                            splitLine: {
                                show:false
                            },
                            axisLabel: {
                                color: "#fff",
                                interval: 0
                            },
                            axisTick: {
                                show: false
                            },
                            boundaryGap: false,
                            data: xAxisData
                        }
                    ],
                    yAxis: [
                        {
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
                        }
                    ],
                    color: ["#02ffd0", "#177dff"],
                    series: [
                        {
                            name: '待办类型1',
                            type: 'line',
                            areaStyle: {
                                color: {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [{
                                        offset: 0, color: 'rgba(0,255,208,1)'
                                    }, {
                                        offset: 1, color: 'rgba(0,255,208,0)'
                                    }]
                                }
                            },
                            lineStyle:{
                                width:0
                            },
                            data: registeredCriminals
                        },
                        {
                            name: '待办类型2',
                            type: 'line',
                            areaStyle: {
                                color: {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [{
                                        offset: 0, color: 'rgba(23,125,255,1)'
                                    }, {
                                        offset: 1, color: 'rgba(23,125,255,0)'
                                    }]
                                }
                            },
                            lineStyle:{
                                width:0
                            },
                            data: releaseTheCriminals
                        },
                    ]
                };
                this.optCharts = opt;
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "LawEnSupMidBot.stylus"
</style>
