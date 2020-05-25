<template>
    <img class="images" ref="img" :src="defaultSrc" alt="">
</template>

<script>
    export default {
        name: "images",
        props: {
            defaultSrc: String,
            successSrc: {
                type: String,
                default: ""
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            init() {
                this.$nextTick(() => {
                    this.successSrc && this.loadImg(this.successSrc)
                })
            },
            loadImg(src) {
                var img = new Image();
                img.src = src;
                //兼容ie、opera刷新页面时，不触发onload事件
                if (img.complete) { // 如果图片已经存在于浏览器缓存，直接调用回调函数
                    this.$refs.img.src = this.successSrc;
                    return
                }
                img.onload = () => { //图片下载完毕时异步调用callback函数。
                    this.$refs.img.src = this.successSrc;
                };
            }
        },
        watch: {
            successSrc() {
                this.init()
            }
        }
    }
</script>

<style lang="stylus" scoped>

</style>
