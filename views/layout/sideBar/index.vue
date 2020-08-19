<template>
  <div class="main">
    <el-row>
      <el-col>
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          v-for="(item,index) in routes"
          :key="index"
        >
          <el-submenu :index="index">
            <template 
              slot="title">
              <i class="el-icon-location"></i>
              <span>{{item.name}}</span>
            </template>
            <el-menu-item-group
              v-show="item.children.length > 0"
              v-for="(child_path,i) in item.children"
              :key="i">
              <el-menu-item index="1-1">{{child_path.name}}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data(){
    return{
      routes:[]
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    getRouter(){
      this.routes = this.$router.options.routes
    }
  },
  created(){
    this.getRouter()
    console.log(this.routes)
  }
}
</script>

<style lang="scss" scoped>
.main{
  background: #333333;
}
</style>