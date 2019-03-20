<template>
  <div class="header">
    <span>朋友</span>
    <a href="##">
      <img src="static/img/friend/friend-search.png"/>
      <img src="static/img/friend/friend1.png"/>
      <img src="static/img/friend/friend-add.png"/>
    </a>
  </div>
</template>

<script>
export default {
  name: "FriendHeader",
  methods:{

  }
}
</script>

<style scoped>
  .header {
    width: 3.75rem;
    height: .5rem;
    background: #1a83d4;
    display: -webkit-flex;
    -webkit-align-items: center; }
  .header span {
    display: block;
    font-size: .18rem;
    color: white;
    margin-left: .17rem; }
  .header a {
    display: -webkit-flex; }
  .header a img {
    width: .24rem;
    height: .24rem; }
  .header a img:nth-child(1) {
    margin-left: 2.03rem; }
  .header a img:nth-child(2) {
    margin-left: .23rem; }
  .header a img:nth-child(3) {
    margin-left: .12rem; }
</style>
