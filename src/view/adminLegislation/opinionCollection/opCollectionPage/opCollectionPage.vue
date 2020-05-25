<template>
    <div class="opCollectionPage">
        <opCollectionLeft></opCollectionLeft>
        <div class="mid">
            <div class="midTop">
                <lightingTit :lightingData="lightingData"></lightingTit>
            </div>
            <opCollectionMid></opCollectionMid>
        </div>
        <opCollectionRight></opCollectionRight>
    </div>
</template>

<script>
    import opCollectionLeft from "./components/opCollectionLeft"
    import opCollectionMid from "./components/opCollectionMid"
    import opCollectionRight from "./components/opCollectionRight"
    import lightingTit from "@/components/lightingTit"

    export default {
        name: "opCollectionPage",
        components: {
            opCollectionLeft,
            opCollectionMid,
            opCollectionRight,
            lightingTit
        },
        data() {
            return {
                lightingData: [{
                    name: "规章草案",
                    icon: "iconguizhangshuliang",
                    num: 412
                }, {
                    name: "立法草案",
                    icon: "iconguifanxingwenjian",
                    num: 3472
                }]
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "opCollectionPage.stylus"
</style>
