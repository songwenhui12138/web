<template>
    <div class="LawEnforcementSupervision">
        <publicHeader :backType="true">{{titName}}</publicHeader>
        <router-view class="content"></router-view>
    </div>
</template>

<script>
    import publicHeader from "@/components/publicHeader"

    export default {
        name: "LawEnforcementSupervision",
        components: {
            publicHeader
        },
        computed: {
            titName() {
                let name = this.$route.name;
                if (name === "LawEnforSupPage") {
                    return "行政执法 — 执法监督"
                }
                return ""
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "LawEnforcementSupervision.stylus"
</style>
