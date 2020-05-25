<template>
    <div class="leftBot">
        <div class="leftContent">
            <titleName>罪名分布</titleName>
            <div class="midContent sdcmScrollbar">
                <div class="content" :style="minHeight">
                    <chart class="chart" ref="chartDomLeft" :option="option.leftOption"></chart>
                </div>
            </div>
        </div>
        <div class="rightContnt">
            <div class="topCharts">
                <div class="rightLeft">
                    <titleName>占比分析</titleName>
                    <navChart :navData="nav.proportion" @handleNav="drawRightTopL"></navChart>
                    <chart class="chart" ref="chartDomRightTopL" :option="option.rightTopLOptin"></chart>
                </div>
                <div class="rightR">
                    <titleName>分类统计</titleName>
                    <navChart :navData="nav.statistics" @handleNav="drawRightTopR"></navChart>
                    <chart class="chart" ref="chartDomRightTopR" :option="option.rightTopROptin"></chart>
                </div>
            </div>
            <div class="botCharts">
                <titleName>罪犯净增长趋势图</titleName>
                <chart class="chart" ref="chartDomRightBot" :option="option.rightBotOptin"></chart>
            </div>
        </div>
    </div>
</template>

<script>
    import titleName from "@/components/titleName"
    import chart from "@/components/charts"
    import {
        getLeftOption,
        getRightTopLOption,
        getRightTopROption,
        getRightBotOption
    } from "./chartOption"
    import navChart from "@/components/navChart"

    export default {
        name: "leftBot",
        components: {
            titleName,
            chart,
            navChart
        },
        data() {
            return {
                option: {
                    leftOption: {},
                    rightTopLOptin: {},
                    rightTopROptin: {},
                    rightBotOptin: {}
                },
                nav: {
                    proportion: {
                        ratio_fenguan: "分管类型",
                        ratio_fenya: "分押类型",
                        ratio_lijian: "离监类别",
                        ratio_huijian: "会见类别"
                    },
                    statistics: {
                        classify_duiwai: "对外联络",
                        classify_jiguan: "罪犯籍贯",
                    }
                },
            }
        },
        props: {
            chargedensty: {
                type: Object
            },
            ratio: {
                type: Object
            },
            classify: {
                type: Object
            },
            criminaljzzqs: {
                type: Object
            },
        },
        mounted() {
            this.init();
        },
        computed: {
            minHeight() {
                return `min-height:${10 * 70 + 150}px`
            }
        },
        methods: {
            init() {
                this.drawLeft();
                this.drawRightTopL("ratio_fenguan");
                this.drawRightTopR("classify_duiwai");
                this.drawRightBot();
            },
            drawLeft() {
                this.option.leftOption = getLeftOption(this.chargedensty["yName"] || [], this.chargedensty["value"] || []);
            },
            drawRightTopL(type) {
                this.option.rightTopLOptin = getRightTopLOption(this.ratio[type]);
            },
            drawRightTopR(type) {
                let classify = this.classify[type];
                this.option.rightTopROptin = getRightTopROption(classify ? classify.value : [], classify ? classify.yName : []);
            },
            drawRightBot() {
                let {xName, CriminalCount, JzzCount, Gyrl} = this.criminaljzzqs;
                this.option.rightBotOptin = getRightBotOption(xName || [], CriminalCount || [], JzzCount || [], Gyrl || []);
            }
        },
        watch: {
            chargedensty() {
                this.drawLeft()
            },
            ratio() {
                this.drawRightTopL("ratio_fenguan")
            },
            classify() {
                this.drawRightTopR("classify_duiwai")
            },
            criminaljzzqs() {
                this.drawRightBot()
            },
        },
    }
</script>

<style lang="stylus" scoped>
    @import "leftBot.stylus"
</style>
