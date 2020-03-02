<template>

  <!--<a-layout id="components-layout-demo-side" style="min-height: 100vh">-->

  <!--<menu_side></menu_side>-->

  <a-layout>
    <a-layout-header style="background: #fff; padding: 0;padding-left: 20px">
      {{title}}
    </a-layout-header>
    <a-layout-content style="margin: 0 16px">
      <a-alert message="Warning text" banner/>
      <h2>这是java 基础语法 的内容</h2>
    </a-layout-content>
    <a-layout-footer style="text-align: center">
      welcome to wellsimtch's castle!
    </a-layout-footer>
  </a-layout>
  <!--</a-layout>-->
</template>

<script>
  export default {
    name: "javaBaseIndex",
    data() {
      return {
        title: ''
      }
    },
    mounted() {
      this.title = JSON.parse(this.$route.query.params).title
    }
  }
</script>

<style scoped>

</style>
