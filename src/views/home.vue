<script>
export default {}
</script>

<template>
  <div class="homepage">
    <nav class="page-nav"></nav>
    <div class="page-content">
      <span>home</span>
      <router-link to="/model-analysis">
        模型分析
      </router-link>
      <router-link to="/vis-analysis">
        可视分析
      </router-link>
    </div>
  </div>
</template>

<style lang="less">
.homepage {
  width: 100vw;
  height: 100vh;
  display: flex;
  .page-nav {
    flex: 0 0 64px;
    background-color: @primary-color;
  }
  .page-content {
    flex: 1;
  }
}
</style>
