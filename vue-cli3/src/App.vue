<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created(){
    console.log(process.env.NODE_ENV,'process.env.NODE_ENV')
  }
}
</script>

<style scoped>
</style>
