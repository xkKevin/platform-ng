<script>
export default {
  data() {
    return {
      msg: 'hello world',
    }
  },
  methods: {
    test() {
      // const a = 12
      // if (true) {
      //   this.msg = '123'
      // }
      // this.test2()
      let a = new Array(1, 2, 3)
      console.log(a)
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

<style>
div {
  text-align: center;
}
</style>
