<script>
import Vue from 'vue'
import * as comLib from 'zjlab-vis'
import defaultEncoding from '@/assets/defaultEncoding.json'

export default {
  name: 'VisualComponentCard',
  props: {
    visualization: {
      type: String,
      default: '',
    },
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
    visualization() {
      this.renderComponent()
    },
  },
  async mounted() {
    await this.renderComponent()
  },

  methods: {
    async renderComponent() {
      const getConstructor = (name) => Vue.extend(comLib[name])
      // const api = comLib[this.component.visualization].api
      const component_name = this.visualization
      const defaultPropsData = defaultEncoding[component_name]
      // let propsData = {}
      if (
        component_name === 'List' &&
        typeof defaultPropsData.encoding.component === 'string'
      ) {
        defaultPropsData.encoding.component = getConstructor(
          defaultPropsData.encoding.component
        )
      }
      this.defaultPropsData = defaultPropsData
      const tempCom = new (getConstructor(component_name))({
        propsData: defaultPropsData,
      })
      this.tempCom = tempCom
      tempCom.$mount(`#template${this.visualization}`)
    },
  },
}
</script>
<template>
  <div class="visual-component-card">
    <div :id="'template' + visualization" class="visual-component-card-content">
      {{ visualization }}
    </div>
    <div class="visual-component-card-mask" />
  </div>
</template>
<style scope lang="less">
.visual-component-card {
  display: flex;
  width: 330px;
  height: 210px;
  justify-content: center;
  align-items: center;
  overflow: auto;
  .visual-component-card-content {
    width: 320px;
    height: 250px;
    text-align: center;
    overflow: auto;
    &::-webkit-scrollbar {
      width: 0px;
      height: 0px;
    }
  }
  .visual-component-card-mask {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }
}
</style>
