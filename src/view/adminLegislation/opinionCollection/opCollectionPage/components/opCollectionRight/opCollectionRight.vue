<template>
    <div class="opCollectionRight">
        <titleName>立法草案征集状态分布</titleName>
        <charts class="rightTopChart" :option="optTop"></charts>
        <titleName>立法草案征集反馈情况</titleName>
        <charts class="rightMidChart" :option="optMid"></charts>
        <titleName>立法草案反馈状态分布</titleName>
        <charts class="rightBotChart" :option="optBot"></charts>
    </div>
</template>

<script>
    import titleName from "@/components/titleName"
    import charts from "@/components/charts"

    export default {
        name: "opCollectionRight",
        components: {
            titleName,
            charts,
        },
        data() {
            return {
                optTop: {},
                optMid: {},
                optBot: {}
            }
        },
        mounted() {
            this.init();
        },
        methods: {
            init() {
                this.drawTop();
                this.drawMid();
                this.drawBot('gzcafk');
            },
            drawTop(){
                let data =  [
                    {value: 64, name: '未发布'},
                    {value: 6, name: '正在征集'},
                    {value: 13, name: '征集结束'},
                ];
                const opt = {
                    tooltip: {
                        formatter: '{b}: {c}人, 占比{d}%'
                    },
                    color: ["#02ffd0", "#00ff56", "#6ca1ff"],
                    series: {
                        type: 'pie',
                        radius: [15, 90],
                        center: ['50%', '50%'],
                        roseType: 'area',
                        data: data,
                        label:{
                            formatter:'{b}\n{b|{c}}条',
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
                this.optTop = opt;
            },
            drawMid(){
                let data =  [
                    {value: 6, name: '未反馈'},
                    {value: 1 , name: '已反馈'},
                ];
                const opt = {
                    tooltip: {
                        formatter: '{b}: {c}, 占比{d}%'
                    },
                    series: {
                        type: 'pie',
                        color: ["#177dff","#00ff55"],
                        radius: [70, 80],
                        center:['50%', '50%'],
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
                        data:data,
                    }
                };
                this.optMid = opt;
            },
            drawBot(type) {
                let data =  [
                    {value: 1093, name: '已发布'},
                    {value: 3530, name: '未发布'},
                ]
                const opt = {
                    tooltip: {
                        formatter: '{b}: {c}, 占比{d}%'
                    },
                    series: {
                        type: 'pie',
                        color: [ "#00ffd0","#00ff55"],
                        radius: [60, 80],
                        center:['50%', '50%'],
                        label: {
                            position: 'outerside',
                            formatter: '{b|{b}}\n{c|{c}}\n {b|占比：{d}%}',
                            rich: {
                                b: {
                                    fontWeight: "normal",
                                    align: "center",
                                    fontSize: 16,
                                    color: "#fff",
                                    lineHeight: 20,
                                },
                                c: {
                                    fontWeight: "normal",
                                    align: "center",
                                    fontSize: 16,
                                    lineHeight: 20,
                                }
                            }
                        },
                        labelLine: {
                            length: 5,
                        },
                        hoverOffset: 5,
                        selectedOffset: 5,
                        data:data,
                    }
                };
                this.optBot = opt;
            }
        },
    }
</script>

<style lang="stylus" scoped>
    @import "opCollectionRight.stylus"
</style>
