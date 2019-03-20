<template>
  <div class="myBox">
      <my-header></my-header>
    <div class="mhuadong">
      <m-y-v-i-p></m-y-v-i-p>
      <my-section :sectionList="sectionList"></my-section>
      <my-section-one :oneList="oneList"></my-section-one>
      <my-section-two :twoList="twoList"></my-section-two>
    </div>

      <mfooter></mfooter>
  </div>
</template>

<script>
  import MyHeader from "./components/MyHeader"
  import MYVIP from "./components/MYVIP"
  import MySection from "./components/MySection"
  import MySectionOne from "./components/MySectionOne"
  import MySectionTwo from "./components/MySectionTwo"
  import Mfooter from "./components/Mfooter"
  import axios from "axios"
  export default {
    name: "My",
    components: {
      MyHeader,
      MYVIP,
      MySection,
      MySectionOne,
      MySectionTwo,
      Mfooter
    },
    data(){
      return{
        sectionList:[],
        oneList:[],
        twoList:[]
      }
    },
    methods:{
      getMyInfo(){
        axios.get("/api/my.json")
          .then(this.getMyInfoSucc)
      },
      getMyInfoSucc(res){
        res = res.data
        if(res.ret && res.data){
          const data = res.data
          this.sectionList = data.MySectionList,
          this.oneList = data.OneList
          this.twoList = data.TwoList
        }
      }
    },
    mounted(){
      this.getMyInfo()
    }
  }
</script>

<style scoped>
  html, body {
    height: 100%; }
  .myBox{
    display: flex;
    height:100%;
    flex-direction: column;
  }
  .mhuadong {
    flex: 1;
    overflow-y: auto;}
</style>
