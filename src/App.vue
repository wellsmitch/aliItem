<template>
  <div id="app">
    <a-layout id="components-layout-demo-side" style="height: 100vh">
      <menu_side v-if="this.menuShow"></menu_side>
    <router-view />
    </a-layout>
  </div>
</template>

<script>
  // import "ant-design-vue/dist/antd.css";
export default {
  name: 'App',
}
</script>

<style>
#app {
 width: 100vw;
 height: 100vh;
}
</style>
