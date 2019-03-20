<template>
  <div class="FriendBox">
    <friend-header></friend-header>
    <friend-section :fsectionList="fsectionList"></friend-section>
    <div class="fhuadong">
      <friend-section-one :fsOneList="fsOneList"></friend-section-one>
    </div>

    <ffooter></ffooter>
  </div>

</template>

<script>
import FriendHeader from "./components/FHeader"
import FriendSection from "./components/FSection"
import FriendSectionOne from "./components/FSectionOne"
import Ffooter from "./components/Ffooter"
import axios from "axios"
  export default{
    name:"Friend",
    components: {
      FriendHeader,
      FriendSection,
      FriendSectionOne,
      Ffooter
    },
    data(){
      return{
        fsectionList:[],
        fsOneList :[],
      }
    },
    methods:{
      getFriendInfo(){
        axios.get("/api/friend.json")
          .then(this.getFriendInfoSucc)
      },
      getFriendInfoSucc(res){
        res = res.data
        if(res.ret && res.data){
          const data = res.data
          this.fsectionList = data.SectionList,
          this.fsOneList = data.FSOneList
        }
      }
    },
    mounted(){
      this.getFriendInfo()
    }
  }
</script>

<style scoped>
  html, body {
    height: 100%; }
  .FriendBox{
    display: flex;
    height:100%;
    flex-direction: column;
  }
  .fhuadong {
    flex: 1;
    overflow-y: auto;}
</style>
