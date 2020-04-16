<script>
import layoutCanvasContainer from './container.vue'
export default {
  name: 'LayoutCanvas',
  components: {
    layoutCanvasContainer,
  },
  data() {
    return {
      showGridLines: false,
      layout: {
        width: '1000px',
        height: '800px',
        rows: ['300px', '1fr', '1fr'],
        columns: ['300px', '1fr', '1fr'],
        containers: [
          { name: 'container1', grids: [1, 1] },
          { name: 'container2', grids: [1, 2] },
          { name: 'container3', grids: [2, 1] },
          { name: 'container4', grids: [2, 2] },
          { name: 'container5', grids: [3, 2] },
          { name: 'container6', grids: [3, 3] },
        ],
      },
    }
  },
  computed: {
    columnStr() {
      return this.layout.columns.join(' ')
    },
    rowStr() {
      return this.layout.rows.join(' ')
    },
    layoutCanvasStyle() {
      return `width:${this.layout.width};height:${this.layout.height};grid-template-columns:${this.columnStr};grid-template-rows:${this.rowStr}`
    },
  },
  methods: {
    handleGridTemplateChange(target, str) {
      try {
        const newV = str.split(' ')
        // a validator
        newV.forEach((v) => {
          if (!v.endsWith('px') && !v.endsWith('fr') && !v.endsWith('%'))
            throw Error(`{${v}} is invalid as '{Num}px|fr|%'`)
        })
        this.layout[target] = newV
      } catch (e) {
        this.$notification.error({
          message: 'Invalid Input',
          description: e.message,
        })
      }
    },
  },
}
</script>

<template>
  <div class="layout-manager">
    <div class="section-header">
      <span class="title layout-canvas-title">
        <a-popover placement="bottomLeft" overlay-class-name="trim-popover">
          <div slot="content" style="width: 300px; height: max-content;">
            <a-divider orientation="left">预设</a-divider>
            <span class="layout-preset-btn hoverable">
              <div style="display: inline-block; width: 50px; height: 50px;" />
              双飞翼
            </span>
            <span class="layout-preset-btn hoverable">
              <div style="display: inline-block; width: 50px; height: 50px;" />
              侧栏
            </span>
            <span class="layout-preset-btn hoverable">
              <div style="display: inline-block; width: 50px; height: 50px;" />
              宽屏
            </span>
            <a-divider />
            <div>
              宽度:&nbsp;
              <input v-model="layout.width" style="font-family: Consolas;" />
            </div>
            <div>
              高度:&nbsp;
              <input v-model="layout.height" style="font-family: Consolas;" />
            </div>
            <div>
              行宽:&nbsp;
              <input
                :value="rowStr"
                style="font-family: Consolas;"
                @change="handleGridTemplateChange('rows', $event.target.value)"
              />
            </div>
            <div>
              列高:&nbsp;
              <input
                :value="columnStr"
                style="font-family: Consolas;"
                @change="
                  handleGridTemplateChange('columns', $event.target.value)
                "
              />
            </div>
            <a-divider />
            <grid-generator />
          </div>
          <a-button type="link" icon="menu">布局</a-button>
        </a-popover>
        <a-button
          type="link"
          icon="border-outer"
          @click="showGridLines = !showGridLines"
        >
          {{ showGridLines ? '隐藏框线' : '显示框线' }}
        </a-button>
      </span>
      <span class="actions">
        <slot name="actions" />
      </span>
    </div>
    <div class="section-content">
      <div class="layout-canvas-wrapper">
        <div class="layout-canvas-padding">
          <div id="layout-canvas" :style="layoutCanvasStyle">
            <template v-if="showGridLines">
              <template v-for="m in layout.columns.length">
                <div
                  v-for="n in layout.rows.length"
                  :key="`${m}${n}`"
                  class="grid-lines"
                  :style="`grid-area:${m}/${n};`"
                />
              </template>
            </template>
            <layout-canvas-container
              v-for="container in layout.containers"
              :key="container.name"
              :name="container.name"
              :grids="container.grids"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less">
.layout-manager {
  width: 100%;
  height: 100%;
  overflow: hidden;
  .section-header {
    background-color: @section-background-color;
  }

  .layout-canvas-wrapper {
    width: 100%;
    height: 100%;
    overflow: auto;
    .layout-canvas-padding {
      width: max-content;
      height: max-content;
      #layout-canvas {
        margin: 12px;
        display: grid;
        padding: 4px;
        background-color: white;
        border-radius: 4px;
      }
    }
  }
  .actions {
    margin-right: 16px;
  }

  .grid-lines {
    margin-top: -1px;
    margin-left: -1px;
    border: 1px dotted #00000040;
  }
}
.trim-popover.ant-popover {
  padding: 4px;
  .ant-popover-arrow {
    display: none;
  }
  .layout-preset-btn {
    min-width: 64px;
    min-height: 100px;
    display: inline-flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    align-items: center;
  }
}

.vue-grid-item {
  border: 1px solid;
}

.hoverable {
  user-select: none;
  cursor: pointer;

  &:hover {
    background-color: #00000020;
  }
}
</style>
