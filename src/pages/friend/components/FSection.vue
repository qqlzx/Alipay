<template>
  <div class="section">
    <div class="section-box">
      <a href="##" v-for="item of fsectionList">
        <img :src="item.imgUrl"/>
        <h4>{{item.tit}}</h4>
        <span>{{item.desc}}</span>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name : "FriendSection",
    props :{
      fsectionList: Array
    }
  }
</script>

<style scoped>
  .section {
    width: 100%;
    height: 1.14rem;
    background: white;
    border-bottom: 1px solid #e8e8e8; }
  .section .section-box {
    margin: auto;
    margin-top: 6px;
    width: 3.5rem;
    height: 1.1rem;
    border-top: 1px solid #e8e8e8;
    display: -webkit-flex; }
  .section .section-box a {
    width: 1.16rem;
    height: .93rem;
    margin-top: 10px;
    margin-bottom: .11rem;
    text-align: center;
    background: url("../../../../static/img/friend/friend5.png") no-repeat; }
  .section .section-box a img {
    margin: auto;
    width: .48rem;
    height: .43rem;
    margin-bottom: .08rem; }
  .section .section-box a h4 {
    font-size: .16rem;
    color: #343434;
    margin-bottom: .06rem; }
  .section .section-box a span {
    display: block;
    font-size: .13rem;
    color: #939393;
    width: 1.04rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis; }
  .section .section-box a:nth-child(1) {
    background: none; }
</style>
