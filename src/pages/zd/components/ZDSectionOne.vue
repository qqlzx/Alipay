<template>
  <div class="so" >
    <div class="section-oneBox" >
      <div class="section-one">
        <a href="##" class="section-fl">
          <span>{{oneList.month}}</span>
          <div></div>
        </a>
        <div class="section-fr">
          <h2>支出 ￥{{oneList.exp}}</h2>
          <h2>收入 ￥{{oneList.inc}}</h2>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
    export default {
        name: "ZDSectionOne",
        props:['oneList']
    }
</script>

<style scoped>
  .section-oneBox {
    width: 100%;
    height: .56rem; }
  .section-oneBox .section-one {
    width: 3.45rem;
    height: .56rem;
    margin-left: .15rem;
    display: -webkit-flex;
    -webkit-justify-content: space-between;
    -webkit-align-items: center; }
  .section-oneBox .section-one .section-fl {
    width: .66rem;
    height: .27rem;
    border-radius: .11rem;
    background: white;
    border: 1px solid #dcdcdc;
    display: -webkit-flex;
    -webkit-align-items: center;
    -webkit-justify-content: center; }
  .section-oneBox .section-one .section-fl span {
    font-size: .14rem;
    color: #343434;
    display: block;
    margin-right: .08rem; }
  .section-oneBox .section-one .section-fl div {
    width: 3px;
    height: 3px;
    border: 3px solid transparent;
    border-top-color: #b9b9b9; }
  .section-oneBox .section-one .section-fr h2 {
    font-size: .13rem;
    color: #a9a9a9;
    text-align: right; }
</style>
