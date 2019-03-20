<template>
  <div class="footer">
    <router-link to="/">
      <a href="#"><img src="static/img/index/f1.png"/><span>首页</span></a>
    </router-link>

    <a href="#"><img src="static/img/index/f2.png"/><span>财富</span></a>
    <a href="#"><img src="static/img/index/f3.png"/><span>口碑</span></a>

    <a href="Friend"><img src="static/img/index/f4-1.png"/><span>朋友</span></a>
    <router-link to="My">
      <a href="My"><img src="static/img/index/f5.png"/><span>我的</span></a>
    </router-link>
  </div>
</template>

<script>
    export default {
        name: "Ffooter"
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
  .footer a:nth-child(4) span {
    color: #29a1f7; }
  .footer a:hover span {
    color: #29a1f7; }
</style>
