<script>
export default {
  data() {
    return {
      msg: 'hello world',
    }
  },
  methods: {
    test() {
      // const a = new Number(3)
      // const b = new Object()
      // console.log(a, b)
    },
    // test2(a, b, c) {},
  },
}
</script>

<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
body {
  margin: 0;
  font-family: 'PingFang SC', -apple-system, BlinkMacSystemFont,
    'Noto Sans CJK SC', Roboto, 'Helvetica Neue', 'Avenir', Helvetica, Arial,
    'Hiragino Sans GB', 'Microsoft YaHei', 'Microsoft Jhenghei', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 14px;
}
</style>
