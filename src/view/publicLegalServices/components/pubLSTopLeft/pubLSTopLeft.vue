<template>
    <div class="pubLSTopLeft">
        <chart class="chart" ref="chartDom" :option="option"></chart>
    </div>
</template>

<script>
    import chart from "@/components/charts"

    export default {
        name: "pubLSTopLeft",
        components: {
            chart,
        },
        data() {
            return {
                option: {

                },
            }
        },
        mounted() {
            this.init();
        },
        methods: {
            init() {
                this.drawLeft();
            },
            drawLeft() {
                let data = [
                    {value: 173, name: '女性'},
                    {value: 1023, name: '男性'},
                ];
                let sum = data.reduce((accumulator, currentValue) => {
                    return accumulator + currentValue.value
                }, 0);
                let percent = {};
                data.map((item, idx) => {
                    return percent[item.name] = `${(item.value / sum * 100).toFixed(0)}%`
                });
                let arr = {};
                data.map((item, idx) => {
                    return arr[item.name] = item.value
                });
                // 第二个图表数据
                let baseData = [
                    {value: 275, name: '案件类型1'},
                    {value: 230, name: '案件类型2'},
                    {value: 122, name: '案件类型3'},
                    {value: 123, name: '案件类型4'},
                    {value: 234, name: '其他'},
                ];
                let color = ["#00ffd0", "#00ff55", "#177dff", "#00b6ff", "#41d700", "#d7d700", "#ff7d35", "#ff4141"];
                let data2 = baseData.map((item,idx) => {
                    return Object.assign(item, {
                        itemStyle:{
                            color: color[idx]
                        }
                    })
                })
                const opt = {
                    tooltip: {
                        trigger: 'item',
                        formatter: '{b}: {c}人, 占比{d}%'
                    },
                    title: [
                        {
                            text: '人民监督员',
                            subtext: '1196',
                            x: 80,
                            y: 105,
                            itemGap: 15,
                            textStyle: {
                                fontSize: 16,
                                fontWeight: 'normal',
                                color: ['#fff'],
                            },
                            subtextStyle: {
                                color: '#fff',
                                fontFamily: 'Impact',
                                fontSize: 32,
                                padding: 40,
                            },
                        },
                        {
                            text: '监督案件',
                            subtext: '328',
                            x: '66%',
                            y: 105,
                            itemGap: 15,
                            textStyle: {
                                fontSize: 16,
                                fontWeight: 'normal',
                                color: ['#fff']
                            },
                            subtextStyle: {
                                color: '#fff',
                                fontFamily: 'Impact',
                                fontSize: 32
                            },
                        },
                    ],
                    legend: {
                        orient: 'horizontal',
                        x: 10,
                        top: 10,
                        itemGap: 10,
                        data: ['女性', '男性'],
                        formatter: function (data) {
                            return `${data}：${arr[data]}人 \n占比：${percent[data]}`
                        },
                        textStyle: {
                            fontSize: 14,
                            color: "#fff",
                        },
                    },
                    color: ["#00ffd0", "#00ff55", "#177dff", "#00b6ff", "#41d700", "#d7d700", "#ff7d35", "#ff4141"],
                    series: [
                        {
                            type: 'pie',
                        
                            radius: [67, 90],
                            // center:[186, '50%'],
                            center: ['20%', '50%'],
                            name: '访问来源',
                            label: {
                                // formatter: "{b}\n{d}%",
                                // color: "#fff",
                                // fontSize: 14,
                                show: false,
                            },
                            labelLine: {
                                length: 5,
                            },
                            hoverOffset: 5,
                            selectedOffset: 5,
                            data: data,
                        },
                        {
                            type: 'pie',
                            radius: [67, 90],
                            center: ['71%', '50%'],
                    
                            name: '访问来源',
                            tooltip: {
                                formatter: '{b}: {c}件, 占比{d}%'
                            },
                            label: {
                                formatter: "{b}\n{c}件",
                                color: "#fff",
                                fontSize: 14,
                            },
                            labelLine: {
                                length: 5,
                                length2: 5,
                                lineStyle: {
                                    color: "#fff"
                                }
                            },
                            itemStyle: {
                                borderColor: '#05223a',
                                borderWidth: 2,
                            },
                            hoverOffset: 5,
                            selectedOffset: 5,
                            data: data2,
                        }
                    ]
                };
                this.option = opt;
            }
        },
    }
</script>

<style lang="stylus" scoped>
    @import "pubLSTopLeft.stylus"
</style>
