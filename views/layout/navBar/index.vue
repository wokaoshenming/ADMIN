<template>
    <el-menu class="navbar"
        mode="horizontal">
        <breadcrumb class="navbar"></breadcrumb>
    </el-menu>
</template>

<script>
// import { mapGetters } from 'vuex'
import Breadcrumb from './Breadcrumb'

export default {
    data() {
        return {
            
        }
    },
    components: {
        Breadcrumb,
    },
    computed: {
        // ...mapGetters([
        //     'sidebar',
        // ])
    },
    methods: {
        }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.navbar {
  height: 50px;
  line-height: 50px;
}
</style>

