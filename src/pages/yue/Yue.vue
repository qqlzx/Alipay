<template>
    <div>
      <yue-header></yue-header>
      <yue-section-one></yue-section-one>
      <yue-section-two :twoList="twoList"></yue-section-two>
      <yue-section-three></yue-section-three>
      <yue-foot></yue-foot>
    </div>
</template>

<script>
  import YueHeader from "./components/YueHeader"
  import YueSectionOne from "./components/YueSectionOne"
  import YueSectionTwo from "./components/YueSectionTwo"
  import YueSectionThree from "./components/YueSectionThree"
  import YueFoot from "./components/YueFoot"
  import axios from "axios"
    export default {
        name: "Yue.vue",
        components:{
          YueHeader,
          YueSectionOne,
          YueSectionTwo,
          YueSectionThree,
          YueFoot
        },
      data(){
        return{
          twoList:[],
        }
      },
      methods:{
        getYueInfo(){
          axios.get("/api/yue.json")
            .then(this.getYueInfoSucc)
        },
        getYueInfoSucc(res){
          res = res.data
          if(res.ret && res.data){
            const data = res.data
            this.twoList = data.TwoList
          }
        }
      },
      mounted(){
        this.getYueInfo()
      }
    }
</script>

<style >

</style>
