<template>
    <div class="rulesPageRight">
        <titleName>规章立法性质分布</titleName>
        <charts :option="optTop" class="rightTop"></charts>
        <titleName>规章行政行为分布</titleName>
        <charts :option="optBot" class="rightBot"></charts>
    </div>
</template>

<script>
    import titleName from "@/components/titleName"
    import charts from "@/components/charts"

    export default {
        name: "rulesPageRight",
        components: {
            titleName,
            charts
        },
        data() {
            return {
                optTop: {},
                optBot: {}
            }
        },
        mounted() {
            this.init();
        },
        methods: {
            init() {
                this.drawTop();
                this.drawBot();
            },
            drawTop() {
                let data =  [
                    {value: 100, name: '解释'},
                    {value: 345, name: '立新废旧'},
                    {value: 213, name: '实施'},
                    {value: 213, name: '创制'},
                    {value: 213, name: '修改'},
                    {value: 213, name: '废止'},
                ];
                const opt = {
                    tooltip: {
                        formatter: '{b}: {c}人, 占比{d}%'
                    },
                    color: ["#00ffd0", "#00ff55", "#177dff", "#00b6ff", "#41d700", "#d7d700", "#ff7d35", "#ff4141"],
                    series: {
                        type: 'pie',
                        radius: [20, 100],
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
                            data: ['行政监督检查','行政赔偿','行政裁决','行政确认','行政给付','行政奖励','行政指导','行政征收','行政强制','行政处罚','行政许可','行政决定','行政立法']
                        },
                        series: {
                            type: 'bar',
                            barWidth: 16,
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
                                barBorderRadius:[0, 8, 8, 0],
                            },
                            barGap: 10,
                            data:[18,9,3,10,11,10,18,10,18,18,9,3,10],
                        }
                    },
                }
                this.optBot = opt;
            },
        },
    }
</script>

<style lang="stylus" scoped>
    @import "rulesPageRight.stylus"
</style>
