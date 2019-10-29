<template>
  <header>
    <el-row>
      <el-col :span="4">
        {{flag}}
      </el-col>
      <el-col :span="20">
        <div class="header-menu">
          <div>
            <el-dropdown trigger="click">
              <span class="el-dropdown-link">
                {{loginName}}<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item> <span @click="loginOut">安全退出</span></el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
      </el-col>
    </el-row>
  </header>
</template>
<script>

export default {
  data() {
    return {
       loginName:'username',
       flag:'欢迎到某后台管理系统'
    }
  },
  methods: {
    loginOut() {
      console.log('退出接口')
    }
  }
}

</script>
<style scoped lang="scss">
header {
  width: 100%;
  height: 60px;
  line-height: 60px;
  background: #2873ff;
  box-shadow: 0 5px 16px 0 rgba(220, 56, 26, .04);
  padding: 0 25px;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2000;
  box-sizing: border-box;



  .header-menu {
    text-align: right;

    >div {
      display: inline-block;
      color: #fff;
      font-size: 14px;

      /deep/ .el-dropdown-link {
        color: #fff;
        cursor: pointer;

      }

      /deep/ .el-button {
        color: #fff;

      }
    }

    >div+div {
      margin-left: 24px;
    }
  }
}
</style>
