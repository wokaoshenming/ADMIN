<template>
  <!-- <div class="main"></div> -->
  <div class="main">
    <el-row>
      <el-col>
        <el-menu
          default-active="$route.path"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          text-color="#fff"
          active-text-color="#ffd04b"
          unique-opened
          :collapse=false
          background-color="#304156"
          v-for="(item,index) in routes"
          :key="index"
        >
          <el-submenu :index="item.path">
            <template 
              slot="title">
              <i class="el-icon-user"></i>
              <span>{{item.name}}</span>
            </template>
            <el-menu-item-group
              v-show="item.children.length > 0"
              v-for="(child_path,i) in item.children"
              :key="i">
              <router-link :to="item.path+'/'+child_path.path">
                <el-menu-item 
                  :index="child_path.path">{{child_path.name}}</el-menu-item>
              </router-link>
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
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    },
    getRouter(){
      this.routes = this.$router.options.routes
    },
  },
  created(){
    this.getRouter()
  }
}
</script>

<style lang="scss" scoped>
.main{
  background: #304156;
  width:100%;
  box-sizing: border-box;
}
*{
  border:none;
}
a {
    text-decoration: none;
}
.router-link-active {
  text-decoration: none;
}
.router-link{
    text-decoration: none;
}
</style>