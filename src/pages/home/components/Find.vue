<template>
  <div class="find">
    <div class="find-top">
      <img src="static/img/home/index23.png"/>
      <span>没有找到需要的？搜一下试试</span>
      <img src="static/img/home/index23.png"/>
    </div>
    <a href="##">
      <h5>备用金</h5>
      <h5>长安通充值</h5>
      <h5>蚂蚁森林</h5>
    </a>
  </div>
</template>

<script>
  export default {
    name: "HomeFind"
  }
</script>

<style scoped>
  .find {
    width: 100%;
    height: 1.05rem;
    background: white; }
  .find .find-top {
    width: 3.45rem;
    display: -webkit-flex;
    margin: 0 auto; }
  .find .find-top img {
    width: .88rem;
    height: 2px;
    margin-top: .48rem; }
  .find .find-top span {
    margin: .4rem .06rem .14rem .06rem;
    font-size: .12rem;
    color: #bfbfbf;
    display: block; }
  .find a {
    display: -webkit-flex; }
  .find a h5 {
    display: block;
    background: #f3f3f3;
    border-radius: .08rem;
    height: .22rem;
    font-size: .1rem;
    color: #9f9f9f;
    text-align: center; }
  .find a h5:nth-child(1) {
    width: .5rem;
    margin-left: .58rem; }
  .find a h5:nth-child(2) {
    width: .72rem;
    margin-left: .21rem;
    margin-right: .21rem; }
  .find a h5:nth-child(3) {
    width: .66rem;
    margin-right: .58rem; }
</style>

