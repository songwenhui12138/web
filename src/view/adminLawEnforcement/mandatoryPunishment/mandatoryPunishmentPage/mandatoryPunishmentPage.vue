<template>
    <div class="mandatoryPunishmentPage">
        <mandPunisLeft></mandPunisLeft>
        <div class="mid">
            <mandPunisMidTop></mandPunisMidTop>
            <mandPunisMidBot></mandPunisMidBot>
        </div>
        <mandPunisRight></mandPunisRight>
    </div>
</template>

<script>
    import mandPunisLeft from "./components/mandPunisLeft"
    import mandPunisMidTop from "./components/mandPunisMidTop"
    import mandPunisMidBot from "./components/mandPunisMidBot"
    import mandPunisRight from "./components/mandPunisRight"

    export default {
        name: "mandatoryPunishmentPage",
        components: {
            mandPunisLeft,
            mandPunisMidTop,
            mandPunisMidBot,
            mandPunisRight
        }
    }
</script>

<style lang="stylus" scoped>
    @import "mandatoryPunishmentPage.stylus"
</style>
