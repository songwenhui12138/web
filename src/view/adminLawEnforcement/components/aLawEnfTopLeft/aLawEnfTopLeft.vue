<template>
    <div class="aLawEnfTopLeft">
        <chart class="chart" ref="chartDom" :option="option"></chart>
    </div>
</template>

<script>
    import chart from "@/components/charts"
    export default {
        name: "aLawEnfTopLeft",
        components: {
            chart,
        },
        data() {
            return {
                option: {
                },
            }
        },
        props: {
            lawenfoList:Object,
        },
        mounted() {
            this.init();
        },
        methods: {
            init() {
                this.drawBot();
            },
            drawBot(){
                let lawenfoInstitutionalType = this.lawenfoList.lawenfoInstitutionalType;
                let scaleData = this.lawenfoList.lawenfoGradeDis;
                console.log(lawenfoInstitutionalType)
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
                    tooltip: {
                        show: false
                    },
                    type: 'pie',
                    clockWise: false,
                    radius: [45, 100],
                    center: ['50%', '78%'],
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
                    tooltip: {
                        show: false
                    },
                    type: 'pie',
                    clockWise: false,
                    radius: [45, 100],
                    center: ['50%', '78%'],
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
                },{
                    type: 'pie',
                    color: ["#02ffd0", "#00ff56", "#177cfe"],
                    radius: [15, 90],
                    center: ['50%', '25%'],
                    roseType: 'area',
                    data: lawenfoInstitutionalType || [],
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
                }];
                let opt = {
                    tooltip: {
                        trigger: 'item',
                        formatter: '{b}: {c}人, 占比{d}%'
                    },
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
                        top: '72%',
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
                this.option = opt;
            },
        },
        watch: {
            lawenfoList: {
                handler(newName, oldName) {
                    this.init();
                },
                immediate: true,
                deep: true
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "aLawEnfTopLeft.stylus"
</style>
