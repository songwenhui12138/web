<template>
    <div class="norDocumentsPageRight">
        <titleName>管理范畴分布</titleName>
        <charts :option="opt" class="right"></charts>
    </div>
</template>

<script>
    import titleName from "@/components/titleName"
    import charts from "@/components/charts"

    export default {
        name: "norDocumentsPageRight",
        components: {
            titleName,
            charts
        },
        data() {
            return {
                opt: {}
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            init() {
                this.drawTop();
            },
            drawTop(){
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
                            data: ['公安','劳动和社会保障','土地','环保','城乡规划','房屋征补（拆迁）','工商','安监','物件','质检','食品药品','卫生计生','教育','新闻出版广电','发展改革','国家安全','司法行政','民政','地矿','农业','水利','林业','商务','能源','交通运输','信息产业','邮政','烟草专卖','税务','财政','统计','审计','文化','专利','商标','版权','旅游','科技','海洋渔业','国防科工','广播新闻出版','其他']
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
                            data:[18,9,3,10,11,10,18,10,18,18,9,3,10,11,10,18,10,18,18,9,3,10,11,10,18,9,3,10,11,10,18,10,18,18,9,3,10,11,10,18,10,18],
                        }
                    },
                }
                this.opt = opt;
            },
        }
    }
</script>

<style lang="stylus" scoped>
    @import "norDocumentsPageRight.stylus"
</style>
