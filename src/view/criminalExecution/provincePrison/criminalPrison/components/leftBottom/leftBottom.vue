<template>
    <div class="leftBottom">
        <titleName>近5年罪犯数量变化</titleName>
        <div class="content">
            <chart ref="chartDom" :option="option" @upInitDone="initDone"></chart>
        </div>
    </div>
</template>

<script>
    import titleName from "@/components/titleName"
    import chart from "@/components/charts"
    import {on} from "@/lib/tools"

    export default {
        name: "leftBottom",
        props: {
            fiveyearschange: {
                type: Object
            }
        },
        components: {
            titleName,
            chart
        },
        data() {
            return {
                option: {},
                _time: null
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            init() {
                this.drawPie()
            },
            //图形初始化后的回调
            initDone() {
                let dom = this.$refs.chartDom.dom, index = 0, data = this.fiveyearschange["years"];
                if (data) {
                    clearInterval(this._time);
                    this._time = setInterval(chartHover, 2000);
                    on(this.$refs.chartDom.$el, "mouseover", () => {
                        clearInterval(this._time);
                        dom.dispatchAction({
                            type: 'downplay',
                            seriesIndex: 0,
                            dataIndex: index === 0 ? data.length - 1 : index - 1
                        });
                    })
                    on(this.$refs.chartDom.$el, "mouseout", () => {
                        this._time = setInterval(chartHover, 2000);
                    })

                }

                function chartHover() {
                    dom.dispatchAction({
                        type: 'downplay',
                        seriesIndex: 0,
                        dataIndex: index === 0 ? data.length - 1 : index - 1
                    });
                    dom.dispatchAction({
                        type: 'highlight',
                        dataIndex: index,
                        seriesIndex: 0
                    });
                    dom.dispatchAction({
                        type: 'showTip',
                        dataIndex: index,
                        seriesIndex: 0
                    });
                    index < data.length - 1 ? index++ : index = 0
                }
            },
            drawPie() {
                let years = this.fiveyearschange["years"] || [],
                    releaseTheCriminals = this.fiveyearschange["releaseTheCriminals"] || [],
                    registeredCriminals = this.fiveyearschange["registeredCriminals"],
                    inTheCriminal = this.fiveyearschange["inTheCriminal"]
                let opt = {
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross',
                            label: {
                                backgroundColor: '#6a7985'
                            }
                        }
                    },
                    legend: {
                        top: "6px",
                        textStyle: {
                            color: "#fff"
                        },
                        data: [{name: '在押罪犯', icon: "rect"}, {name: '释放罪犯', icon: "rect"}, {name: '入监罪犯', icon: "rect"}]
                    },
                    grid: {
                        top: "40px",
                        left: '14px',
                        right: '46px',
                        bottom: '22px',
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
                                lineStyle: {
                                    color: ["#007a77"]
                                },
                                show: true
                            },
                            axisLabel: {
                                color: "#fff",
                                interval: 0
                            },
                            axisTick: {
                                show: false
                            },
                            boundaryGap: false,
                            data: years
                        }
                    ],
                    yAxis: [
                        {
                            axisLine: {
                                lineStyle: {
                                    color: "#00fefe",
                                    width: 2
                                }
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
                    color: ["#02ffd0", "#00ff56", "#177cfe"],
                    series: [
                        {
                            name: '在押罪犯',
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
                            data: registeredCriminals
                        },
                        {
                            name: '释放罪犯',
                            type: 'line',
                            areaStyle: {
                                color: {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [{
                                        offset: 0, color: 'rgba(0,255,85,1)'
                                    }, {
                                        offset: 1, color: 'rgba(0,255,85,0)'
                                    }]
                                }
                            },
                            data: releaseTheCriminals
                        },
                        {
                            name: '入监罪犯',
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
                            data: inTheCriminal
                        }
                    ]
                };
                this.option = opt;
            }
        },
        destroyed() {
            clearInterval(this._time);
        },
        watch: {
            fiveyearschange() {
                this.drawPie()
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "leftBottom.stylus"
</style>
