<template>
  <div class="indexBox">
    <home-header></home-header>
    <div class="huadong">
      <home-menu :menuList="menuList"></home-menu>
      <home-section-one></home-section-one>
      <!--<home-banner :bannerList="bannerList"></home-banner>-->
      <home-banner></home-banner>
      <home-floor-one :floorList="floorList"></home-floor-one>
      <home-floor-one :floorList="floorList"></home-floor-one>
      <home-section-three :threeList="threeList"></home-section-three>
      <home-section-three :threeList="threeList"></home-section-three>
      <home-section-four></home-section-four>
      <home-find></home-find>
    </div>
    <home-footer></home-footer>
  </div>
</template>

<script>
  import HomeHeader from './components/Header'
  import HomeMenu from "./components/Menu"
  import  HomeSectionOne from "./components/SectionOne"
  import  HomeBanner from "./components/Banner"
  import HomeFloorOne from "./components/FloorOne"
  import HomeSectionThree from "./components/SectionThree"
  import  HomeSectionFour from  "./components/SectionFour"
  import HomeFind from "./components/Find"
  import HomeFooter from "./components/Footer"
  import axios from "axios"
  export default{
  name:"Home",
  components:{
    HomeHeader,
    HomeMenu,
    HomeSectionOne,
    HomeBanner,
    HomeFloorOne,
    HomeSectionThree,
    HomeSectionFour,
    HomeFind,
    HomeFooter
  },
  data(){
    return{
      menuList:[],
      /*bannerList: [],*/
      floorList: [],
      threeList: []
    }
  },
  methods:{
    getHomeInfo(){
      axios.get("/api/index.json")
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc(res){
      res = res.data
      if(res.ret && res.data){
        const data = res.data
        this.menuList = data.MenuList,
        /*this.bannerList = data.BannerList*/
        this.floorList = data.FloorList
        this.threeList = data.ThreeList
      }
    }
  },
  mounted(){
    this.getHomeInfo()
  }
}
</script>

<style scoped>
  html, body {
    height: 100%; }
.indexBox{
  display: flex;
  height:100%;
  flex-direction: column;
}
  .huadong {
    flex: 1;
    overflow-y: auto;}
</style>
