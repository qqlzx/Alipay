<template>
  <div class="header">
    <div class="header-top">
      <a href="##" class="header-fl">
        <router-link to="My" class="Hpics"><img src="static/img/pay/pay-fanhui.png"/></router-link>
        <h3>账单</h3>
      </a>
      <a href="##"><img src="static/img/zd/zd1.png"/></a>
    </div>
    <div class="pics"><a href="##"><img src="static/img/zd/zd2.png" width="100%"/></a></div>
    <div class="header-bottom">
      <a href="##">
        <span>筛选</span>
        <div></div>
        <span>分类</span>
        <div></div>
      </a>
      <a href="##">
        <img src="static/img/zd/zd-line.png"/>
        <span>搜索</span>
      </a>
    </div>
  </div>
</template>

<script>
    export default {
        name: "ZDHeader"
    }
</script>

<style scoped>
  .header {
    width: 3.75rem;
    background: white;
    border-bottom: 1px solid #dcdcdc; }
  .header .header-top {
    width: 3.45rem;
    height: .49rem;
    display: -webkit-flex;
    -webkit-justify-content: space-between;
    -webkit-align-items: center;
    margin-left: .15rem; }
  .header .header-top .header-fl {
    display: -webkit-flex; }
  .header .header-top .header-fl img {
    width: .11rem;
    height: .16rem;
    margin-top: .05rem; }
  .header .header-top .header-fl h3 {
    font-size: .18rem;
    color: #181818;
    margin-left: .17rem; }
  .header .header-top a .Hpics img{
    margin-right: .15rem; }
  .header .header-bottom {
    width: 3.45rem;
    height: .39rem;
    display: -webkit-flex;
    -webkit-justify-content: space-between;
    -webkit-align-items: center;
    margin-left: .15rem; }
  .header .header-bottom a {
    display: -webkit-flex; }
  .header .header-bottom a span {
    display: block;
    font-size: .14rem;
    color: #929292; }
  .header .header-bottom a div {
    width: 3px;
    height: 3px;
    border: 3px solid transparent;
    border-top-color: #b9b9b9;
    margin-top: .07rem;
    margin-left: .07rem; }
  .header .header-bottom a div:nth-child(2) {
    margin-right: .39rem; }
  .header .header-bottom a img {
    width: 2px;
    height: .21rem;
    margin-right: .1rem; }
</style>
