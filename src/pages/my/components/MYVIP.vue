<template>
  <div class="payVIP-box">
    <div class="payVIP">
      <a href="##">
        <div class="payVIP-fl">
          <img src="static/img/my/my2.png"/>
          <h4>支付宝会员</h4>
        </div>
        <div class="payVIP-fr">
          <span>1个积分待领取</span>
          <img src="static/img/home/index-yjiant.png"/>
        </div>
      </a>

    </div>
  </div>
</template>

<script>
  export default {
    name: "MYVIP"
  }
</script>

<style scoped>
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
