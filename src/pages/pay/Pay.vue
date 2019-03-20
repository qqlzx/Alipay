<template>
    <div>
      <pay-header></pay-header>
      <pay-section></pay-section>
      <pay-money :moneyList="moneyList"></pay-money>
      <pay-more :moreList="moreList"></pay-more>
    </div>
</template>

<script>
  import PayHeader from "./components/PayHeader"
  import PaySection from "./components/PaySection"
  import PayMoney from "./components/PayMoney"
  import PayMore from "./components/PayMore"
  import axios from "axios"
    export default {
        name: "Pay",
        components:{
          PayHeader,
          PaySection,
          PayMoney,
          PayMore
        },
      data(){
        return{
          moneyList:[],
          moreList:[]
        }
      },
      methods:{
        getPayInfo(){
          axios.get("/api/pay.json")
            .then(this.getPayInfoSucc)
        },
        getPayInfoSucc(res){
          res = res.data
          if(res.ret && res.data){
            const data = res.data
            this.moneyList = data.MoneyList
            this.moreList = data.MoreList
          }
        }
      },
      mounted(){
        this.getPayInfo()
      }
    }
</script>

<style scoped>

</style>
