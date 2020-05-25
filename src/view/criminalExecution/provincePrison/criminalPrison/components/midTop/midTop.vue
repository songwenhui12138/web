<template>
    <div class="midTop">
        <div class="boxTitle">
            <p class="t">{{boxTitle}}</p>
            <p class="m">{{`截止日期:${afterDate}`}}</p>
        </div>
        <chart ref="chartDom" :option="option"></chart>
    </div>
</template>

<script>
    import chart from "@/components/charts"
    import {afterDate} from "@/lib/tools"

    export default {
        name: "midTop",
        components: {
            chart
        },
        data() {
            return {
                option: {},
                //监狱名
                boxTitle: "山东省"
            }
        },
        mounted() {
            this.init()
        },
        props: {
            mapData: {
                type: Array
            }
        },
        methods: {
            init() {
                this.drawProvince()
            },
            //各省画表
            drawProvince() {
                let data = this.mapData || [];
                const opt = {
                    tooltip: {
                        formatter({data}) {
                            if (data) {
                                return `${data.name}<br />在押人数 : ${data.registeredCC}人<br />未成年犯 : ${data.juvenileDC}人`
                            }
                        }
                    },
                    geo: { // 地图配置
                        map: '山东',
                        zoom: 1,
                        silent: true,
                        itemStyle: {
                            normal: {
                                borderWidth: 4,//区域边框宽度
                                borderColor: '#10fffd',//区域边框颜色
                                shadowColor: '#046d80',
                                shadowBlur: 14,
                                shadowOffsetX: 10,
                                shadowOffsetY: 5
                            }
                        }
                    },
                    series: [{
                        type: 'scatter',
                        coordinateSystem: 'geo',
                        data: data,
                        zlevel: 1,
                        symbol: "image://" + require("@/assets/criminalExecution/jy.png"),
                        symbolSize: [26, 30]
                    }, { // 地图配置
                        type: "map",
                        map: '山东',
                        zoom: 1,
                        label: {
                            show: false
                        },
                        itemStyle: {
                            normal: {
                                borderWidth: 1,//区域边框宽度
                                borderColor: '#465f75',//区域边框颜色
                                areaColor: "#04223a"//区域颜色
                            }
                        },
                        silent: true
                    }]
                };
                this.option = opt;
                this.$nextTick(() => {
                    this.$refs.chartDom.dom.on('click', (data) => {
                        this.$router.push({
                            path: `/provincePrison/criminalPrisonDetails/${data.data.dwdm}`
                        })
                    });
                })
            }
        },
        computed: {
            afterDate
        },
        watch: {
            mapData() {
                this.init()
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "midTop.stylus"
</style>
