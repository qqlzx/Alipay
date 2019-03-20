<template>
  <div>
    <div class="section-twoBox">
      <div class="section-two">
        <div class="section-two-fl">
          <img :src="twoList.imgUrl"/>
          <div class="section-two-tit">
            <h3>{{twoList.tit}}</h3>
            <h3>{{twoList.desc}}</h3>
            <h5>{{twoList.time}}</h5>
          </div>
        </div>
        <div class="section-two-fr">
          <h1>{{twoList.price}}</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "ZDSectionTwo",
        props:['twoList']
    }
</script>

<style scoped>
  .section-twoBox {
    width: 100%;
    background: white;
    height: 0.84rem;
    padding-top: .18rem; }
  .section-twoBox .section-two {
    width: 3.45rem;
    margin-left: .15rem;
    display: -webkit-flex;
    -webkit-justify-content: space-between; }
  .section-twoBox .section-two .section-two-fl {
    display: -webkit-flex; }
  .section-twoBox .section-two .section-two-fl img {
    width: .34rem;
    height: .34rem;
    margin-right: .18rem; }
  .section-twoBox .section-two .section-two-fl .section-two-tit {
    height: .84rem;
    line-height: .21rem; }
  .section-twoBox .section-two .section-two-fl .section-two-tit h3 {
    width: 1.81rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: .14rem;
    color: #474747; }
  .section-twoBox .section-two .section-two-fl .section-two-tit h5 {
    font-size: .13rem;
    color: #939393; }
  .section-twoBox .section-two .section-two-fr {
    font-size: .16rem;
    color: #393939; }
</style>
