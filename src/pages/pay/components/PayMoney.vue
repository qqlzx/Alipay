<template>
  <div class="PayMoney">
    <h1>充话费</h1>
    <div class="moneyBox">
      <a href="##" v-for="item of moneyList">
        <h5>{{item.price}}元</h5>
        <span>售价：<em>{{item.favPrice}}元</em></span>
      </a>
    </div>
  </div>
</template>

<script>
    export default {
        name: "PayMoney",
        props:{
          moneyList: Array
        }
    }
</script>

<style scoped>
  .PayMoney {
    width: 100%;
    height: 2.66rem; }
  .PayMoney h1 {
    color: #000000;
    font-size: .18rem;
    margin-left: .15rem; }
  .PayMoney .moneyBox {
    width: 3.46rem;
    height: 2.3rem;
    margin: 0 auto;
    display: -webkit-flex;
    flex-wrap: wrap; }
  .PayMoney .moneyBox a {
    display: block;
    width: 1.08rem;
    height: .6rem;
    border: 3px solid #0377ee;
    border-radius: 3px;
    text-align: center;
    margin-right: .02rem;
    margin-top: .05rem; }
  .PayMoney .moneyBox a h5 {
    color: #0484f1;
    font-size: .17rem;
    margin-top: .08rem;
    margin-bottom: .04rem; }
  .PayMoney .moneyBox a span {
    display: block;
    color: #9cc6de;
    font-size: .11rem; }
  .PayMoney .moneyBox a em {
    font-style: normal;
    font-size: .11rem;
    color: #90adbf; }
  .PayMoney .moneyBox a:nth-child(3n) {
    margin-right: 0rem; }
</style>
