<template>
  <div class="section">
    <div class="payVIP-box" v-for="item in sectionList" :key="item.id">
      <div class="payVIP">
        <rount-link :to="item.path">
          <div class="likeA">
              <div class="payVIP-fl">
                <img :src="item.imgUrl"/>
                <h4>{{item.name}}</h4>
              </div>
              <div class="payVIP-fr">
                <span>{{item.desc}}</span>
                <img :src="item.yjtImgUrl"/>
              </div>
          </div>
        </rount-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MySection",
  props:{
    sectionList: Array
  }
}
</script>

<style scoped>
  .section {
    margin-top: .09rem; }
  .payVIP-box {
    width: 100%;
    height: .47rem;
    line-height: .47rem;
    background: white; }
  .payVIP-box .payVIP .likeA {
    width: 3.44rem;
    display: -webkit-flex;
    -webkit-justify-content: space-between;
    margin: auto; }
  .payVIP-box .payVIP .likeA .payVIP-fl {
    display: -webkit-flex;
    -webkit-align-items: center; }
  .payVIP-box .payVIP .likeA .payVIP-fl img:first-child {
    width: .26rem;
    height: .28rem; }
  .payVIP-box .payVIP .likeA .payVIP-fl h4 {
    font-size: .15rem;
    color: #242424;
    margin-left: .16rem; }
  .payVIP-box .payVIP .likeA .payVIP-fr {
    display: -webkit-flex;
    -webkit-align-items: center; }
  .payVIP-box .payVIP .likeA .payVIP-fr span {
    display: block;
    font-size: .14rem;
    color: #9f9f9f; }
  .payVIP-box .payVIP .likeA .payVIP-fr img:last-child {
    width: .09rem;
    height: .16rem;
    margin-left: .11rem;
    margin-right: 3px; }
</style>
