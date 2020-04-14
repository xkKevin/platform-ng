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
  <div id="#app">
    {{ msg }}
  </div>
</template>

<style lang="less">
div {
  text-align: center;
}
</style>
