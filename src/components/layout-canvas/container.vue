<script>
// this component is for container rendor &

export default {
  name: 'LayoutCanvasContainer',
  props: {
    name: {
      type: String,
      default: '',
    },
    grids: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      computedComponent: undefined,
      dragOver: false,
    }
  },
  computed: {
    gridAreaStyle() {
      return `grid-area: ${this.grids.join('/')}`
    },
  },
  methods: {
    handleDragEnter(e) {
      e.preventDefault()
      if (this.component) return
      this.dragOver = true
    },
    handleDragLeave(e) {
      e.preventDefault()
      this.dragOver = false
    },
    handleDrop(e) {
      this.dragOver = false
      e.preventDefault()
      e.stopPropagation()
      const newVisualization = window.visualization || ''
      try {
        this.$message.info(`创建组件操作，新版待实现 ${newVisualization}`)
      } catch (e) {
        this.$message.error('Invalid Visualization')
      }
      setTimeout(() => (window.visualization = ''))
    },
  },
}
</script>

<template>
  <div
    class="layout-canvas-container"
    :style="gridAreaStyle"
    @dragover.prevent="() => true"
    @dragenter.stop="handleDragEnter"
    @dragleave.stop="handleDragLeave"
    @drop.stop="handleDrop"
  >
    <div v-if="computedComponent && computedComponent.visualization"></div>
    <span v-else>容器{{ name }},可添加组件</span>
    <!-- <div class="resize-handle" draggable=""></div> -->
  </div>
</template>

<style lang="less">
.layout-canvas-container {
  user-select: none;
  margin: 4px;
  border: 1px solid fade(@primary-color, 20%);
  border-radius: 4px;
  position: relative;
  .resize-handle {
    position: absolute;
    width: 5px;
    height: 5px;
    bottom: 0;
    right: 0;
    margin: 0 3px 3px 0;
    border-bottom: 2px solid gray;
    border-right: 2px solid gray;

    box-sizing: border-box;
    cursor: se-resize;
  }
}
</style>
