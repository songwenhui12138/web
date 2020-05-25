<template>
    <div class="rulesPage">
        <rulesPageLeft></rulesPageLeft>
        <div class="mid">
            <rulesPageMidTop></rulesPageMidTop>
            <rulesPageMidBot></rulesPageMidBot>
        </div>
        <rulesPageRight></rulesPageRight>
    </div>
</template>

<script>
    import rulesPageLeft from "./components/rulesPageLeft"
    import rulesPageMidTop from "./components/rulesPageMidTop"
    import rulesPageMidBot from "./components/rulesPageMidBot"
    import rulesPageRight from "./components/rulesPageRight"

    export default {
        name: "rulesPage",
        components: {
            rulesPageLeft,
            rulesPageMidTop,
            rulesPageMidBot,
            rulesPageRight
        }
    }
</script>

<style lang="stylus" scoped>
    @import "rulesPage.stylus"
</style>
