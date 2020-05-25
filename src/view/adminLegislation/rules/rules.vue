<template>
    <div class="rules">
        <publicHeader :backType="true">{{titName}}</publicHeader>
        <router-view class="content"></router-view>
    </div>
</template>

<script>
    import publicHeader from "@/components/publicHeader"

    export default {
        name: "rules",
        components: {
            publicHeader
        },
        computed: {
            titName() {
                let name = this.$route.name;
                if (name === "rulesPage") {
                    return "行政立法 — 规章"
                }
                return ""
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "rules.stylus"
</style>
