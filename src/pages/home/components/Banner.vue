<template>
  <div class="banner-box">
    <div class="banner">
      <div class="swiper-container">
       <!-- <div class="swiper-wrapper">
          <div class="swiper-slide banner-one" v-for="item of bannerList"><img :src="item.imgUrl" width="100%" /></div>
        </div>-->
        <div class="swiper-wrapper">
          <div class="swiper-slide banner-one"><img src="static/img/home/index13.png" width="100%" /></div>
          <div class="swiper-slide banner-two"><img src="static/img/home/index14.png" width="100%" /></div>
          <div class="swiper-slide banner-three"><img src="static/img/home/index15.png" width="100%" /></div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from "swiper"
  import "swiper/dist/css/swiper.css"
  export default {
    name: "HomeBanner",
    /*props:{
      bannerList: Array
    },*/
    methods: {
      _initswiper(){
        var mySwiper = new Swiper ('.swiper-container', {
          direction: 'horizontal', // 垂直切换选项
          loop: true, // 循环模式选项
          autoplay: {
            delay: 3000,//自动切换的时间，单位ms
            stopOnLastSlide: true,//切换到最后一张图时，自动停止，默认false不停止，true停止
            disableOnInteraction: false,//用户操作后，会继续播放，默认为true不播放
          },
          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination',
          },
        })
      }
    },
    mounted() {
      this._initswiper()
    },
  }
</script>

<style scoped>
  .banner-box {
    background-color: white;
    margin-top: .08rem;
    width: 3.75rem;
    height:.9rem;}
  .banner-box .banner {
    margin: auto;
    width: 3.45rem;
    height: .9rem; }
  .banner-box .banner .swiper-pagination-bullet {
    width: 8px;
    height: 6px;
    display: inline-block;
    background: #e7e7e7;
    opacity: .7;
    border-radius: 0; }
  .banner-box .banner .swiper-pagination-bullet-active {
    opacity: 1;
    background: #108ee9;
    width: .13rem;
    height: 6px;
    border-radius: 0; }
  .banner-box .banner .swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet {
    margin-bottom: .05rem;
    margin-right: .04rem; }
  .banner-box .banner .swiper-container-horizontal > .swiper-pagination-bullets, .banner-box .banner .swiper-pagination-custom, .banner-box .banner .swiper-pagination-fraction {
    bottom: -.2rem;
    right: -10px;
    width: 100%; }
</style>
