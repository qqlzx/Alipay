<template>
  <div class="header">
    <a href="##" class="header-fl">
      <router-link to="/" class="ppics"><img src="static/img/pay/pay-fanhui.png"/></router-link>
      <h3>充值中心</h3>
    </a>
    <a href="##"><img src="static/img/pay/pay1.png"/></a>
  </div>
</template>

<script>
    export default {
        name: "PayHeader"
    }
</script>
<style scoped>
  .header {
    width: 3.75rem;
    height: .49rem;
    display: -webkit-flex;
    -webkit-justify-content: space-between;
    -webkit-align-items: center;
    border-bottom: 1px solid #dcdcdc; }
  .header .header-fl {
    display: -webkit-flex;
    margin-left: .15rem; }
  .header .header-fl .ppics img{
    margin-top: .05rem;
    width: .11rem;
    height: .16rem;
  }
  .header .header-fl img {
    width: .11rem;
    height: .16rem; }
  .header .header-fl h3 {
    font-size: .18rem;
    color: #181818;
    margin-left: .17rem; }
  .header a img:last-child {
    width: .21rem;
    height: .22rem;
    margin-right: .15rem; }
</style>
