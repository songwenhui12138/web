<template>
    <div class="LawEnSupLeft">
        <titleName>在编人员性别构成</titleName>
        <charts :option="optTop" class="leftTop"></charts>
        <titleName>在编人员学历构成</titleName>
        <charts :option="optMid" class="leftMid"></charts>
        <titleName>执法主体类型分布</titleName>
        <charts :option="optBot" class="leftBot"></charts>
    </div>
</template>

<script>
    import titleName from "@/components/titleName"
    import charts from "@/components/charts"
    import navChart from "@/components/navChart"
    export default {
        name: "LawEnSupLeft",
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
        mounted() {
            this.init();
        },
        methods:{
            init() {
                this.drawTop();
                this.drawBot();
                this.drawMid();
            },
            drawTop(){
                let symbols = [
                    'path://M1193.1,445.2v190.2c0,12.2-4.3,22.5-12.8,31.1c-8.5,8.5-18.9,12.8-31.1,12.8c-12.2,0-22.6-4.3-31.1-12.8c-8.5-8.5-12.8-18.9-12.8-31.1V474.5h-29.3v416.9c0,14-5,26.1-15.1,36.1c-10.1,10.1-22.1,15.1-36.1,15.1c-14,0-26.1-5-36.1-15.1c-10.1-10.1-15.1-22.1-15.1-36.1V679.3h-29.3v212.1c0,14-5,26.1-15.1,36.1c-10.1,10.1-22.1,15.1-36.1,15.1c-14,0-26.1-5-36.1-15.1c-10.1-10.1-15.1-22.1-15.1-36.1V474.5h-29.3v160.9c0,12.2-4.3,22.5-12.8,31.1c-8.5,8.5-18.9,12.8-31.1,12.8c-12.2,0-22.6-4.3-31.1-12.8c-8.5-8.5-12.8-18.9-12.8-31.1V445.2c0-24.4,8.5-45.1,25.6-62.2c17.1-17.1,37.8-25.6,62.2-25.6h292.6c24.4,0,45.1,8.5,62.2,25.6C1184.6,400.1,1193.1,420.8,1193.1,445.2L1193.1,445.2z M1061.5,240.4c0,28.3-10,52.5-29.9,72.5c-20,20-44.1,29.9-72.5,29.9c-28.3,0-52.5-10-72.5-29.9c-20-20-29.9-44.1-29.9-72.5c0-28.3,10-52.5,29.9-72.5c20-20,44.1-29.9,72.5-29.9c28.3,0,52.5,10,72.5,29.9C1051.5,187.9,1061.5,212.1,1061.5,240.4L1061.5,240.4z M1061.5,240.4',
                    'path://M1257.6,607c0.1,11.9-4.6,23.3-13,31.6c-8.4,8.4-19.8,13.1-31.6,13c-15,0.4-29.1-7.1-37.1-19.9L1070.2,473h-21v61.3l114.8,191.8c2.8,4.6,4.2,9.9,4.2,15.3c-0.2,16.4-13.4,29.6-29.8,29.8h-89.1v126.5c-0.2,28.6-23.4,51.8-52,52h-74.5c-28.6-0.2-51.8-23.4-52-52V770.6h-89.5c-16.4-0.2-29.6-13.4-29.8-29.8c0.1-5.2,1.6-10.3,4.4-14.7L870.5,535V473h-20.8L744,631.9c-8,12.7-22.1,20.3-37.1,19.9c-11.9,0.2-23.3-4.6-31.6-13.1c-8.6-8.2-13.4-19.7-13.3-31.6c-0.1-8.8,2.5-17.3,7.3-24.6l119.1-178.7c16.7-29.7,47.7-48.6,81.8-49.8H1049c34.1,1.2,65.1,20.1,81.8,49.8l119.1,178.7C1254.9,589.6,1257.6,598.2,1257.6,607L1257.6,607zM1064.1,235c0.6,27.9-10.5,54.8-30.6,74.3c-19.4,19.6-46.1,30.4-73.7,29.8c-27.6,0.6-54.2-10.2-73.7-29.8c-20.1-19.4-31.1-46.3-30.6-74.3c-0.5-27.7,10.5-54.3,30.4-73.7c19.3-20,46-31.2,73.9-30.8c27.7-0.5,54.3,10.5,73.7,30.4C1053.5,180.3,1064.6,207.1,1064.1,235L1064.1,235z M1064.1,235',
                    'path://M512 292.205897c80.855572 0 146.358821-65.503248 146.358821-146.358821C658.358821 65.503248 592.855572 0 512 0 431.144428 0 365.641179 65.503248 365.641179 146.358821 365.641179 227.214393 431.144428 292.205897 512 292.205897zM512 731.282359c-80.855572 0-146.358821 65.503248-146.358821 146.358821 0 80.855572 65.503248 146.358821 146.358821 146.358821 80.855572 0 146.358821-65.503248 146.358821-146.358821C658.358821 796.273863 592.855572 731.282359 512 731.282359z'
                ];
                let data = [365,714];
                let bodyMax = eval(data.join("+")); //指定图形界限的值
                let labelSetting = {
                    normal: {
                        show: true,
                        position: 'bottom',
                        offset: [0, 10],
                        formatter: function(param) {
                            return (param.name)+'：'+'{'+ 'a|'+(param.value)+'}'+'人'+'\n'+'占比：'+(param.value / bodyMax * 100).toFixed(2) + '%';
                        },
                        textStyle: {
                            fontSize: 14,
                            // fontFamily: 'Arial',
                            color: '#fff',
                            lineHeight:22
                        },
                        rich:{
                            a:{
                                fontSize: 14,
                            }
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
                        left: '20%',
                        right: '20%',
                        top: '10px',
                        bottom: '35%',
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
                                    value: data[0],
                                    symbol: symbols[0],
                                    symbolSize:'90%',
                                    name:"男性",
                                    itemStyle: {
                                        normal: {
                                            color: '#177dff' //单独控制颜色
                                        }
                                    },
                                },
                                {

                                },
                                {
                                    value: data[1],
                                    symbol: symbols[1],
                                    symbolSize:'90%',
                                    name:"女性",
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
                                    symbol: symbols[0],
                                    symbolSize:'90%',
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
                                    symbol: symbols[1],
                                    symbolSize:'90%',
                                }
                            ]
                        }
                    ]
                }
                this.optTop = opt;
            },
            drawMid() {
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
                            {value: 335, name: '高中'},
                            {value: 679, name: '初中'},
                            {value: 1548, name: '小学'},
                            {value: 679, name: '本科'},
                            {value: 679, name: '硕士'},
                            {value: 679, name: '博士'},
                            {value: 679, name: '大专'},
                            {value: 679, name: '文盲'},
                        ],
                    }
                };
                this.optMid = opt;
            },
            drawBot() {
                let data =  [
                    {value: 64, name: '一级主体'},
                    {value: 6, name: '二级主体'},
                    {value: 13, name: '受委托单位'},
                ];
                const opt = {
                    tooltip: {
                        formatter: '{b}: {c}所, 占比{d}%'
                    },
                    color: ["#02ffd0", "#00ff56", "#6ca1ff"],
                    series: {
                        type: 'pie',
                        radius: [15, 90],
                        center: ['50%', '50%'],
                        roseType: 'area',
                        data: data,
                        label:{
                            formatter:'{b}\n{b|{c}}所',
                            color: '#fff',
                            fontSize: 14,
                            rich:{
                                b:{
                                    fontSize:18,
                                }
                            }
                        },
                        labelLine: {
                            smooth: true,
                            length: 6,
                            length2: 4,
                            lineStyle:{
                                color:'#fff'
                            }
                        }
                    }
                };
                this.optBot = opt
            },
        }
    }
</script>

<style lang="stylus" scoped>
    @import "LawEnSupLeft.stylus"
</style>
