<template>
    <div class="administrativeArbitration">
        <publicHeader :backType="true">{{titName}}</publicHeader>
        <router-view class="content"></router-view>
    </div>
</template>

<script>
    import publicHeader from "@/components/publicHeader"

    export default {
        name: "administrativeArbitration",
        components: {
            publicHeader
        },
        computed: {
            titName() {
                let name = this.$route.name;
                if (name === "admtraArbitPage") {
                    return "行政执法 — 仲裁"
                }
                return ""
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "administrativeArbitration.stylus"
</style>
