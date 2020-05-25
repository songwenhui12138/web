<template>
    <div class="normativeDocuments">
        <publicHeader :backType="true">{{titName}}</publicHeader>
        <router-view class="content"></router-view>
    </div>
</template>

<script>
    import publicHeader from "@/components/publicHeader"

    export default {
        name: "normativeDocuments",
        components: {
            publicHeader
        },
        computed: {
            titName() {
                let name = this.$route.name;
                if (name === "norDocumentsPage") {
                    return "行政立法 — 规章规范性文件"
                }
                return ""
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "normativeDocuments.stylus"
</style>
