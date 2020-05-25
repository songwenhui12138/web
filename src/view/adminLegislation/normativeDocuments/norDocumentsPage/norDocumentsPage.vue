<template>
    <div class="norDocumentsPage">
        <norDocumentsPageLeft></norDocumentsPageLeft>
        <div class="mid">
            <norDocumentsPageMidTop></norDocumentsPageMidTop>
            <norDocumentsPageMidBot></norDocumentsPageMidBot>
        </div>
        <norDocumentsPageRight></norDocumentsPageRight>
    </div>
</template>

<script>
    import norDocumentsPageLeft from "./components/norDocumentsPageLeft"
    import norDocumentsPageMidTop from "./components/norDocumentsPageMidTop"
    import norDocumentsPageMidBot from "./components/norDocumentsPageMidBot"
    import norDocumentsPageRight from "./components/norDocumentsPageRight"

    export default {
        name: "norDocumentsPage",
        components: {
            norDocumentsPageLeft,
            norDocumentsPageMidTop,
            norDocumentsPageMidBot,
            norDocumentsPageRight
        }
    }
</script>

<style lang="stylus" scoped>
    @import "norDocumentsPage.stylus"
</style>
