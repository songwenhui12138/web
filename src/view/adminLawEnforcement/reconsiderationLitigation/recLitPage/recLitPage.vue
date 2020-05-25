<template>
    <div class="recLitPage">
        <recLitLeft></recLitLeft>
        <div class="mid">
            <recLitMidTop></recLitMidTop>
            <recLitMidBot></recLitMidBot>
        </div>
        <recLitRight></recLitRight>
    </div>
</template>

<script>
    import recLitLeft from "./components/recLitLeft"
    import recLitMidTop from "./components/recLitMidTop"
    import recLitMidBot from "./components/recLitMidBot"
    import recLitRight from "./components/recLitRight"

    export default {
        name: "recLitPage",
        components: {
            recLitLeft,
            recLitMidTop,
            recLitMidBot,
            recLitRight
        }
    }
</script>

<style lang="stylus" scoped>
    @import "recLitPage.stylus"
</style>
