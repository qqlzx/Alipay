<template>
  <div class="header">
    <div class="header-top">
      <h1>我的</h1>
      <h1>设置</h1>
    </div>
    <div class="header-bottom">
      <img src="static/img/my/my-logo.png"/>
      <div class="header-fr">
        <h4>豆豆</h4>
        <span>183******89</span>
      </div>
      <img src="static/img/my/my1.png"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyHeader"
}
</script>

<style scoped>
  .header {
    width: 3.75rem;
    height: 1.2rem;
    background: #1a83d4; }
  .header .header-top {
    display: -webkit-flex;
    -webkit-justify-content: space-between;
    -webkit-align-items: center;
    width: 3.44rem;
    height: .46rem;
    margin: auto; }
  .header .header-top h1 {
    font-size: .18rem;
    color: #efe6d2; }
  .header .header-bottom {
    margin: auto;
    width: 3.44rem;
    display: -webkit-flex; }
  .header .header-bottom img:nth-child(1) {
    width: .65rem;
    height: .6rem;
    margin-right: .12px; }
  .header .header-bottom .header-fr h4 {
    font-size: .17rem;
    color: #e7fdfe;
    margin-bottom: .11rem; }
  .header .header-bottom .header-fr span {
    display: block;
    width: .98rem;
    height: .23rem;
    font-size: .12rem;
    color: #caf8ff;
    border-radius: .11rem;
    border: 2px solid #2f94e2; }
  .header .header-bottom img:nth-child(3) {
    width: .09rem;
    height: .16rem;
    margin: auto;
    margin-right: 3px; }
</style>
