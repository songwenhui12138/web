<template>
    <div class="pubLSBotLeft">
        <chart class="chart_1" ref="chartDomT" :option="option.tConOption"></chart>
        <chart class="chart_1" ref="chartDomB" :option="option.bConOption"></chart>
    </div>
</template>

<script>
    // import bigman from "@/assets/publicLegalServices/bigman.png"
    import chart from "@/components/charts"
    export default {
        name: "pubLSBotLeft",
        components: {
            chart,
        },
        data() {
            return {
                option: {
                    tConOption: {},
                    bConOption: {},
                },
            }
        },
        mounted() {
            this.init();
        },
        methods: {
            init() {
                this.drawT();
                this.drawB();
            },
            drawT() {
                let symbols = [
                    'path://M1193.1,445.2v190.2c0,12.2-4.3,22.5-12.8,31.1c-8.5,8.5-18.9,12.8-31.1,12.8c-12.2,0-22.6-4.3-31.1-12.8c-8.5-8.5-12.8-18.9-12.8-31.1V474.5h-29.3v416.9c0,14-5,26.1-15.1,36.1c-10.1,10.1-22.1,15.1-36.1,15.1c-14,0-26.1-5-36.1-15.1c-10.1-10.1-15.1-22.1-15.1-36.1V679.3h-29.3v212.1c0,14-5,26.1-15.1,36.1c-10.1,10.1-22.1,15.1-36.1,15.1c-14,0-26.1-5-36.1-15.1c-10.1-10.1-15.1-22.1-15.1-36.1V474.5h-29.3v160.9c0,12.2-4.3,22.5-12.8,31.1c-8.5,8.5-18.9,12.8-31.1,12.8c-12.2,0-22.6-4.3-31.1-12.8c-8.5-8.5-12.8-18.9-12.8-31.1V445.2c0-24.4,8.5-45.1,25.6-62.2c17.1-17.1,37.8-25.6,62.2-25.6h292.6c24.4,0,45.1,8.5,62.2,25.6C1184.6,400.1,1193.1,420.8,1193.1,445.2L1193.1,445.2z M1061.5,240.4c0,28.3-10,52.5-29.9,72.5c-20,20-44.1,29.9-72.5,29.9c-28.3,0-52.5-10-72.5-29.9c-20-20-29.9-44.1-29.9-72.5c0-28.3,10-52.5,29.9-72.5c20-20,44.1-29.9,72.5-29.9c28.3,0,52.5,10,72.5,29.9C1051.5,187.9,1061.5,212.1,1061.5,240.4L1061.5,240.4z M1061.5,240.4',
                    'path://M1257.6,607c0.1,11.9-4.6,23.3-13,31.6c-8.4,8.4-19.8,13.1-31.6,13c-15,0.4-29.1-7.1-37.1-19.9L1070.2,473h-21v61.3l114.8,191.8c2.8,4.6,4.2,9.9,4.2,15.3c-0.2,16.4-13.4,29.6-29.8,29.8h-89.1v126.5c-0.2,28.6-23.4,51.8-52,52h-74.5c-28.6-0.2-51.8-23.4-52-52V770.6h-89.5c-16.4-0.2-29.6-13.4-29.8-29.8c0.1-5.2,1.6-10.3,4.4-14.7L870.5,535V473h-20.8L744,631.9c-8,12.7-22.1,20.3-37.1,19.9c-11.9,0.2-23.3-4.6-31.6-13.1c-8.6-8.2-13.4-19.7-13.3-31.6c-0.1-8.8,2.5-17.3,7.3-24.6l119.1-178.7c16.7-29.7,47.7-48.6,81.8-49.8H1049c34.1,1.2,65.1,20.1,81.8,49.8l119.1,178.7C1254.9,589.6,1257.6,598.2,1257.6,607L1257.6,607zM1064.1,235c0.6,27.9-10.5,54.8-30.6,74.3c-19.4,19.6-46.1,30.4-73.7,29.8c-27.6,0.6-54.2-10.2-73.7-29.8c-20.1-19.4-31.1-46.3-30.6-74.3c-0.5-27.7,10.5-54.3,30.4-73.7c19.3-20,46-31.2,73.9-30.8c27.7-0.5,54.3,10.5,73.7,30.4C1053.5,180.3,1064.6,207.1,1064.1,235L1064.1,235z M1064.1,235',
                    'path://M512 292.205897c80.855572 0 146.358821-65.503248 146.358821-146.358821C658.358821 65.503248 592.855572 0 512 0 431.144428 0 365.641179 65.503248 365.641179 146.358821 365.641179 227.214393 431.144428 292.205897 512 292.205897zM512 731.282359c-80.855572 0-146.358821 65.503248-146.358821 146.358821 0 80.855572 65.503248 146.358821 146.358821 146.358821 80.855572 0 146.358821-65.503248 146.358821-146.358821C658.358821 796.273863 592.855572 731.282359 512 731.282359z'
                ];
                let bodyMax = 4365; //指定图形界限的值
                let labelSetting = {
                    normal: {
                        show: true,
                        position: 'bottom',
                        offset: [0, 10],
                        formatter: function(param) {
                            return '法律援助人员'+'\n'+(param.name)+'：'+(param.value)+'\n'+'占比：'+(param.value / bodyMax * 100).toFixed(0) + '%';
                        },
                        textStyle: {
                            fontSize: 14,
                            fontFamily: 'Arial',
                            color: '#fff'
                        }
                    }
                };

                let markLineSetting = { //设置标线
                    symbol: 'none',
                    lineStyle: {
                        normal: {
                            opacity: 0.3
                        }
                    },
                    data: [{
                        type: 'max',
                        label: {
                            normal: {
                                formatter: 'max: {c}'
                            }
                        }
                    }, {
                        type: 'min',
                        label: {
                            normal: {
                                formatter: 'min: {c}'
                            }
                        }
                    }]
                };

                let opt = {
                    tooltip: {
                        show: false, //鼠标放上去显示悬浮数据
                    },
                    grid: {
                        // left: '20%',
                        // right: '20%',
                        top: '20px',
                        bottom: '30%',
                        containLabel: true
                    },
                    xAxis: {
                        data: ['a', 'x', 'b'],
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        },
                        axisLabel: {
                            show: false
                        }
                    },
                    yAxis: {
                        max: bodyMax,
                        splitLine: {
                            show: false
                        },
                        axisTick: {
                            // 刻度线
                            show: false
                        },
                        axisLine: {
                            // 轴线
                            show: false
                        },
                        axisLabel: {
                            // 轴坐标文字
                            show: false
                        }
                    },
                    series: [{
                            type: 'pictorialBar',
                            symbolClip: true,
                            symbolBoundingData: bodyMax,
                            label: labelSetting,
                            data: [{
                                    value: 3651,
                                    symbol: symbols[0],
                                    name:"男",
                                    itemStyle: {
                                        normal: {
                                            color: '#177dff' //单独控制颜色
                                        }
                                    },
                                },
                                {

                                },
                                {
                                    value: 714,
                                    symbol: symbols[1],
                                    name:"女",
                                    itemStyle: {
                                        normal: {
                                            color: '#ff6360' //单独控制颜色
                                        }
                                    },
                                }
                            ],
                            z: 10
                        },
                        {
                            // 设置背景底色，不同的情况用这个
                            name: 'full',
                            type: 'pictorialBar', //异型柱状图 图片、SVG PathData
                            symbolBoundingData: bodyMax,
                            animationDuration: 0,
                            itemStyle: {
                                normal: {
                                    color: '#ccc' //设置全部颜色，统一设置
                                }
                            },
                            z: 10,
                            data: [{
                                    itemStyle: {
                                        normal: {
                                            color: 'rgba(23,125,255,0.40)' //单独控制颜色
                                        }
                                    },
                                    value: 100,
                                    symbol: symbols[0]
                                },
                                {
                                    // 设置中间冒号
                                    itemStyle: {
                                        normal: {
                                            color: '#00ffff' //单独控制颜色
                                        }
                                    },
                                    value: 100,
                                    symbol: symbols[2],
                                    symbolSize: [8, '18%'],
                                    symbolOffset: [0, '-200%']
                                },
                                {
                                    itemStyle: {
                                        normal: {
                                            color: 'rgba(255,99,96,0.40)' //单独控制颜色
                                        }
                                    },
                                    value: 100,
                                    symbol: symbols[1]
                                }
                            ]
                        }
                    ]
                }
                this.option.tConOption = opt;
            },
            drawB() {
                let xAxisData = [2014, 2015, 2016, 2017,2018], registeredCriminals = [204, 1015, 716, 3217,256],
                    releaseTheCriminals = [2014, 2015, 2016, 2017,2018], inTheCriminal = [2014, 2415, 2316, 2017,456];
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
                    dataZoom: {
                        bottom: '10',
                        height: '30',
                        dataBackground: {
                            lineStyle: {
                                color: '#00ffff',
                                opacity: 1,
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
                        // xAxisIndex: [0, 1, 2, 3, 4]
                    },
                    legend: {
                        top: "6px",
                        textStyle: {
                            color: "#fff"
                        },
                        data: [{name: '刑事案件', icon: "rect"}, {name: '民事案件', icon: "rect"}, {name: '行政案件', icon: "rect"}]
                    },
                    grid: {
                        top: "40px",
                        left: '14px',
                        right: '46px',
                        bottom: '50px',
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
                            data: xAxisData
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
                            name: '刑事案件',
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
                            name: '民事案件',
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
                            name: '行政案件',
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
                this.option.bConOption = opt;
            }
        },
    }
</script>

<style lang="stylus" scoped>
    @import "pubLSBotLeft.stylus"
</style>
