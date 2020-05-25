<template>
    <div class="leftTop">
        <titleName>监狱基本概况 (昨天统计数据)</titleName>
        <div class="content">
            <div class="list" v-if="filPrisoninfo['top'].length">
                <div class="tit">
                    <span class="cir"></span><span class="name">{{filPrisoninfo["top"][0].name}}</span>
                </div>
                <div class="con">
                    <span class="num"><countTo :end="parseInt(filPrisoninfo['top'][0].value)||0"></countTo></span><span
                        class="dw">人</span>
                </div>
            </div>
            <div class="list" style="padding-left: 38px;">
                <div class="change">
                    <span class="name">环比变化</span>
                    <img :src="filImg(thanData.h)" width="6" height="13"/>
                    <span :class="[/\-/.test(thanData.h)?'cut':'add']"><countTo
                            :end="parseFloat((thanData.h+'').replace(/\-/g,''))||0"
                            :decimals="2"></countTo>%</span>
                </div>
                <div class="change">
                    <span class="name">同比变化</span>
                    <img :src="filImg(thanData.t)" width="6" height="13"/>
                    <span :class="[/\-/.test(thanData.t)?'cut':'add']"><countTo
                            :end="parseFloat((thanData.t+'').replace(/\-/g,''))||0"
                            :decimals="2"></countTo>%</span>
                </div>
            </div>
            <div class="list" v-if="filPrisoninfo['top'].length">
                <div class="tit">
                    <span class="cir"></span><span class="name">{{filPrisoninfo["top"][1].name}}</span>
                </div>
                <div class="con">
                    <span class="num"><countTo :end="parseInt(filPrisoninfo['top'][1].value)||0"></countTo></span><span
                        class="dw">所</span>
                </div>
            </div>
            <div class="list"></div>
            <ul class="content-list">
                <li class="list"
                    :class="[{pdLeft:index%2!==0},{remB:(index===filPrisoninfo.bot.length-1||index===filPrisoninfo.bot.length-2)}]"
                    v-for="(item,index) in filPrisoninfo.bot">
                    <div class="tit">
                        <span class="cir"></span><span class="name">{{item.name}}</span>
                    </div>
                    <div class="con">
                        <span class="num"><countTo :end="parseInt(item.value)||0"></countTo></span><span
                            class="dw">人</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import countTo from "@/components/count-to"
    import titleName from "@/components/titleName"

    export default {
        name: "leftTop",
        components: {
            countTo,
            titleName
        },
        props: {
            //值
            prisoninfo: {
                type: Array
            },
            //环比
            thanData: {
                type: Object,
                default() {
                    return {
                        h: -2.36,
                        t: 4.25
                    }
                }
            }
        },
        computed: {
            filPrisoninfo() {
                let top = [], bot = [];
                this.prisoninfo.map((item, i) => {
                    if (i < 2) {
                        top.push(item)
                    } else {
                        bot.push(item)
                    }
                });
                return {
                    top, bot
                }
            }
        },
        methods: {
            filImg(num) {
                return /\-/.test(num) ? require("@/assets/criminalExecution/green.png") : require("@/assets/criminalExecution/red.png")
            }
        },
    }
</script>

<style lang="stylus" scoped>
    @import "leftTop.stylus"
</style>
