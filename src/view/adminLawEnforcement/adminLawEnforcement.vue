<template>
    <div class="adminLawEnforcement">
        <publicHeader>行政执法</publicHeader>
        <div class="content">
            <div class="conTop">
                <i class="iconfont iconjinru edit"
                   @click="handleRouter('/LawEnforcementSupervision/LawEnforSupPage')"></i>
                <titleNameOth>行政执法监督</titleNameOth>
                <div class="pointName">
                    <div class="slice" v-for="item in lawenfoSupInfo">
                        <div class="name">{{item.name}}</div>
                        <div class="num">
                            <count-to :end="parseInt(item.value)||0"/>
                        </div>
                    </div>
                </div>
                <aLawEnfTopLeft :lawenfoList="lawenfoList"></aLawEnfTopLeft>
            </div>
            <div class="conTop">
                <i class="iconfont iconjinru edit"
                   @click="handleRouter('/administrativeArbitration/admtraArbitPage')"></i>
                <titleNameOth>仲裁</titleNameOth>
                <div class="pointName">
                    <div class="slice" v-for="item in arbitrationInfo">
                        <div class="name">{{item.name}}</div>
                        <div class="num">
                            <count-to :end="parseInt(item.value)||0"/>
                        </div>
                    </div>
                </div>
                <aLawEnfTopMid :arbOfficerGrade="arbOfficerGrade"></aLawEnfTopMid>
            </div>
            <div class="conTop">
                <i class="iconfont iconjinru edit"
                   @click="handleRouter('/administrativeLicensing/administrativeLicPage')"></i>
                <titleNameOth>行政许可</titleNameOth>
                <div class="pointName">
                    <div class="slice">
                        <div class="name">行政审批对象</div>
                        <div class="num">
                            <count-to :end="parseInt(14205)||0"/>
                        </div>
                    </div>
                    <div class="slice">
                        <div class="name">行政审批人员</div>
                        <div class="num">
                            <count-to :end="parseInt(443)||0"/>
                        </div>
                    </div>
                </div>
                <aLawEnfTopRight></aLawEnfTopRight>
            </div>
            <div class="conBot">
                <i class="iconfont iconjinru edit"
                   @click="handleRouter('/reconsiderationLitigation/recLitPage')"></i>
                <titleNameOth>各地市案件数量统计</titleNameOth>
                <titleName>行政复议&行政应诉</titleName>
                <div class="botLeft">
                    <div class="slice" v-for="item in lawReconAndRespon">
                        <div class="name">{{item.name}}</div>
                        <div class="num">
                            <count-to :end="parseInt(item.value)||0"/>
                        </div>
                    </div>
                </div>
                <aLawEnfBotLeft class="botRight"></aLawEnfBotLeft>
            </div>
            <div class="conBot">
                <i class="iconfont iconjinru edit"
                   @click="handleRouter('/mandatoryPunishment/mandatoryPunishmentPage')"></i>
                <titleNameOth>案源数量变化趋势</titleNameOth>
                <titleName>行政处罚&行政强制</titleName>
                <div class="botLeft">
                    <div class="slice">
                        <div class="name">执法单位</div>
                        <div class="num">
                            <count-to :end="parseInt(11416)||0"/>
                        </div>
                    </div>
                    <div class="slice">
                        <div class="name">执法人员</div>
                        <div class="num">
                            <count-to :end="parseInt(2658)||0"/>
                        </div>
                    </div>
                    <div class="slice">
                        <div class="name">案源数量</div>
                        <div class="num">
                            <count-to :end="parseInt(7458)||0"/>
                        </div>
                    </div>
                </div>
                <aLawEnfBotRight class="botRight"></aLawEnfBotRight>
            </div>
        </div>
    </div>
</template>

<script>
    import publicHeader from "@/components/publicHeader"
    import aLawEnfTopLeft from "./components/aLawEnfTopLeft"
    import aLawEnfTopMid from "./components/aLawEnfTopMid"
    import aLawEnfTopRight from "./components/aLawEnfTopRight"
    import aLawEnfBotLeft from "./components/aLawEnfBotLeft"
    import aLawEnfBotRight from "./components/aLawEnfBotRight"
    import titleNameOth from "@/components/titleNameOth"
    import titleName from "@/components/titleName"
    import countTo from "@/components/count-to"
    import {adminLawEnforcement} from "@/api/adminLawEnforcementApi"

    export default {
        name: "adminLawEnforcement",
        components: {
            publicHeader,
            aLawEnfTopLeft,
            aLawEnfTopMid,
            aLawEnfTopRight,
            aLawEnfBotLeft,
            aLawEnfBotRight,
            titleNameOth,
            titleName,
            countTo
        },
        data(){
            return {
                lawenfoSupInfo:[],//行政执法监督
                arbitrationInfo:[],//仲裁基本信息
                lawReconAndRespon:[],//行政复议&行政应诉
                lawenfoList:{
                    lawenfoInstitutionalType:[],//执法主体机构类型
                    lawenfoGradeDis:[],//执法人员职级分布
                },
                arbOfficerGrade:[]     
            }
        },
        methods: {
            init() {
                this.getAdminLawEnforcementData()
            },
            handleRouter(path) {
                this.$router.push({
                    path: path
                })
            },
            getAdminLawEnforcementData(){
                adminLawEnforcement().then(res => {
                    if (res.code === 200){
                        let data = res.data.data;
                        this.lawenfoSupInfo = data.lawenfoSupInfo;
                        this.arbitrationInfo = data.arbitrationInfo;
                        this.lawReconAndRespon = data.lawReconAndRespon;
                        this.lawenfoList.lawenfoInstitutionalType = data.lawenfoInstitutionalType;
                        this.lawenfoList.lawenfoGradeDis = data.lawenfoGradeDis;
                        this.arbOfficerGrade = data.arbOfficerGrade
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
    @import "adminLawEnforcement.stylus"
</style>
