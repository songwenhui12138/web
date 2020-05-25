<template>
    <div class="leftTop">
        <div class="topArea">
            <div class="prisonName" :title='prisonName'>                                                             
                {{prisonName}}
            </div>
            <div class="cardArea">
                <div class="cardItem" v-for="item in cardListData[0]">
                    <div class="cIname">
                        {{item.name}}
                    </div>
                    <div class="cIvalue">
                        {{item.name==='戒备等级'?item.value:""}}
                        <countTo v-if="item.name!=='戒备等级'" :end="parseInt(item.value)||0"></countTo>
                    </div>
                </div>
            </div>
        </div>
        <div class="botArea">
            <div class="iconItem" v-for="(item, index) in cardListData[1]">
                <i :class="['iconfont',iconData[index]]"></i>
                <span>{{item.name}}</span>
                <b :class="'color_'+index">
                    <countTo :end="parseInt(item.value)||0"></countTo>
                </b>
            </div>
        </div>
    </div>
</template>

<script>
    import countTo from "@/components/count-to"
    import {group} from "@/lib/tools"

    export default {
        name: "leftTop",
        components: {
            countTo
        },
        props: {
            prisonName: {
                type: String
            },
            prisoninfo: {
                type: Array
            }
        },
        data() {
            return {
                iconData: ["iconzhongdaxingshifan", "iconlaonianfan", "iconshedufan", "iconsheheifan"]
            }
        },
        computed: {
            cardListData() {
                return group(this.prisoninfo, 4)
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "leftTop.stylus"
</style>
