<template>
  <div class="section-one-box">
    <div class="section-one">
      <h1>惠支付</h1>
      <div class="section-one-content">
        <div class="content-flbox" v-for="item of floorList">
          <a href="##" class="content-fl">
            <h4>{{item.contentTitle}}</h4>
            <span>{{item.desc}}</span>
          </a>
          <div class="content-fr">
            <img :src="item.imgUrl"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeFlooeOne",
  props:{
    floorList:Array
  }
}
</script>

<style scoped>
  .section-one-box {
    width: 100%;
    background-color: white;
    margin-top: .08rem; }
  .section-one-box .section-one {
    margin: auto;
    width: 3.45rem; }
  .section-one-box .section-one h1 {
    color: #2b2b2b;
    font-size: .17rem;
    height: .42rem;
    line-height: .42rem;
    border-bottom: 1px solid #f9f9f9; }
  .section-one-box .section-one .section-one-content {
    height: .73rem;
    display: -webkit-flex;
    border-bottom: 1px solid #f9f9f9; }
  .section-one-box .section-one .section-one-content .content-flbox {
    display: -webkit-flex;
    -webkit-align-items: center; }
  .section-one-box .section-one .section-one-content .content-flbox .content-fl {
    margin-right: .37rem;
    margin-left: .1rem; }
  .section-one-box .section-one .section-one-content .content-flbox .content-fl h4 {
    color: #2e2e2e;
    font-size: .14rem;
    margin-bottom: .1rem; }
  .section-one-box .section-one .section-one-content .content-flbox .content-fl span {
    display: block;
    color: #a6a6a6;
    font-size: .12rem; }
  .section-one-box .section-one .section-one-content .content-flbox .section-two {
    margin-right: .29rem; }
  .section-one-box .section-one .section-one-content .content-flbox .content-fr img {
    width: .48rem;
    height: .48rem;
    margin-right: .1rem; }
  .section-one-box .section-one .section-one-content .content-flbox:first-child {
    border-right: 1px solid #f0f0f0; }
  .section-one-box .section-one .section-one-content .content-flbox:nth-child(2) .content-fl:nth-child(1) {
    margin-right: .23rem; }

</style>
