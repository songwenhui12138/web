<template>
    <div class="administrativeLicensing">
        <publicHeader :backType="true">{{titName}}</publicHeader>
        <router-view class="content"></router-view>
    </div>
</template>

<script>
    import publicHeader from "@/components/publicHeader"

    export default {
        name: "administrativeLicensing",
        components: {
            publicHeader
        },
        computed: {
            titName() {
                let name = this.$route.name;
                if (name === "administrativeLicPage") {
                    return "行政执法 — 行政许可"
                }
                return ""
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "administrativeLicensing.stylus"
</style>
