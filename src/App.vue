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
@font-face {
  font-family: 'iconfont'; /* project id 1566179 */
  src: url('//at.alicdn.com/t/font_1566179_6y2e929njx.eot');
  src: url('//at.alicdn.com/t/font_1566179_6y2e929njx.eot?#iefix')
      format('embedded-opentype'),
    url('//at.alicdn.com/t/font_1566179_6y2e929njx.woff2') format('woff2'),
    url('//at.alicdn.com/t/font_1566179_6y2e929njx.woff') format('woff'),
    url('//at.alicdn.com/t/font_1566179_6y2e929njx.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_1566179_6y2e929njx.svg#iconfont') format('svg');
}

.iconfont {
  font-family: 'iconfont' !important;
  font-size: inherit;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
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
