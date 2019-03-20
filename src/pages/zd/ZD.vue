<template>
    <div class="zdBox">
      <z-d-header></z-d-header>
      <div class="zhuadong">
        <z-d-section-box :oneList="oneList" :twoList="twoList"></z-d-section-box>
        <z-d-section-two-box :oneList="oneList" :twoList="twoList"></z-d-section-two-box>
      </div>

    </div>
</template>

<script>
    import ZDHeader from "./components/ZDHeader"
    import ZDSectionBox from "./components/ZDSectionBox"
    import ZDSectionTwoBox from "./components/ZDSectionTwoBox"
    import axios from "axios"
    export default {
        name: "ZD",
        components:{
          ZDHeader,
          ZDSectionBox,
          ZDSectionTwoBox
        },
      data(){
        return{
          oneList:[],
          twoList:[]
        }
      },
      methods:{
        getzdInfo(){
          axios.get("/api/zd.json")
            .then(this.getzdInfoSucc)
        },
        getzdInfoSucc(res){
          res = res.data
          if(res.ret && res.data){
            const data = res.data
            this.oneList = data.OneList
            this.twoList = data.TwoList
          }
        }
      },
      mounted(){
        this.getzdInfo()
      }
    }
</script>

<style scoped>
  html, body {
    height: 100%; }
  .zdBox{
    display: flex;
    height:100%;
    flex-direction: column;
  }
  .zhuadong {
    flex: 1;
    overflow-y: auto;}
</style>
