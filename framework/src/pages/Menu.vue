<template>
  <div>
    <template v-if='item.type==="nav"'>
      <el-submenu v-for="item in menuData" :index="item.index" :key="item.index">
        <template slot="title">
          <i :class="item.icon"></i>
          <span>{{item.name}}</span>
        </template>
        <!-- 调用自己 -->
        <left-menu :menuData="item.children"></left-menu>
      </el-submenu>
    </template>
     <el-menu-item v-else :index="item.url" :key="item.index">
      <i></i>
      <span slot="title">{{item.name}}</span>
    </el-menu-item>
  </div>
</template>
<script>
export default {
  name: "leftMenu",
  props: {
    menuData: {
      default: function() {
        return [];
      }
    }
  },
  data() {
    return {};
  }
};
</script>
<style scoped>
</style>
