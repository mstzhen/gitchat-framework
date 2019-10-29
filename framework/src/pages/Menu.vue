<template>
  <div>
    <template v-for="item in menuData">
      <el-submenu v-if='item.type==="nav"' :index="item.index" :key="item.index">
        <template slot="title">
          <i :class="item.icon"></i>
          <span>{{item.name}}</span>
        </template>
        <!-- 调用自己 -->
        <left-menu :menuData="item.children"></left-menu>
      </el-submenu>
      <el-menu-item v-else :index="item.url" :key="item.index">
        <i></i>
        <span slot="title">{{item.name}}</span>
      </el-menu-item>
    </template>
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
