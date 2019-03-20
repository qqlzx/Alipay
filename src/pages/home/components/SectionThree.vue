<template>
  <div class="section-three-box">
    <div class="section-three">
      <div class="section-three-top">
        <h1>每日必抢</h1>
        <span>淘宝提供服务</span>
      </div>
      <div class="section-three-bottom">
        <a href="##" v-for="item of threeList">
          <img :src="item.imgUrl"/>
          <h3>{{item.title}}</h3>
          <span>{{item.desc}}<em>{{item.descPrice}}</em></span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeSectionThree",
    props:{
      threeList:Array
    }
  }
</script>

<style scoped>
  .section-three-box {
    width: 100%;
    background-color: white;
    border-bottom: 1px solid #f9f9f9;
    margin-bottom: 9px; }
  .section-three-box .section-three {
    margin: auto;
    width: 3.45rem; }
  .section-three-box .section-three .section-three-top {
    height: .62rem;
    line-height: .62rem;
    display: -webkit-flex; }
  .section-three-box .section-three .section-three-top h1 {
    font-size: .17rem;
    color: #333; }
  .section-three-box .section-three .section-three-top span {
    display: block;
    font-size: .11rem;
    color: #9f9f9f;
    margin-left: 9px; }
  .section-three-box .section-three .section-three-bottom {
    height: 1.28rem;
    width: 3.45rem;
    display: -webkit-flex; }
  .section-three-box .section-three .section-three-bottom a {
    width: 1.15rem;
    text-align: center; }
  .section-three-box .section-three .section-three-bottom a img {
    margin: auto;
    width: .72rem;
    height: .71rem; }
  .section-three-box .section-three .section-three-bottom a h3 {
    font-size: .14rem;
    color: #686868;
    margin-top: .11rem; }
  .section-three-box .section-three .section-three-bottom a span {
    font-size: .12rem;
    color: #9b9b9b;
    display: block;
    margin-top: .11rem; }
  .section-three-box .section-three .section-three-bottom a span em {
    font-style: normal;
    color: #f5684b; }
</style>
