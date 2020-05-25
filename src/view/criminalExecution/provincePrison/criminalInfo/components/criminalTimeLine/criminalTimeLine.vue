<template>
    <div class="criminalTimeLine">
        <div class="scrollTop"><i @click="handleScrollTop" class="iconfont iconshengxu"></i></div>
        <div class="content sdcmScrollbar" ref="criminalTimeLineDom">
            <template v-for="(item,index) in $attrs.lifeCriminals">
                <div v-if="index%2===0" class="lineItem">
                    <div class="lineDeeds">
                        <div class="name">{{item.name}}</div>
                        <div class="details">{{item.details}}</div>
                    </div>
                    <div class="lineTime">
                        <div class="timeImg">
                            {{format(item.time)}}
                        </div>
                    </div>
                    <div class="lineIcon">
                        <i :class="['iconfont',iconName[item.icon]]"></i>
                    </div>
                </div>
                <div v-if="index%2!==0" class="lineItem lineItemRight">
                    <div class="lineTime">
                        <div class="timeImg">
                            {{format(item.time)}}
                        </div>
                    </div>
                    <div class="lineDeeds">
                        <div class="name">{{item.name}}</div>
                        <div class="details">{{item.details}}</div>
                    </div>
                    <div class="lineIcon">
                        <i :class="['iconfont',iconName[item.icon]]"></i>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
    import {Format} from "@/lib/tools"

    export default {
        name: "criminalTimeLine",
        data() {
            return {
                iconName: {
                    daibu: "iconzhongdaxingshifan",
                    diaodong: "icondiaodong",
                    fanzui: "iconfanzui",
                    panjue: "iconpanjue",
                    shifang: "iconshifang",
                    xingfabiandong: "iconxfbd",
                }
            }
        },
        inheritAttrs: false,
        methods: {
            handleScrollTop() {
                let dom = this.$refs.criminalTimeLineDom;
                dom.scrollTo ? dom.scrollTo({  //scrollTo部分浏览器不兼容
                    top: 0,
                    behavior: "smooth"
                }) : dom.scrollTop = 0;
            },
            format(date) {
                return date ? Format("yyyy年mm月dd日", new Date(date)) : ""
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "criminalTimeLine.stylus"
</style>
