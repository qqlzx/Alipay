<template>
  <div class="footer">
      <a href="#"><img src="static/img/home/f1-1.png"/><span>首页</span></a>
    <a href="#"><img src="static/img/home/f2.png"/><span>财富</span></a>
    <a href="#"><img src="static/img/home/f3.png"/><span>口碑</span></a>
    <router-link to="/friend">
      <img src="static/img/home/f4.png"/><span>朋友</span>
    </router-link>
    <router-link to="/My">
      <img src="static/img/home/f5.png"/><span>我的</span>
    </router-link>

  </div>
</template>

<script>
  export default {
    name:"HomeFooter"
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
  .footer a:nth-child(1) span {
    color: #29a1f7; }
  .footer a:hover {
    color: #29a1f7; }
</style>
