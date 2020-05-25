<template>
    <div class="reconsiderationLitigation">
        <publicHeader :backType="true">{{titName}}</publicHeader>
        <router-view class="content"></router-view>
    </div>
</template>

<script>
    import publicHeader from "@/components/publicHeader"

    export default {
        name: "reconsiderationLitigation",
        components: {
            publicHeader
        },
        computed: {
            titName() {
                let name = this.$route.name;
                if (name === "recLitPage") {
                    return "行政执法 — 复议&应诉"
                }
                return ""
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "reconsiderationLitigation.stylus"
</style>
