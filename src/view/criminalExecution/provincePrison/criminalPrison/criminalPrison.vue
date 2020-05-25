<template>
    <div class="criminalPrison">
        <div class="left">
            <leftTop :prisoninfo="prisoninfo"></leftTop>
            <leftBottom :fiveyearschange="fiveyearschange" style="margin-top: 20px"></leftBottom>
        </div>
        <div class="mid">
            <midTop :mapData="mapData"></midTop>
            <midBottom :prisonPersonnelFB="prisonPersonnelFB" style="margin-top: 20px"></midBottom>
        </div>
        <right class="rightName" :prisonanalyse="prisonanalyse" :criminalAnalysis="criminalAnalysis"></right>
    </div>
</template>

<script>
    import leftTop from "./components/leftTop"
    import leftBottom from "./components/leftBottom"
    import midTop from "./components/midTop"
    import midBottom from "./components/midBottom"
    import right from "./components/right"
    import {criminalPrison} from "@/api/criminalExecutionApi"

    export default {
        name: "criminalPrison",
        components: {
            leftTop,
            leftBottom,
            midTop,
            midBottom,
            right
        },
        data() {
            return {
                //监狱基本概况
                prisoninfo: [],
                //近5年罪犯数量变化
                fiveyearschange: {},
                //上方地图信息
                mapData: [],
                //各监狱人员分布
                prisonPersonnelFB: {},
                //罪犯分析
                criminalAnalysis: {},
                //监狱分析
                prisonanalyse: {}
            }
        },
        methods: {
            init() {
                this.getCriminalPrisonData()
            },
            getCriminalPrisonData() {
                criminalPrison({provincecode: 3700}).then(res => {
                    console.log(res)
                    if (res.code === 200) {
                        let data = res.data;
                        this.prisoninfo = data.prisoninfo;
                        this.fiveyearschange = data.fiveyearschange;
                        this.mapData=data.mapData;
                        this.prisonPersonnelFB=data.prisonPersonnelFB;
                        this.criminalAnalysis = data.criminalAnalysis;
                        this.prisonanalyse = data.prisonanalyse;
                    }
                }).catch(err => {

                })
            }
        },
        mounted() {
            this.init()
        }
    }
</script>

<style lang="stylus" scoped>
    @import "criminalPrison.stylus"
</style>
