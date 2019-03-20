<template>
  <div class="header">
    <div class="header-top">
      <a href="##" class="header-fl">
        <router-link to="My" class="ypics"><img src="static/img/yue/yue1.png"/></router-link>
        <h3>余额</h3>
      </a>
      <a href="##"><span>明细</span></a>
    </div>
    <div class="header-bottom">
      <h3>余额账户(元)</h3>
      <h1>100.05</h1>
    </div>
  </div>
</template>

<script>
    export default {
        name: "YueHeader"
    }
</script>

<style scoped>
  .header {
    width: 3.75rem;
    height: 2.26rem;
    background: #1b82d2;
    border-bottom: 1px solid #dcdcdc; }
  .header .header-top {
    width: 3.6rem;
    height: .49rem;
    display: -webkit-flex;
    -webkit-justify-content: space-between;
    -webkit-align-items: center; }
  .header .header-top .header-fl {
    margin-left: .15rem;
    display: -webkit-flex; }
  .header .header-top .header-fl img {
    width: .11rem;
    height: .16rem;
    margin-top: .05rem; }
  .header .header-top .header-fl h3 {
    font-size: .18rem;
    color: white;
    margin-left: .17rem; }
  .header .header-top a span {
    display: block;
    font-size: .18rem;
    color: white;
    margin-right: .15rem; }
  .header .header-bottom {
    width: 3.6rem;
    margin-left: .15rem; }
  .header .header-bottom h3 {
    font-size: .13rem;
    color: #cbe2f4;
    height: .48rem;
    padding-top: .29rem; }
  .header .header-bottom h1 {
    font-size: .57rem;
    color: #cbe2f4;
    height: .88rem;
    padding-top: .12rem; }
</style>
