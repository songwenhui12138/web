<template>
    <div class="mandatoryPunishment">
        <publicHeader :backType="true">{{titName}}</publicHeader>
        <router-view class="content"></router-view>
    </div>
</template>

<script>
    import publicHeader from "@/components/publicHeader"

    export default {
        name: "mandatoryPunishment",
        components: {
            publicHeader
        },
        computed: {
            titName() {
                let name = this.$route.name;
                if (name === "mandatoryPunishmentPage") {
                    return "行政执法 — 处罚&强制"
                }
                return ""
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "mandatoryPunishment.stylus"
</style>
