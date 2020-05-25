<template>
    <div class="administrativeLicPage">
        <admLicLeft></admLicLeft>
        <div class="mid">
            <admLicMidTop></admLicMidTop>
            <admLicMidBot></admLicMidBot>
        </div>
        <admLicRight></admLicRight>
    </div>
</template>

<script>
    import admLicLeft from "./components/admLicLeft"
    import admLicMidTop from "./components/admLicMidTop"
    import admLicMidBot from "./components/admLicMidBot"
    import admLicRight from "./components/admLicRight"

    export default {
        name: "administrativeLicPage",
        components: {
            admLicLeft,
            admLicMidTop,
            admLicMidBot,
            admLicRight
        }
    }
</script>

<style lang="stylus" scoped>
    @import "administrativeLicPage.stylus"
</style>
