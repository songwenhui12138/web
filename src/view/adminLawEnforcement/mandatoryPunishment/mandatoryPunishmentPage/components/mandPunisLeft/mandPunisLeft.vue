<template>
    <div class="mandPunisLeft">
        <titleName>执法人员性别构成</titleName>
        <charts :option="optTop" class="leftTop"></charts>
        <titleName>执法人员用户类型分布</titleName>
        <charts :option="optMid" class="leftMid"></charts>
        <titleName>执法单位级别分布</titleName>
        <charts :option="optBot" class="leftBot"></charts>
    </div>
</template>

<script>
    import titleName from "@/components/titleName"
    import charts from "@/components/charts"
    import navChart from "@/components/navChart"
    export default {
        name: "mandPunisLeft",
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
        methods: {
            init() {
                this.drawTop();
                this.drawMid();
                this.drawBot();
            },
            drawTop() {
                let opt = {
                    series: [
                        {
                            color: ["#02ffd0", "#00ff56"],
                            type: 'pie',
                            radius: [45, 70],
                            label: {
                                show: true,
                                formatter: ['{b|{b}}', '{c|{c}人}', '{d|占比:{d}%}'].join('\n'),
                                rich: {
                                    b: {
                                        color: '#fff',
                                        fontSize: 16,
                                        width: 40,
                                        lineHeight: 40,
                                        align: "center",
                                        height: 40,
                                        borderWidth: 1,
                                        borderRadius: 50,
                                        borderColor: "#21cbdc"
                                    },
                                    c: {
                                        width: 40,
                                        height: 28,
                                        lineHeight: 28,
                                        align: "center",
                                        fontSize: 16,
                                        fontWeight: 'bold'
                                    },
                                    d: {
                                        width: 40,
                                        align: "center",
                                        color: '#fff',
                                        fontSize: 16
                                    }
                                },
                            },
                            itemStyle: {
                                borderWidth: 2,
                                borderColor: "#2b2026"
                            },
                            data: [
                                {value: 1023, name: '男性'},
                                {value: 173, name: '女性'}
                            ]
                        }
                    ]
                };
                this.optTop = opt;
            },
            //
            drawMid() {
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
                        center: ['50%', '48%'],
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
                this.optMid = opt;
            },
            drawBot() {
                let data =  [
                    {value: 100, name: '省级'},
                    {value: 345, name: '市级'},
                    {value: 213, name: '县级'},
                    {value: 213, name: '街道'},
                ];
                const opt = {
                    tooltip: {
                        formatter: '{b}: {c}人, 占比{d}%'
                    },
                    color: ["#02ffd0", "#00ff56", "#177cfe","#00b6ff"],
                    series: {
                        type: 'pie',
                        radius: [15, 90],
                        center: ['50%', '50%'],
                        roseType: 'area',
                        data: data,
                        label:{
                            formatter:'{b}，{c}',
                            color: '#fff',
                            fontSize: 14,
                            rich:{
                                b:{
                                    // fontSize:18,
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
                this.optBot = opt;
            },
        },
    }
</script>

<style lang="stylus" scoped>
    @import "mandPunisLeft.stylus"
</style>
