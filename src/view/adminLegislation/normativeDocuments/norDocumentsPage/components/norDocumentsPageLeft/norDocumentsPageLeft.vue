<template>
    <div class="norDocumentsPageLeft">
        <titleName>文件类型构成</titleName>
        <charts :option="optTop" class="leftTop"></charts>
        <titleName>报备状态分布</titleName>
        <charts :option="optMid" class="leftMid"></charts>
        <titleName>存在问题分类</titleName>
        <charts :option="optBot" class="leftBot"></charts>
    </div>
</template>

<script>
    import titleName from "@/components/titleName"
    import charts from "@/components/charts"
    export default {
        name: "norDocumentsPageLeft",
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
        methods: {
            init() {
                this.drawTop();
                this.drawMid();
                this.drawBot();
            },
            drawTop() {
                let data = [
                    {value: 1023, name: '规章'},
                    {value: 173, name: '规范性文件'}
                ]
                let opt = {
                    series: [
                        {
                            color: ["#02ffd0", "#00ff56"],
                            type: 'pie',
                            radius: [45, 70],
                            label: {
                                show: true,
                                formatter: function(data){
                                    return `{b|${Math.round(data.percent)}%}\n{c|${data.value}}\n{d|${data.name}}`
                                },
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
                            data: data
                        }
                    ]
                };
                this.optTop = opt;
            },
            //
            drawMid() {
                let data =  [
                    {value: 100, name: '未提交'},
                    {value: 345, name: '审核中'},
                    {value: 213, name: '已审'},
                    {value: 233, name: '已废止'},
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
                this.optMid = opt;
            },
            drawBot() {
                const opt = {
                    tooltip: {
                        formatter: '{b}: {c}, 占比{d}%'
                    },
                    legend: {
                        orient: "vertical",
                        x: "left",
                        left: 145,
                        top: 75,
                        data: ['合格','违法设置行政许可、行政处罚、行政收费等','与上位法有冲突','上位法依据不明确','减损公民权利、增设公民义务','与政府其他规范性文件不协调、不衔接'],
                        itemWidth: 10,
                        itemHeight: 10,
                        textStyle:{
                            color:'#fff',  
                            fontSize: 14,      
                        },
                        icon:'image://data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAGElEQVQYlWNk+H/hPwMRgIkYRaMKqacQAIdcAuIjD2ohAAAAAElFTkSuQmCC',
                        itemGap :16,  
                        formatter: function(data){
                            return `${data}`
                        }              
                    },
                    series: {
                        type: 'pie',
                        color: ["#00ffd0", "#00ff55", "#177dff", "#00b6ff", "#41d700", "#d7d700", "#ff7d35", "#ff4141"],
                        radius: [50, 70],
                        center:[75,'50%'],
                        name: '访问来源',
                        label: {
                            show:false,
                            formatter: "{b}\n{c}，{d}%",
                            color: "#fff",
                            fontSize: 14,
                        },
                        labelLine: {
                            // length: 5,
                            // length2:3,
                            show:false,
                            lineStyle: {
                                color: "#fff",
                            }
                        },
                        itemStyle:{
                            borderColor: '#05223a',
                            borderWidth: 2,
                        },
                        hoverOffset: 5,
                        selectedOffset: 5,
                        data: [
                            {value: 335, name: '合格'},
                            {value: 679, name: '违法设置行政许可、行政处罚、行政收费等'},
                            {value: 1548, name: '与上位法有冲突'},
                            {value: 679, name: '上位法依据不明确'},
                            {value: 679, name: '减损公民权利、增设公民义务'},
                            {value: 679, name: '与政府其他规范性文件不协调、不衔接'},
                        ],
                    }  
                };
                this.optBot = opt;
            },
        },
    }
</script>

<style lang="stylus" scoped>
    @import "norDocumentsPageLeft.stylus"
</style>
