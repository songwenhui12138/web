<template>
    <div class="criminalPrisonDetails">
        <div class="leftCon">
            <div class="prison">
                <prisonNav :prisonList="prisonList"></prisonNav>
                <leftTop :prisonName="prisonName" :prisoninfo="prisoninfo"></leftTop>
            </div>
            <leftBot :chargedensty="chargedensty" :ratio="ratio" :classify="classify"
                     :criminaljzzqs="criminaljzzqs"></leftBot>
        </div>
        <right class="rightCon" :attentionPersonnel="attentionPersonnel"></right>
    </div>
</template>

<script>
    import leftTop from "./components/leftTop"
    import leftBot from "./components/leftBot"
    import right from "./components/right"
    import prisonNav from "./components/prisonNav"
    import {criminalPrisonDetails, attentionPersonnel} from "@/api/criminalExecutionApi"

    export default {
        name: "criminalPrisonDetails",
        components: {
            right,
            leftBot,
            leftTop,
            prisonNav
        },
        mounted() {
            this.init()
        },
        data() {
            return {
                //监狱名
                prisonName: "",
                //监狱list
                prisonList: [],
                prisoninfo: [],
                //罪名分布
                chargedensty: {},
                //占比分析
                ratio: {},
                //分类统计
                classify: {},
                //罪犯净增长趋势图
                criminaljzzqs: {},
                //关注人员
                attentionPersonnel: []
            }
        },
        methods: {
            init() {
                this.getCriminalPrisonDetailsData()
                this.getAttentionPersonnel()
            },
            getCriminalPrisonDetailsData() {
                let dwdm = this.$route.params.dwdm;
                criminalPrisonDetails({dwdm}).then((res) => {
                    console.log(res)
                    if (res.code === 200) {
                        let data = res.data;
                        this.prisonName = data.dwinfo.value;
                        this.prisonList = data.prisonList
                        this.prisoninfo = data.prisoninfo
                        this.chargedensty = data.chargedensty
                        this.ratio = data.ratio
                        this.classify = data.classify
                        this.criminaljzzqs = data.criminaljzzqs
                    }
                }).catch(err => {

                })
            },
            //获取关注人员
            getAttentionPersonnel() {
                attentionPersonnel({userId: 38}).then((res) => {
                    console.log(res)
                    if (res.code === 200) {
                        this.attentionPersonnel = res.data
                    }
                }).catch(err => {

                })
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "criminalPrisonDetails.stylus"
</style>
