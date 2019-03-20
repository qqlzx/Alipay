<template>
  <div class="section-two">
    <div class="payVIP-box" v-for="item of twoList">
      <div class="payVIP">
        <a href="##">
          <div class="payVIP-fl">
            <img :src="item.imgUrl"/>
            <h4>{{item.tit}}</h4>
          </div>
          <div class="payVIP-fr">
            <img :src="item.yjtImgUrl"/>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name:"MySectionTwo",
    props:{
      twoList: Array
    }
  }
</script>

<style scoped>
  .section-two {
    margin-top: .09rem; }
  .payVIP-box {
    width: 100%;
    height: .47rem;
    line-height: .47rem;
    background: white; }
  .payVIP-box .payVIP a {
    width: 3.44rem;
    display: -webkit-flex;
    -webkit-justify-content: space-between;
    margin: auto; }
  .payVIP-box .payVIP a .payVIP-fl {
    display: -webkit-flex;
    -webkit-align-items: center; }
  .payVIP-box .payVIP a .payVIP-fl img:first-child {
    width: .26rem;
    height: .28rem; }
  .payVIP-box .payVIP a .payVIP-fl h4 {
    font-size: .15rem;
    color: #242424;
    margin-left: .16rem; }
  .payVIP-box .payVIP a .payVIP-fr {
    display: -webkit-flex;
    -webkit-align-items: center; }
  .payVIP-box .payVIP a .payVIP-fr span {
    display: block;
    font-size: .14rem;
    color: #9f9f9f; }
  .payVIP-box .payVIP a .payVIP-fr img:last-child {
    width: .09rem;
    height: .16rem;
    margin-left: .11rem;
    margin-right: 3px; }
</style>
