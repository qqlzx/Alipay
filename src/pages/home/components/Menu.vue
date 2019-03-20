<template>
  <div class="section">
    <div class="linka" v-for="item of menuList">
      <rount-link :to="item.path">
      <img :src="item.imgUrl" alt=""/>
      <span>{{item.desc}}</span>
    </rount-link>
    </div>
  </div>
</template>

<script>
  export default{
    name:"HomeMenu",
    props:{
      menuList: Array
    }
  }
</script>

<style scoped>
  .section {
    width: 100%;
    height: 2.12rem;
    background-color: white;
    display: -webkit-flex;
    -webkit-flex-wrap: wrap; }
  .section .linka {
    width: 25%;
    text-align: center; }
  .section .linka img {
    width: .26rem;
    height: .26rem;
    margin: .12rem auto .06rem; }
  .section .linka span {
    display: block;
    font-size: 12px;
    color: #474747; }
  .section .linka:nth-last-child(2) span:nth-child(3) {
    color: #349fec;
    font-size: 10px; }
</style>
