<template>
    <div class="criInfoLeftTop">
        <div class="summaryInfo">
            <titleNameOth>概要信息</titleNameOth>
            <div class="summaryInfoCon">
                <div class="avatar">
                    <img :src="require('@/assets/criminalExecution/pic.png')"/>
                </div>
                <div class="infoList">
                    <div class="iLItem">
                        <span class="name">{{showcriminalssummaryinfoByZfbhData.xm}}<b>（{{showcriminalssummaryinfoByZfbhData.zfbh}}）</b></span>
                        <span class="ilRouter"
                              @click="$router.push({path:'/provincePrison/criminalFiles'})">档案信息 >></span>
                        <span class="follow" @click="handleFollow">
                            <i :class="['iconfont',followType?'iconyiguanzhu':'iconguanzhu']"></i>
                            {{followType?'已关注':'加关注'}}
                        </span>
                    </div>
                    <div class="iLItemBot">
                        <div class="botList1">
                            <p>性别：<span>{{showcriminalssummaryinfoByZfbhData.xb}}</span></p>
                            <p>年龄：<span>{{showcriminalssummaryinfoByZfbhData.nl}}</span></p>
                            <p>民族：<span>{{showcriminalssummaryinfoByZfbhData.mz}}</span></p>
                            <p>学历：<span>{{showcriminalssummaryinfoByZfbhData.xl}}</span></p>
                        </div>
                        <div class="botList2">
                            <p>婚姻：<span>{{showcriminalssummaryinfoByZfbhData.hy}}</span></p>
                            <p>籍贯：<span>{{showcriminalssummaryinfoByZfbhData.jg}}</span></p>
                            <p>服刑监狱：<span>{{showcriminalssummaryinfoByZfbhData.fxjy}}</span></p>
                            <p>终审罪名：<span>{{showcriminalssummaryinfoByZfbhData.zszm}}</span></p>
                        </div>
                        <div class="botList3">
                            <p>刑期：<span>{{showcriminalssummaryinfoByZfbhData.zsxq}}</span></p>
                            <p>入监日期：<span>{{showcriminalssummaryinfoByZfbhData.rjrq}}</span></p>
                            <p>分管等级：<span>{{showcriminalssummaryinfoByZfbhData.fgdj}}</span></p>
                            <p>监管警察：<span>{{showcriminalssummaryinfoByZfbhData.jgjc}}</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="criminalLabel">
            <titleNameOth>罪犯标签</titleNameOth>
            <div class="criminalLabelCon">
                <div class="content" v-for="item in zflable">
                    <div class="tit">
                        {{item.name}}
                    </div>
                    <div class="label sdcmScrollbar">
                        <div class="item" v-for="i in filValue(item.value)">{{i}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import titleNameOth from "@/components/titleNameOth"

    export default {
        name: "criInfoLeftTop",
        components: {
            titleNameOth
        },
        props: {
            showcriminalssummaryinfoByZfbhData: Object,
            followType: Boolean,
            zflable: Array
        },
        methods: {
            filValue(v) {
                v && (v = v.split(","), v.pop());
                return v || []
            },
            //取消关注或者关注
            handleFollow() {
                this.$emit("handleFollow")
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "criInfoLeftTop.stylus"
</style>
