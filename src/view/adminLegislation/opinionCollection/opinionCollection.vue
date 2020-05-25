<template>
    <div class="opinionCollection">
        <publicHeader :backType="true">{{titName}}</publicHeader>
        <router-view class="content"></router-view>
    </div>
</template>

<script>
    import publicHeader from "@/components/publicHeader"

    export default {
        name: "opinionCollection",
        components: {
            publicHeader
        },
        computed: {
            titName() {
                let name = this.$route.name;
                if (name === "opCollectionPage") {
                    return "行政立法 — 法规规章意见收集"
                }
                return ""
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "opinionCollection.stylus"
</style>
