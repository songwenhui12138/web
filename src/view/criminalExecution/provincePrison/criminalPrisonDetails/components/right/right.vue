<template>
    <div class="right">
        <div class="topBox">
            <titleName>监狱事件</titleName>
            <timelineCollapse></timelineCollapse>
        </div>
        <div class="botBox">
            <titleName>关注人员</titleName>
            <div class="content" v-if="attentionPersonnel.length">
                <swiper :options="swiperOption" ref="mySwiper">
                    <swiper-slide class="con" v-for="item in attentionPersonnel">
                        <img class="img" :src="item.tx||require('@/assets/mainScreen/defaultImg.png')">
                        <div class="name" :title="item.xm">{{item.xm||'暂无数据'}}</div>
                        <div :title="item.fxjy">{{item.fxjy||'暂无数据'}}</div>
                        <div :title="item.zm">罪名 : {{item.zm||'暂无数据'}}</div>
                        <div :title="item.xq">刑期 : {{item.xq||'暂无数据'}}</div>
                    </swiper-slide>
                </swiper>
                <div class="swiper-button-prev swiper-button-white"></div>
                <div class="swiper-button-next swiper-button-white"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import titleName from "@/components/titleName"
    import timelineCollapse from "@/components/timelineCollapse"
    import {swiper, swiperSlide} from 'vue-awesome-swiper'

    export default {
        name: "right",
        components: {
            titleName,
            timelineCollapse,
            swiper, swiperSlide
        },
        props: {
            attentionPersonnel: {
                type: Array
            }
        },
        data() {
            let _that = this;
            return {
                swiperOption: {
                    autoplay: {
                        delay: 2000,//秒切换一次
                        disableOnInteraction: true
                    },
                    loop: true,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                    slidesPerView: 3,
                    on: {
                        click: function () {
                            let index = this.clickedSlide.getAttribute("data-swiper-slide-index");
                            _that.$router.push('/provincePrison/criminalInfo/' + _that.attentionPersonnel[index].zfbh)
                        }
                    }
                }
            }
        }
    }
</script>
<style lang="stylus">
    .right .topBox .timelineCollapse
        padding 20px 16px 20px 20px
        width 100%
        height calc(100% - 46px)
</style>
<style lang="stylus" scoped>
    @import "right.stylus"
</style>
