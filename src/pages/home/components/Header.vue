<template>
  <div class="header">
      <div class="top-box">
        <div class="top-fl">
          <a href="##"><img src="static/img/home/index-search.png"/></a>
          <span>长安通充值</span>
          <a href="##"><img src="static/img/home/index-say.png"/></a>
        </div>
        <a href="##"><img class="top-pic" src="static/img/home/index1.png"/></a>
        <a href="##"><img class="top-pic" src="static/img/home/index-add.png"/></a>
      </div>
      <div class="bottom-box">
        <a href="##"><img src="static/img/home/index2.png"/><span>扫一扫</span></a>
        <a href="##"><img src="static/img/home/index3.png"/><span>付款</span></a>
        <a href="##"><img src="static/img/home/index4.png"/><span>收钱</span></a>
        <a href="##"><img src="static/img/home/index5.png"/><span>卡券</span></a>
      </div>
  </div>
</template>

<script>
  export default{
    name:"HomeHeader"
  }
</script>

<style scoped>
  .header {
    width: 3.75rem;
    height: 1.22rem;
    background-color: #1b82d2; }
  .header .top-box {
    width: 3.5rem;
    height: .5rem;
    margin: auto;
    display: -webkit-flex;
    -webkit-align-items: center; }
  .header .top-box .top-fl {
    width: 2.72rem;
    height: .28rem;
    border: 1px solid #b4d6f0;
    margin: auto 0;
    border-radius: 3px;
    background-color: white;
    display: -webkit-flex;
    -webkit-align-items: center; }
  .header .top-box .top-fl a:first-child img {
    width: .14rem;
    height: .14rem;
    margin-left: 14px;
    margin-right: .05rem; }
  .header .top-box .top-fl a:last-child img {
    width: .1rem;
    height: .14rem;
    margin-right: .12rem; }
  .header .top-box .top-fl span {
    font-size: .13rem;
    color: #626262;
    display: block;
    margin-right: 1.52rem; }
  .header .top-box a .top-pic {
    width: .23rem;
    height: .2rem;
    margin-left: .15rem; }
  .header .bottom-box {
    width: 100%;
    display: -webkit-flex; }
  .header .bottom-box a {
    -webkit-flex: 1;
    text-align: center; }
  .header .bottom-box a img {
    width: .32rem;
    height: .34rem;
    margin: .1rem auto .0rem; }
  .header .bottom-box a span {
    font-size: 14px;
    color: white;
    display: block; }
</style>
