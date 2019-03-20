<template>
  <div class="moreBox">
    <div class="more">
      <div class="more-top">
        <h3>更多充值</h3>
        <h6>全部<img src="static/img/index/index-yjiant.png"/></h6>
      </div>
      <div class="more-bottom">
        <a href="##" v-for="item of moreList">
          <img :src="item.imgUrl"/>
          <p>{{item.desc}}</p>
        </a>
      </div>
    </div>
    <div class="more-tit">
      <div class="desc">
        <span>查余额</span>
        <img src="static/img/pay/pay-line.png"/>
        <span>自动充</span>
        <img src="static/img/pay/pay-line.png"/>
        <span>联名卡</span>
      </div>
      <p>-话费充值、流量充值由天猫平台提供服务-</p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "PayMore",
        props:{
          moreList: Array
        }
    }
</script>

<style scoped>
  .moreBox {
    width: 3.75rem;
    height: 2.27rem; }
  .moreBox .more {
    width: 3.46rem;
    margin: 0 auto; }
  .moreBox .more .more-top {
    height: .38rem;
    display: -webkit-flex;
    -webkit-justify-content: space-between;
    -webkit-align-items: flex-end; }
  .moreBox .more .more-top h3 {
    font-size: .17rem;
    color: #121212; }
  .moreBox .more .more-top h6 {
    font-size: .14rem;
    color: #a1a1a1;
    width: .4rem;
    display: -webkit-flex; }
  .moreBox .more .more-top h6 img {
    width: .06rem;
    height: .11rem;
    margin-left: .05rem; }
  .moreBox .more .more-bottom {
    display: -webkit-flex;
    flex-wrap: wrap;
    margin-top: .1rem; }
  .moreBox .more .more-bottom a {
    display: block;
    width: .86rem; }
  .moreBox .more .more-bottom a img {
    width: .35rem;
    height: .38rem;
    margin: .13rem auto; }
  .moreBox .more .more-bottom a p {
    font-size: .11rem;
    color: #414141;
    margin-bottom: .13rem;
    text-align: center; }
  .moreBox .more-tit {
    width: 3.46rem;
    height: .41rem;
    margin: 0 auto; }
  .moreBox .more-tit .desc {
    display: -webkit-flex;
    -webkit-justify-content: center; }
  .moreBox .more-tit .desc span {
    font-size: .13rem;
    color: #787f92;
    display: block; }
  .moreBox .more-tit .desc img {
    margin: 0.02rem  .07rem 0;
    width: 3px;
    height: .14rem; }
  .moreBox .more-tit p {
    text-align: center;
    font-size: .09rem;
    color: #d5d5d5;
    margin-top: .1rem; }
</style>
