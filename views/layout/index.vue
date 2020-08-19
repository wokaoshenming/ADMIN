<template>
  <div class="main">
      <el-row>
          <el-col>
            <czHeader class="czHeader"></czHeader>
          </el-col>
      </el-row>
      <el-row>
          <el-col :span="3">
            <sideBar class="sideBar"></sideBar>
          </el-col>
          <el-col :span="21">
            <czMain></czMain>
          </el-col>
      </el-row>
  </div>
</template>

<script>
import { czHeader,sideBar,czMain } from './index.js'
export default {
    components:{
        czHeader,
        sideBar,
        czMain
    }
}
</script>

<style scoped>
/* .main{
    min-width: 1024px;
} */
.czHeader{
  height:5vh;
  background:darkcyan;
}
.sideBar{
  height:95vh;
}
</style>