<template>
  <div>
      <el-button @click="getRouter">获取路由</el-button>
  </div>
</template>

<script>
export default {
  methods:{
    getRouter(){
      let R1=this.$route //获取当前路由
      let R2=this.$router.options.routes //获取项目路由表
      console.log(R2)
    }
  }
}
</script>

<style scoped>
div{
    color:aquamarine;
    text-align: center;
}    
</style>