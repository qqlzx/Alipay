<template>
  <div class="payVIP-box section-two section-three">
    <div class="payVIP">
      <a href="##">
        <div class="payVIP-fl">
          <img src="static/img/yue/yue5.png"/>
          <h3>集分宝</h3>
        </div>
        <div class="payVIP-fr">
          <img src="static/img/yue/yue6.png"/>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
    export default {
        name: "YueSectionThree"
    }
</script>

<style scoped>
  .payVIP-box {
    width: 100%;
    height: .47rem;
    line-height: .47rem;
    background: #fefcec;
    border-bottom: 2px solid #ededed; }
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
    color: #f76e2a;
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
  .section-two {
    background: white;
    border-bottom: 2px solid #ededed; }
  .section-two h3 {
    font-size: .15rem;
    color: #262626;
    margin-left: .16rem; }
  .section-three {
    margin-top: .22rem;
    border-top: 2px solid #ededed;
    border-bottom: 2px solid #ededed; }
</style>
