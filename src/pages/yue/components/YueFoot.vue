<template>
  <div class="footBox">
    <a href="##" class="foot">
      <img src="static/img/yue/yue7.png"/>
      <span>信用借款</span>
      <img src="static/img/yue/yue8.png"/>
      <span>常见问题</span>
    </a>
  </div>
</template>

<script>
    export default {
        name: "YueFoot"
    }
</script>

<style scoped>
  .footBox {
    width: 3.75rem;
    height: .5rem;
    line-height: .5rem;
    margin-top: 1.7rem; }
  .footBox a {
    display: -webkit-flex;
    -webkit-justify-content: center; }
  .footBox a img:first-child {
    width: .14rem;
    height: .14rem;
    margin-right: .03rem;
    margin-top: .18rem; }
  .footBox a span {
    display: block;
    font-size: .13rem;
    color: #65799e; }
  .footBox a img:nth-child(3) {
    width: 4px;
    height: .15rem;
    margin: .18rem .11rem 0; }
</style>
