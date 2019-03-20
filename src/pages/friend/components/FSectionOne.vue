<template>
  <div class="section-one-box">
    <div class="section-one" v-for="item of fsOneList">
      <img :src="item.imgUrl"/>
      <a href="##" >
        <div class="tit">
          <h1>{{item.tit}}</h1>
          <span>{{item.time}}</span>
        </div>
        <h5>{{item.desc}}</h5>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "FriendSectionOne",
    props: {
      fsOneList: Array
    }
  }
</script>

<style scoped>
  .section-one-box {
    -webkit-flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
    width: 100%;
    margin-top: .09rem;
    border-top: 3px solid #ededed;
    background: white; }
  .section-one-box .section-one {
    width: 3.5rem;
    height: .66rem;
    margin: auto;
    display: -webkit-flex;
    -webkit-align-items: center; }
  .section-one-box .section-one img {
    width: .56rem;
    height: .56rem;
    margin-right: .15rem; }
  .section-one-box .section-one a {
    width: 2.75rem;
    height: .55rem;
    margin-top: .11rem;
    border-bottom: 1px solid #e5e5e5; }
  .section-one-box .section-one a .tit {
    display: -webkit-flex;
    justify-content: space-between; }
  .section-one-box .section-one a .tit h1 {
    font-size: .16rem;
    color: #353535; }
  .section-one-box .section-one a .tit span {
    font-size: .13rem;
    color: #9a9a9a;
    display: block; }
  .section-one-box .section-one a h5 {
    font-size: .13rem;
    color: #9a9a9a;
    margin-top: .08rem;
    width: 2.41rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis; }
</style>
