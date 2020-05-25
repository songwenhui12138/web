<template>
    <div class="LawEnforSupPage">
        <LawEnSupLeft></LawEnSupLeft>
        <div class="mid">
            <LawEnSupMidTop></LawEnSupMidTop>
            <LawEnSupMidBot></LawEnSupMidBot>
        </div>
        <LawEnSupRight></LawEnSupRight>
    </div>
</template>

<script>
    import LawEnSupLeft from "./components/LawEnSupLeft"
    import LawEnSupMidTop from "./components/LawEnSupMidTop"
    import LawEnSupMidBot from "./components/LawEnSupMidBot"
    import LawEnSupRight from "./components/LawEnSupRight"

    export default {
        name: "LawEnforSupPage",
        components: {
            LawEnSupLeft,
            LawEnSupMidTop,
            LawEnSupMidBot,
            LawEnSupRight
        }
    }
</script>

<style lang="stylus" scoped>
    @import "LawEnforSupPage.stylus"
</style>
