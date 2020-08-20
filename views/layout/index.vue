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
            <navBar class="navBar"></navBar>
            <czMain class="theMain"></czMain>
          </el-col>
      </el-row>
  </div>
</template>

<script>
import { czHeader,sideBar,czMain,navBar } from './index.js'
export default {
    components:{
        czHeader,
        sideBar,
        navBar,
        czMain
    }
}
</script>

<style lang="scss" scoped>
.czHeader{
  height:5vh;
  background:darkcyan;
  box-sizing: border-box;
}
.sideBar{
  box-sizing: border-box;
  height:95vh;
}
.navBar{
  height:5.5vh;
}
.theMain{
  height:88vh;
  overflow-y: scroll;
}
  ::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}
</style>