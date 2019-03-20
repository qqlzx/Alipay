<template>
  <div>
    <z-d-section-one :oneList="oneList[0]" ></z-d-section-one>
    <z-d-section-two :twoList="twoList[0]"></z-d-section-two>
  </div>
</template>

<script>
import ZDSectionOne from "./ZDSectionOne"
import ZDSectionTwo from "./ZDSectionTwo"
export default {
  name: "ZDSectionBox",
  props: ['oneList','twoList'],
  components:{
    ZDSectionOne,
    ZDSectionTwo
  }
}
</script>

<style scoped>

</style>
