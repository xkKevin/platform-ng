<script>
import Vue from 'vue'
import * as comLib from 'zjlab-vis'
import defaultEncoding from '@/assets/defaultEncoding.json'
export default Vue.extend({
  name: 'ComponentNode',
  props: {
    component: { type: Object, default: undefined },
    getDataByDataName: { type: Function, default: () => function () {} },
    mode: { type: Number, default: 0 },
  },
  data() {
    return {
      tempCom: undefined,
      tempProps: {
        data: undefined,
        selection: undefined,
        encoding: undefined,
      },
      defaultPropsData: undefined,
      flag: false,
    }
  },
  watch: {
    async 'component.data'() {
      setTimeout(async () => {
        this.tempCom.data =
          this.component.data !== ''
            ? await this.getDataByDataName(this.component.data)
            : defaultEncoding[this.component.visualization].data
      }, 0)
    },
  },
  mounted() {
    this.renderComponent()
  },
  errorCaptured() {
    // console.log(`rener error: ${err.toString()} \ninfo: ${info}`, vm)
    this.tempCom['data'] = this.defaultPropsData.data
    this.tempCom['selection'] = this.defaultPropsData.selection
    this.tempCom['encoding'] = this.defaultPropsData.encoding
    this.$message.error('组件参数出错！显示默认样式！')
  },
  methods: {
    handleComponentClick() {
      this.$message.info('uninteractable')
    },
    async renderComponent() {
      const getConstructor = (name) => Vue.extend(comLib[name])
      const getAPI = (name) => comLib[name].api
      if (!this.component.id) return
      const component_name = this.component.visualization
      let defaultPropsData = defaultEncoding[component_name]

      const api = getAPI(component_name)
      defaultPropsData = this.getDefaultFromApi(api.encoding, defaultPropsData)
      this.defaultPropsData = defaultPropsData
      if (Object.keys(this.component.encoding).length > 0) {
        const propsData = {
          data:
            this.component.data !== ''
              ? await this.getDataByDataName(this.component.data)
              : defaultEncoding[component_name].data,
          selection: this.component.selection,
          encoding: this.component.encoding,
        }
        try {
          const tempCom = new (getConstructor(component_name))({ propsData })
          this.tempCom = tempCom
          tempCom.$mount(`#${this.component.id}`)
          return
        } catch (e) {
          this.$message.error('组件参数出错！显示默认样式！')
        }
      }
      const tempCom = new (getConstructor(component_name))({
        propsData: defaultPropsData,
      })
      this.tempCom = tempCom
      tempCom.$mount(`#${this.component.id}`)
    },
    getDefaultFromApi(encoding, defaultEncoding) {
      const initEncoding = { data: defaultEncoding.data, encoding: {} }
      for (const key in encoding) {
        if (encoding[key].default)
          initEncoding.encoding[key] = encoding[key].default
        else if (encoding[key].required) {
          initEncoding.encoding[key] = defaultEncoding.encoding[key]
        }
      }
      return initEncoding
    },
  },
})
</script>
<template>
  <div class="component-node" @click.self="handleComponentClick">
    <div :id="component.id" />
    <div v-if="mode !== 1" class="component-node-cover" />
  </div>
</template>
<style lang="less">
.component-node {
  width: 100%;
  height: 100%;
  overflow: auto;
  position: relative;
  .component-node-cover {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: transparent;
  }
}
</style>
