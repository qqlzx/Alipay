<template>
  <div>
    <z-d-section-one :oneList="oneList[1]" ></z-d-section-one>
    <z-d-section-two-v-for :twoList="twoList" ></z-d-section-two-v-for>
    <!--<z-d-section-two :twoList="twoList[2]"></z-d-section-two>-->
    <!--<z-d-section-two-v-for :twoList="twoList[1]"></z-d-section-two-v-for>
    <z-d-section-two-v-for :twoList="twoList[2]"></z-d-section-two-v-for>
    <z-d-section-two-v-for :twoList="twoList[3]"></z-d-section-two-v-for>
    <z-d-section-two-v-for :twoList="twoList[4]"></z-d-section-two-v-for>
    <z-d-section-two-v-for :twoList="twoList[5]"></z-d-section-two-v-for>-->
  </div>
</template>

<script>
    import ZDSectionOne from "./ZDSectionOne"
    import ZDSectionTwoVFor from "./ZDSectionTwoVFor"
    export default {
      name: "ZDSectionTwoBox",
      props: ['oneList','twoList'],
      components:{
        ZDSectionOne,
        ZDSectionTwoVFor
      }
    }
</script>

<style scoped>

</style>
