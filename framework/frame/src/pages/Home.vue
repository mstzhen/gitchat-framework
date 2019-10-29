<template>
  <div class="home">
    <Header />
    <div class="article">
      <aside>
        <el-row>
          <el-col :span="24">
            <el-menu router>
              <Menu :menuData='menuConfig'></Menu>
            </el-menu>
          </el-col>
        </el-row>
      </aside>
      <section>
        <div>
          <router-view />
        </div>
      </section>
    </div>
  </div>
</template>
<script>
import Header from './Header'
import Menu from './Menu'
import menuConfig from '@/config/menu'
export default {
  name: 'home',
  components: {
    Header,
    Menu
  },
  data() {
    return {
      menuConfig: menuConfig, // 导航配置或路由配置
    }
  },
  created() {}
}

</script>
<style scoped lang="scss">
.home {
  height: 100%;
}

.article {
  height: 100%;
  margin-top: 60px;

  aside {
    width: 204px;
    transition: width .4s;
    -webkit-transition: width .4s;
    background: #fff;
    box-shadow: 2px 0 10px 0 rgba(29, 42, 67, .04);
    position: fixed;
    top: 60px;
    bottom: 0;
    left: 0;
    z-index: 2000;
    overflow-y: scroll;

    /deep/ .el-row {
      height: 100%;

      .el-col-24 {
        height: 100%;

        .el-menu {
          height: 100%;
        }
      }
    }
  }

  section {
    margin-left: 204px;
    min-width: 1048px;
    padding: 24px;
  }
}

</style>
