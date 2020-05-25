<template>
    <div class="admtraArbitPage">
        <admArbitLeft></admArbitLeft>
        <div class="mid">
            <admArbitMidTop></admArbitMidTop>
            <admArbitMidBot></admArbitMidBot>
        </div>
        <admArbitRight></admArbitRight>
    </div>
</template>

<script>
    import admArbitLeft from "./components/admArbitLeft"
    import admArbitMidTop from "./components/admArbitMidTop"
    import admArbitMidBot from "./components/admArbitMidBot"
    import admArbitRight from "./components/admArbitRight"

    export default {
        name: "admtraArbitPage",
        components: {
            admArbitLeft,
            admArbitMidTop,
            admArbitMidBot,
            admArbitRight
        }
    }
</script>

<style lang="stylus" scoped>
    @import "admtraArbitPage.stylus"
</style>
