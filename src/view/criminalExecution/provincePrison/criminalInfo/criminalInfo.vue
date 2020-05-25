<template>
    <div class="criminalInfo">
        <div class="leftCon">
            <criInfoLeftTop :followType="followType"
                            @handleFollow="handleFollow" :zflable="zflable"
                            :showcriminalssummaryinfoByZfbhData="showcriminalssummaryinfoByZfbhData"></criInfoLeftTop>
            <criInfoLeftBot :khfchangetrend="khfchangetrend" :lifeCriminals="lifeCriminals"></criInfoLeftBot>
        </div>
        <criInfoRight class="rightCon"></criInfoRight>
    </div>
</template>

<script>
    import criInfoLeftBot from "./components/criInfoLeftBot"
    import criInfoLeftTop from "./components/criInfoLeftTop"
    import criInfoRight from "./components/criInfoRight"
    import {criminalInfo} from "@/api/criminalExecutionApi"

    export default {
        name: "criminalInfo",
        components: {
            criInfoLeftBot,
            criInfoLeftTop,
            criInfoRight
        },
        data() {
            return {
                followType: true,
                //考核分变化趋势
                khfchangetrend: {},
                //罪犯生平
                lifeCriminals: [],
                //概要信息
                showcriminalssummaryinfoByZfbhData: {},
                //罪犯标签
                zflable: [],
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            init() {
                this.getCriminalInfo()
            },
            getCriminalInfo() {
                let zfbh = this.$route.params.zfbh;
                criminalInfo({zfbh}).then(res => {
                    console.log(res)
                    if (res.code === 200) {
                        let data = res.data;
                        this.khfchangetrend = data.khfchangetrend
                        this.zflable = data.zflable
                        this.showcriminalssummaryinfoByZfbhData = data.showcriminalssummaryinfoByZfbhData
                        this.lifeCriminals = data.lifeCriminals
                    }
                }).catch(err => {

                })
            },
            handleFollow() {
                this.followType = !this.followType
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "criminalInfo.stylus"
</style>
