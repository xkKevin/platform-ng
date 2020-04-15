<script>
import layoutCanvas from '@/components/layout-canvas/index.vue'
import visualComponentSelector from '@/components/visual-component/selector.vue'
/**
 * mixin for panel control of vis-analysis page
 * @data showLeft/showRight
 * the visibility of left&right panel
 * @computed
 * the computed style for left/middle/right
 */
const collapseMixin = {
  data() {
    return { showLeft: true, showRight: true }
  },
  methods: {
    leftToggle() {
      this.showLeft = !this.showLeft
    },
    rightToggle() {
      this.showRight = !this.showRight
    },
  },
  computed: {
    middleMargin() {
      return (this.showLeft ? 'margin-left: 232px;' : '').concat(
        this.showRight ? 'margin-right: 280px;' : ''
      )
    },
    widthLeft() {
      return this.showLeft ? 'width:232px;' : 'display:none'
    },
    widthRight() {
      return this.showRight ? 'width:280px;' : 'display:none'
    },
  },
}

export default {
  components: {
    layoutCanvas,
    visualComponentSelector,
  },
  mixins: [collapseMixin],
  data() {
    return {
      inspectorTab: 'data',
    }
  },
}
</script>

<template>
  <div id="playground">
    <header class="playground-header">
      <router-link to="/">
        <span style="color: white; line-height: 14px;">
          <a-icon type="left" />返回
        </span>
      </router-link>
    </header>
    <div class="workspace">
      <div class="workspace-left" :style="widthLeft">
        <visual-component-selector />
      </div>
      <div class="workspace-middle" :style="middleMargin">
        <layout-canvas>
          <span slot="actions">
            <a-icon type="arrows-alt" />
          </span>
        </layout-canvas>
      </div>
      <div class="workspace-right" :style="widthRight">
        <div style="width: 100%; height: 45px;">
          <a-tabs>
            <a-tab-pane key="data" tab="数据">
              <div class="section-content"></div>
            </a-tab-pane>
            <a-tab-pane key="configurator" tab="配置">
              <div class="section-content" />
            </a-tab-pane>
            <a-tab-pane key="interactions" tab="交互">
              <div class="section-content" />
            </a-tab-pane>
          </a-tabs>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less">
#playground {
  @border-color: #e2e6ed;
  width: 100vw;
  height: 100vh;
  .playground-header {
    height: 60px;
    background: rgba(85, 97, 255, 1);
    display: flex;
    align-items: center;
    padding: 0 16px;
    color: white;
  }

  // !!! WARNING !!!
  // .workspace is the basic workspace layout style
  // Add custom block style as siblings
  .workspace {
    background-color: @section-background-color;

    position: relative;
    width: 100%;
    height: calc(~'100% - 60px');
    overflow: hidden;
    .workspace-left {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      box-sizing: border-box;
      border-right: 1px solid @border-color;
      overflow: hidden;
    }

    .workspace-middle {
      height: 100%;
      background-color: @playground-background-color;
    }

    .workspace-right {
      overflow: hidden;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      box-sizing: border-box;
      border-left: 1px solid @border-color;
    }

    .section-header {
      user-select: none;
      width: 100%;
      height: 44px;
      border-bottom: 1px solid @border-color;
      display: flex;
      overflow: hidden;
      align-items: center;

      .title {
        text-align: left;
        flex: 1;
      }
      .actions {
        text-align: right;
        flex: 0 0 max-content;
      }
    }
    .section-content {
      width: 100%;
      height: calc(~'100vh - 105px');
      position: relative;
    }
    .ant-tabs-bar {
      margin: 0;
      text-align: center;
      user-select: none;
    }
  }
}
</style>
