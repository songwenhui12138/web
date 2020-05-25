<template>
    <div class="LawEnSupRight">
        <titleName>督查人员类型分布</titleName>
        <charts :option="optTop" class="rightTop"></charts>
        <titleName>执法人员职级分布</titleName>
        <charts :option="optMid" class="rightMid"></charts>
        <titleName>听证人员类型分布</titleName>
        <charts :option="optBot" class="rightBot"></charts>
    </div>
</template>

<script>
    import titleName from "@/components/titleName"
    import charts from "@/components/charts"

    export default {
        name: "LawEnSupRight",
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
        methods:{
            init() {
                this.drawTop();
                this.drawBot();
                this.drawMid();
            },
            drawTop(){
                let data = {
                    '司法鉴定':321,
                    '申请案件':511,
                    '指定案件':136,
                    '网上申请':235,
                    '公证':319,
                };
                let opt = {
                    angleAxis: {
                        type: 'category',
                        data: Object.keys(data),
                        axisLine: {
                            lineStyle: {
                                color: '#00ffff'
                            }
                        },
                        axisLabel: {
                            interval: 0,
                            fontSize: 14,
                            color: '#fff',
                            fontFamily: 'Microsoft YaHei',
                            formatter:  function (value, index) {
                                return `{a|${value}\n${data[value]}}`
                            },
                            rich: {
                                a: {
                                    align: "center",
                                    fontSize: 14,
                                    color: "#fff",
                                    lineHeight: 20,
                                },
                            }
                        },
                        axisTick: {
                            show: false
                        },
                        z: 10
                    },
                    
                    radiusAxis: {
                        axisTick: {
                            // show: false
                        },
                        axisLabel:{
                            show: false
                        },
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: 'rgba(0,255,255,.6)'
                            }
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: 'rgba(0,255,255,.2)'
                            }
                        },
                        splitArea: {
                            areaStyle: {
                                color: 'transparent'
                            }
                        }
                    },
                    polar: {
                        center: ['50%', '50%'],
                        radius: '60%',
                    },
                    series: {
                        type: 'bar',
                        data: [321, 511, 136, 235, 319],
                        itemStyle: {
                            color: function(params) {
                                var colorList = ['#41d700', '#00ffff', '#177dff', '#00ff55', '#00b6ff'];
                                return colorList[params.dataIndex];
                            }
                        },
                        coordinateSystem: 'polar',
                    },
                };
                this.optTop = opt;
            },
            drawMid() {
                let scaleData = [
                    {
                        'name': '职级类型1',
                        'value': 93
                    },
                    {
                        'name': '职级类型2',
                        'value': 1
                    },
                    {
                        'name': '职级类型3',
                        'value': 8
                    },
                    {
                        'name': '职级类型4',
                        'value': 153
                    }

                ];
                let placeHolderStyle = {
                    normal: {
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        },
                        color: 'rgba(0, 0, 0, 0)',
                        borderColor: 'rgba(0, 0, 0, 0)',
                        borderWidth: 0
                    }
                };
                let data = [];
                let color = ['#00ffd0', '#00ff55', '#4998fe', '#00b6ff'];
                for (let i = 0; i < scaleData.length; i++) {
                    data.push({
                        data: scaleData[i].value,
                        value: 20,
                        name: scaleData[i].name,
                        itemStyle: {
                            normal: {
                                color: color[i],
                            }
                        }
                    }, {
                        value: 8,
                        name: '',
                        itemStyle: placeHolderStyle
                    });
                }
                data.push({
                    value: 40,
                    name: '',
                    itemStyle: placeHolderStyle
                })
                let seriesObj = [{
                    name: '',
                    type: 'pie',
                    clockWise: false,
                    radius: [45, 110],
                    center: ['50%', '57%'],
                    hoverAnimation: false,
                    startAngle: -30,
                    itemStyle: {
                        normal: {
                            label: {
                                show: true,
                                position: 'inner',
                                fontSize: 14,
                                lineHeight: 15,
                                color:'#003e71',
                                formatter: function(params) {
                                    var percent = 0;
                                    var total = 0;
                                    for (var i = 0; i < scaleData.length; i++) {
                                        total += scaleData[i].value;
                                    }
                                    percent = ((params.value / total) * 100).toFixed(0);
                                    if (params.name !== '') {
                                        // return params.name + '\n' + params.data.data;
                                        if (params.name.length > 4) {
                                            return params.name.slice(0, 3) + '\n' + params.name.slice(3);
                                        } else {
                                            return params.name;
                                        }

                                    } else {
                                        return '';
                                    }
                                }
                            },
                            labelLine: {
                                length: 5,
                                length2: 5,
                                show: true
                            }
                        }
                    },
                    data: data
                }, {
                    name: '',
                    type: 'pie',
                    clockWise: false,
                    radius: [45, 110],
                    center: ['50%', '57%'],
                    hoverAnimation: false,
                    startAngle: -30,
                    itemStyle: {
                        normal: {
                            label: {
                                show: true,
                                position: 'outside',
                                fontSize: 18,
                                formatter: function(params) {
                                    var percent = 0;
                                    var total = 0;
                                    for (var i = 0; i < scaleData.length; i++) {
                                        total += scaleData[i].value;
                                    }
                                    percent = ((params.value / total) * 100).toFixed(0);
                                    if (params.name !== '') {
                                        return params.data.data;
                                    } else {
                                        return '';
                                    }
                                }
                            },
                            labelLine: {
                                length: 5,
                                length2: 10,
                                show: true
                            }
                        }
                    },
                    data: data
                }];
                let opt = {
                    legend: {
                        show: false
                    },
                    toolbox: {
                        show: false
                    },
                    series: seriesObj,
                    graphic: [{
                        type: 'group',
                        left: 'center',
                        top: '48%',
                        children: [{
                                type: 'text',
                                z: 100,
                                left: 'center',
                                top: '0',
                                style: {
                                    fill: '#fff',
                                    text: [
                                        '执法人员'
                                    ],
                                    font: '14px Microsoft YaHei'
                                }
                            },
                            {
                                type: 'text',
                                z: 100,
                                left: 'center',
                                top: '32',
                                style: {
                                    fill: '#fff',
                                    text: [
                                        '职级分布'
                                    ],
                                    font: '14px Microsoft YaHei'
                                }
                            }
                        ]
                    }]
                }
                this.optMid = opt;
            },
            drawBot() {
                let opt = {
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    grid: {
                        left: 40,
                        top: 20,
                        bottom: 40,
                        right: 40
                    },
                    xAxis: {
                        axisLabel: {
                            color: "#fff",
                            interval: 0
                        },
                        splitLine: {
                            lineStyle: {
                                color: "#004a55"
                            }
                        },
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        }
                    },
                    yAxis: {
                        data: ["类型1", "类型2", "类型3"],
                        splitLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        },
                        axisLabel: {
                            padding: [0, 0, 30, 4],
                            inside: true,
                            color: "#fff",
                            formatter: function (value) {
                                return value > 1000 ? Math.ceil(value / 1000) + "k" : value
                            }
                        }
                    },
                    series: [{
                        type: 'bar',
                        barWidth: 12,
                        label: {
                            show: true,
                            position: "right",
                            color: "#fff"
                        },
                        itemStyle: {
                            barBorderRadius: [0, 6, 6, 0]
                        },
                        data: [{value: 112, itemStyle: {color: "#177dff"}}, {
                            value: 515,
                            itemStyle: {color: "#00ff55"}
                        }, {value: 569, itemStyle: {color: "#00ffd0"}}]
                    }]
                };
                this.optBot = opt
            },
        }
    }
</script>

<style lang="stylus" scoped>
    @import "LawEnSupRight.stylus"
</style>
