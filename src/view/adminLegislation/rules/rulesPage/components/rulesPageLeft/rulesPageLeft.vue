<template>
    <div class="rulesPageLeft">
        <titleName>规章审核状态分布</titleName>
        <charts :option="optTop" class="leftTop"></charts>
        <titleName>规章类别分布</titleName>
        <charts :option="optBot" class="leftBot"></charts>
    </div>
</template>

<script>
    import titleName from "@/components/titleName"
    import charts from "@/components/charts"
    export default {
        name: "rulesPageLeft",
        components: {
            titleName,
            charts
        },
        data() {
            return {
                optTop: {},
                optBot: {},
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            init() {
                this.drawTop();
                this.drawBot();
            },
            drawTop() {
                let data = [
                    {value: 601, name: '未完成'},
                    {value: 121, name: '已完成'},
                ];
                const opt = {
                    tooltip: {
                        formatter: '{b}: {c}, 占比{d}%'
                    },
                    series: {
                        type: 'pie',
                        color: ["#00ffd0", "#00ff55"],
                        radius: [64, 73],
                        center: ['50%', '50%'],
                        label: {
                            position: 'outside',
                            formatter: '{b|{b}：}{c|{c}}\n {b|占比:{d}%}',
                            rich: {
                                b: {
                                    align: "center",
                                    fontSize: 14,
                                    color: "#fff",
                                    lineHeight: 20,
                                    borderColor: '#fff'
                                },
                                c: {
                                    fontWeight: "bold",
                                    align: "center",
                                    fontSize: 18,
                                    lineHeight: 20,
                                }
                            }
                        },
                        labelLine: {
                            length: 5,
                        },
                        hoverOffset: 5,
                        selectedOffset: 5,
                        data: data,
                    }
                };
                this.optTop = opt;
            },
            drawBot(){
                let opt = {
                    baseOption: {
                        tooltip : {
                            trigger: 'axis',
                            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                                type : 'shadow' ,       // 默认为直线，可选为：'line' | 'shadow'
                                shadowStyle:{
                                },
                            }
                        },
                        grid:{
                            left:150,
                            top:20,
                            right:100,
                            bottom:20,
                        },
                        xAxis: {
                            axisLine: {
                                show: false
                            },
                            axisTick: {
                                show: false
                            },
                            position: 'bottom',
                            axisLabel: {
                                fontSize:12,
                                color:"#fff",
                                formatter: function (value) {
                                    return value > 1000 ? Math.ceil(value / 1000) + "k" : value
                                },
                                show: false
                            },
                            splitLine:{
                                lineStyle:{
                                    color:["#00ffff"],
                                    opacity: 0.3,
                                },
                                show: false
                            }
                        },
                        yAxis: {
                            type: 'category',
                            inverse: true,
                            position: 'left',
                            axisLine: {
                                lineStyle: {
                                    color: '#00ffff',
                                }
                            },
                            axisTick: {
                                show: false
                            },
                            axisLabel: {    
                                color:"#fff",
                                fontSize:14,
                            },
                            data: ['政府建设','司法行政','发展改革','工业与信息化','财税金融','治安管理','民生保障','科技教育','文化体育','卫生计生','国土资源','城乡建设','环境保护','农业水利','交通运输','市场监管','商贸管理','安全监管','审计监察','林业绿化','地震气象','民族宗教','军事建设','规章清理','其他']
                        },
                        series: {
                            type: 'bar',
                            barWidth: 8,
                            label:{
                                show:true,
                                position:"right",
                                color:"#fff",
                                fontSize:14,
                            },
                            itemStyle:{
                                color: {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 1,
                                    y2: 1,
                                    colorStops: [{
                                        offset: 0, color: '#00b6ff' // 0% 处的颜色
                                    }, {
                                        offset: 1, color: '#1679f7' // 100% 处的颜色
                                    }],
                                    global: false // 缺省为 false
                                },
                                barBorderRadius:[0, 4, 4, 0],
                            },
                            barGap: 10,
                            data:[18,9,3,10,11,10,18,10,18,18,9,3,10,11,10,18,10,18,18,9,3,10,11,10,18,],
                        }
                    },
                }
                this.optBot = opt;
            },
        }
    }
</script>

<style lang="stylus" scoped>
    @import "rulesPageLeft.stylus"
</style>
