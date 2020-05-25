<template>
    <div class="prisonNav" @click="handleOpen">
        <i class="iconfont iconcaidananniu"></i>
        <span>监狱目录</span>
        <el-drawer class="prisonNavDrawer"
                   :show-close="false"
                   :visible.sync="drawer"
                   :direction="'ltr'"
                   :before-close="handleClose">
            <div class="prisonList">
                <el-input class="querIpt" v-model="prisonName" @input="filterPrisonName" placeholder="请输入监狱名">
                    <i slot="suffix" class="iconfont iconsousuo"></i>
                </el-input>
                <div class="content scrollbar">
                    <ul class="conList">
                        <li v-for="i in prisonListData"
                            @click="handleRouter(i.value)">
                            {{i.name}}
                        </li>
                    </ul>
                </div>
            </div>
        </el-drawer>
    </div>
</template>

<script>
    export default {
        name: "prisonNav",
        props: {
            prisonList: {
                type: Array
            }
        },
        data() {
            return {
                drawer: false,
                prisonName: "",
                prisonListData: []
            }
        },
        methods: {
            handleOpen() {
                this.drawer = true
            },
            handleClose(done) {
                done();
            },
            filterPrisonName() {
                if (!this.prisonName) {
                    this.prisonListData = this.prisonList;
                    return false
                }
                this.prisonListData = this.prisonList.filter(i => {
                    return i.name.indexOf(this.prisonName) >= 0
                })
            },
            handleRouter(dwdm) {
                this.$router.push({
                    path: `/provincePrison/criminalPrisonDetails/${dwdm}`
                });
                this.drawer = false;
                this.$parent.getCriminalPrisonDetailsData();
            }
        },
        watch: {
            prisonList() {
                this.prisonListData = this.prisonList
            }
        }
    }
</script>
<style lang="stylus">
    .prisonNavDrawer
        #el-drawer__title
            display none
        .el-drawer__container.el-drawer__open
            background-color rgba(0, 0, 0, 0.6)
        .el-drawer.ltr
            top: 10px !important;
            left: 60px !important;
            height: 800px !important;
            width: 200px !important;
            background-color #052f45
            border-radius 4px
            .el-drawer__body
                overflow hidden
        .prisonList
            width 100%
            height 100%
            padding-bottom 6px
            .querIpt
                padding 0 10px
                margin-top 10px
                & input
                    height 30px
                    line-height: 30px;
                    background-color #052f45
                    border-color #85a4b8
                    color #85a4b8
                    &:focus
                        border-color #fff
                .el-input__suffix
                    right 14px
                    line-height 30px
                & i
                    cursor pointer
                    font-size 12px
            .content
                width 100%
                height calc(100% - 46px)
                overflow auto
                margin-top 6px
                .conList
                    & li
                        padding-left 16px
                        width 100%
                        height 40px;
                        line-height 40px;
                        font-size 16px
                        letter-spacing: 1px;
                        cursor pointer
                        &:hover
                            background-color #0d687a
            .scrollbar::-webkit-scrollbar
                width: 6px;
                background-color: #0c2b39;
                height: 6px;
            .scrollbar::-webkit-scrollbar-track
                -webkit-box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.1);
                background-color: #0c2b39;
                border-radius: 6px;
                height: 6px;
            .scrollbar::-webkit-scrollbar-thumb
                border-radius: 6px;
                height: 6px;
                background-color: #0c2b39;
                background-image: -webkit-gradient(linear, 40% 0, 75% 84%, from(#0d697a), to(#0d697a), color-stop(.6, #0d697a));
</style>
<style lang="stylus" scoped>
    @import "prisonNav.stylus"
</style>
