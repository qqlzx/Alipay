<template>
  <div class="section">
    <div class="phone-box">
      <div class="phone">
        <div>请输入手机号</div>
        <span>默认号码(陕西移动)</span>
      </div>
      <img src="static/img/pay/pay2.png"/>
    </div>
  </div>
</template>

<script>
    export default {
        name: "PaySection"
    }
</script>

<style scoped>
  .section {
    width: 3.75rem;
    height: .92rem; }
  .section .phone-box {
    width: 3.46rem;
    height: .92rem;
    margin: auto;
    display: -webkit-flex;
    -webkit-justify-content: space-between;
    -webkit-align-items: center; }
  .section .phone-box .phone div {
    width: 2.66rem;
    border: none;
    font-size: .2rem;
    height: .56rem;
    line-height: .56rem; }
  .section .phone-box .phone span {
    font-size: .11rem;
    color: #cecece;
    display: block;
    height: .11rem; }
  .section .phone-box img {
    width: .25rem;
    height: .24rem; }
</style>
