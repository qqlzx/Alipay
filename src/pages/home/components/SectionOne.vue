<template>
  <div class="floor1-box">
    <div class="floor1">
      <img src="static/img/home/index11.png"/>
      <ul>
        <li>
          宝宝饿了，主人快回来吧~
          <span>11小时前</span>
        </li>
        <li>
          支付助手：￥1.00付款成功
          <span>16小时前</span>
        </li>
      </ul>
      <img src="static/img/home/index12.png"/>
      <a href="##"><img src="static/img/home/index-yjiant.png"/></a>
    </div>
  </div>
</template>

<script>
  export default{
    name:"HomeSectionOne"
  }
</script>

<style scoped>
  .floor1-box {
    width: 100%;
    background-color: white;
    margin-top: .08rem; }
  .floor1-box .floor1 {
    width: 3.45rem;
    height: .66rem;
    margin: auto;
    display: -webkit-flex;
    -webkit-align-items: center; }
  .floor1-box .floor1 img:first-child {
    width: .6rem;
    height: .45rem;
    margin-right: 3px; }
  .floor1-box .floor1 ul li {
    font-size: .13rem;
    color: #3a3a3a;
    list-style-position: inside; }
  .floor1-box .floor1 ul li span {
    color: #9a9a9a;
    margin-left: .15rem; }
  .floor1-box .floor1 img:nth-child(3) {
    width: .1rem;
    height: .11rem;
    margin-left: .1rem;
    margin-right: 5px; }
  .floor1-box .floor1 img:last-child {
    width: .06rem;
    height: .11rem;
    margin-right: 0px; }
</style>
