<script>
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
      return this.showLeft ? 'width:232px;' : ''
    },
    widthRight() {
      return this.showRight ? 'width:280px;' : ''
    },
  },
}

export default {
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
    <header class="playground_header" />
    <div class="workspace">
      <div class="workspace-left" :style="widthLeft">
        <div class="section-header">
          组件列表
        </div>
      </div>
      <div class="workspace-middle" :style="middleMargin">
        <div class="section-header">
          布局
        </div>
      </div>
      <div class="workspace-right" :style="widthRight">
        <a-tabs
          v-model="inspectorTab"
          style="height: 45px; text-align: center;"
        >
          <a-tab-pane key="data" tab="数据">
            <div class="inspector_content"></div>
          </a-tab-pane>
          <a-tab-pane key="configurator" tab="配置">
            <div class="inspector_content" />
          </a-tab-pane>
          <a-tab-pane key="interactions" tab="交互">
            <div class="inspector_content" />
          </a-tab-pane>
        </a-tabs>
      </div>
    </div>
  </div>
</template>

<style lang="less">
#playground {
  @workspace-backgroud: #f2f4f7;
  @border-color: #e2e6ed;
  width: 100vw;
  height: 100vh;
  .playground_header {
    height: 60px;
    background: rgba(85, 97, 255, 1);
  }
  .workspace {
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
    }

    .workspace-middle {
      height: 100%;
    }

    .workspace-right {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      box-sizing: border-box;
      border-left: 1px solid @border-color;
    }

    .section-header {
      width: 100%;
      height: 44px;
      border-bottom: 1px solid @border-color;
    }

    .inspector_content {
      width: 100%;
      height: calc(~'100vh - 105px');
    }
    .ant-tabs-bar {
      margin: 0;
    }
  }
}
</style>
