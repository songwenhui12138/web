<template>
    <div class="admArbitLeft">
        <titleName>仲裁员性别构成</titleName>
        <charts :option="optTop" class="leftTop"></charts>
        <titleName>仲裁员文化程度构成</titleName>
        <charts :option="optMid" class="leftMid"></charts>
        <titleName>仲裁员等级分布</titleName>
        <charts :option="optBot" class="leftBot"></charts>
    </div>
</template>

<script>
    import titleName from "@/components/titleName"
    import charts from "@/components/charts"
    import navChart from "@/components/navChart"
    export default {
        name: "admArbitLeft",
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
                let data = [{
                    name: "文盲",
                    value: 2331
                }, {
                    name: "小学",
                    value: 1855
                }, {
                    name: "初中",
                    value: 1870
                }, {
                    name: "高中",
                    value: 1153
                }, {
                    name: "大专",
                    value: 2219
                }, {
                    name: "本科",
                    value: 729
                }, {
                    name: "硕士",
                    value: 327
                }, {
                    name: "博士",
                    value: 227
                }];
                const opt = {
                    tooltip: {
                        formatter: '{b}: {c}人, 占比{d}%'
                    },
                    color: ["#00ffd0", "#00ff55", "#177dff", "#00b6ff", "#41d700", "#d7d700", "#ff7d35", "#ff4141", "#d35ee8", "#6683ff"],
                    series: {
                        type: 'pie',
                        radius: [20, 90],
                        center: ['50%', '50%'],
                        roseType: 'area',
                        data: data || [],
                        labelLine: {
                            smooth: true,
                            length: 2,
                            length2: 3,
                            lineStyle: {
                                color: "#fff",
                            }
                        },
                        label: {
                            color: "#fff",
                            fontSize: 14,
                        },
                    }
                };
                this.optMid = opt;
            },
            drawBot() {
                let data =  [
                    {value: 213, name: '一级'},
                    {value: 345, name: '二级'},
                    {value: 213, name: '三级'},
                    {value: 345, name: '四级'},
                ];
                const opt = {
                    tooltip: {
                        trigger: 'item',
                        formatter: '{b}: {c}件, 占比{d}%'
                    },
                    legend: {
                        orient: "vertical",
                        x: "left",
                        left: 280,
                        top: 100,
                        data: ['一级','二级','三级','四级'],
                        itemWidth: 14,
                        itemHeight: 14,
                        textStyle:{
                            color:'#fff',  
                            fontSize: 14,      
                        },
                        itemGap :16,  
                        formatter: function(data){
                            return `${data}`
                        }              
                    },
                    series: [
                        {
                            type: 'pie',
                            color: ["#00ffd0", "#00ff55", "#177dff", "#00b6ff", "#41d700", "#d7d700", "#ff7d35", "#ff4141"],
                            radius: [50, 90],
                            center:['35%', '50%'],
                            label: {
                                position:'inside',
                                formatter: "{c}",
                                color: "#003e71",
                                fontSize: 14,
                            },
                            itemStyle:{
                                borderColor: '#05223a',
                                borderWidth: 2,
                            },
                            hoverOffset: 5,
                            selectedOffset: 5,
                            data:data,
                        },
                    ]
                };
                this.optBot = opt;
            },
        },
    }
</script>

<style lang="stylus" scoped>
    @import "admArbitLeft.stylus"
</style>
