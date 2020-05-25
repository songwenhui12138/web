<template>
    <div class="pubLSTopMid">
        <div class="iconArea">
            <div class="iconItem" v-for="(item, index) in iconListData">
                <i class="iconfont" :class="item.class"></i>
                <span>{{item.name}}：</span>
                <b :class="'color_'+index"><count-to :end="parseInt(item.value)||0"/></b>
            </div>
        </div>
        <div class="chartArea">
            <chart class="chart" ref="chartDomMid" :option="option"></chart>
        </div>
    </div>
</template>

<script>
    import chart from "@/components/charts"
    import countTo from "@/components/count-to"
    export default {
        name: "pubLSTopMid",
        components: {
            chart,
            countTo
        },
        data() {
            return {
                option: {
                },
                iconListData:[
                    {
                        class:"iconlvshi",
                        name:"律师",
                        value:"28688",
                    },
                    {
                        class:"iconshiwusuo",
                        name:"律师事务所",
                        value:"2956",
                    },
                    {
                        class:"iconanjian",
                        name:"处理案件",
                        value:"3542",
                    }
                ]
            }
        },
        mounted() {
            this.init();
        },
        methods: {
            init() {
                this.drawMid();
            },
            drawMid(){
                // 第二个图表的数据
                let data = [1452,596,38,22,1];
                let max = Math.max(...data) * 1.3
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
                        grid:[
                            {
                                left:20,
                                top:10,
                                right:20,
                                bottom:30,
                                containLabel: true,
                                width:'40%'
                            },
                            {
                                left:'50%',
                                top:10,
                                right:20,
                                bottom:30,
                                containLabel: true,
                                width:'40%'
                            },
                        ],
                        xAxis:[ 
                            {
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
                            {
                                axisLine: {
                                    show: false
                                },
                                axisTick: {
                                    show: false
                                },
                                gridIndex: 1,
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
                        ],
                        yAxis: [
                            {
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
                                data: ['专职律师','公职律师','兼职律师','法援律师','公司律师','其他']
                            },
                            {
                                type: 'category',
                                gridIndex: 1,
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
                                data: ['普通合伙所','个人合伙所','特殊合伙所','国资所','合作所']
                            }
                        ],
                        series: [
                            {
                                type: 'bar',
                                xAxisIndex: 0,
                                yAxisIndex: 0,
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
                                data:[25643,1284,690,469,453,4],
                            },
                            {
                                type: 'bar',
                                barWidth: 8,
                                xAxisIndex: 1,
                                yAxisIndex: 1,
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
                                data:data,
                            }
                        ]
                    },
                }
                this.option = opt;
            },
        },
    }
</script>

<style lang="stylus" scoped>
    @import "pubLSTopMid.stylus"
</style>
