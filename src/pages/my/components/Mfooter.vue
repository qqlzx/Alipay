<template>
  <div class="footer">
    <router-link to="/">
      <img src="static/img/index/f1.png"/><span>首页</span>
    </router-link>

    <a href="#"><img src="static/img/index/f2.png"/><span>财富</span></a>
    <a href="#"><img src="static/img/index/f3.png"/><span>口碑</span></a>
    <router-link to="Friend">
      <img src="static/img/index/f4.png"/><span>朋友</span>
    </router-link>

    <a href="#"><img src="static/img/index/f5-1.png"/><span>我的</span></a>
  </div>
</template>

<script>
    export default {
        name: "Mfooter"
    }
</script>

<style scoped>
  .footer {
    display: -webkit-flex;
    background: white;
    border-top: 2px solid #ececee; }
  .footer a {
    width: 20%;
    text-align: center; }
  .footer a img {
    width: .27rem;
    height: .27rem;
    margin: 0 auto; }
  .footer a span {
    display: block;
    color: #929292;
    font-size: 10px; }
  .footer a:nth-child(5) span {
    color: #29a1f7; }
  .footer a:hover span {
    color: #29a1f7; }
</style>
