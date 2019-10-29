<template>
  <div>
    <el-tabs v-model="activeName">
      <el-tab-pane label="淡入淡出效果" name="first">
        <el-row>
          <el-col :span='4'>
            <div class="show-div">
              <el-button @click='fadeShow'>演示</el-button>
            </div>
            <FadeAnimation>
              <p v-if="show">hello</p>
            </FadeAnimation>
          </el-col>
          <el-col :span='4'>
            <div class="show-div">
              <el-button @click='fadeShow'>演示</el-button>
            </div>
            <slideFade>
              <p v-if="show">hello</p>
            </slideFade>
          </el-col>
        </el-row>
      </el-tab-pane>
    </el-tabs>
    <el-tabs v-model="activeName">
      <el-tab-pane label="接口测试" name="first">
        <el-row>
          <el-col :span='24'>
            <div>
              <el-button @click='testGet'>请求get</el-button @click='testPost'>
              <el-button>请求post</el-button>
              <el-button @click='testPostJson'>请求postJson</el-button>
            </div>
          </el-col>
        </el-row>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import testApi from '@/api/test'
export default {
  name: 'default',
  data() {
    return {
      activeName: 'first',
      show: true
    }
  },
  methods: {
    fadeShow() {
      this.show = !this.show
    },
    testGet() {
      testApi.testGet({

      }).then(() => {

      })
    },
    testPost() {
      testApi.testPost({

      }).then(() => {

      })
    },
    testPostJson() {
      testApi.testPostJson({

      }).then(() => {

      })
    }
  }
}

</script>
<style scoped lang="scss">
</style>
