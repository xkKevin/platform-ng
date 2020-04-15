<script>
import visualComponentCard from './card.vue'
const availableComponents = [
  { visualization: 'AreaChart', title: 'AreaChart', class: 'Area' },
  {
    visualization: 'BarChart',
    title: '条形图',
    icontype: 'iconBarChartbeifen',
    class: 'Bar',
  },
  {
    visualization: 'StackedBar',
    title: '堆栈条状图',
    icontype: 'iconStackedBarChartbeifen',
    class: 'Bar',
  },
  { visualization: 'HeatChart1D', title: 'HeatChart1D', class: 'Bar' },
  {
    visualization: 'HeatChart1DRadial',
    title: 'HeatChart1DRadial',
    class: 'Circle',
  },
  { visualization: 'PieChart', title: 'PieChart', class: 'Circle' },
  {
    visualization: 'PatternGlyph',
    title: 'PatternGlyph',
    icontype: 'iconpatternclyph',
    class: 'Complex',
  },
  {
    visualization: 'Aggregatedmotif',
    title: '聚合图形',
    icontype: 'iconaggregatedmotifbeifen',
    class: 'Complex',
  },
  {
    visualization: 'BoxPlot',
    title: '箱形图',
    icontype: 'iconBoxPlotCopybeifen',
    class: 'Distribution',
  },
  {
    visualization: 'HeatChartMatrix',
    title: '热图矩阵',
    icontype: 'iconMatrixCopybeifen',
    class: 'Grid',
  },
  { visualization: 'TableView', title: 'TableView', class: 'Grid' },
  { visualization: 'LineUp', title: 'LineUp', class: 'Grid' },
  {
    visualization: 'StackedBarGrouped',
    title: 'StackedBarGrouped',
    class: 'Grid',
  },
  { visualization: 'ChordDiagram', title: 'ChordDiagram', class: 'Hierarchy' },
  { visualization: 'HistogramChart', title: 'HistogramChart', class: 'Bar' },
  {
    visualization: 'HistogramRadial',
    title: 'HistogramRadial',
    class: 'Circle',
  },
  {
    visualization: 'LineChart',
    title: '折线图',
    icontype: 'iconLineChartbeifen',
    class: 'Line',
  },
  { visualization: 'GeoMap', title: 'GeoMap', class: 'Map' },
  {
    visualization: 'ForceDirectedGraph',
    title: 'ForceDirectedGraph',
    class: 'Network',
  },
  { visualization: 'GNew', title: 'GNew', class: 'Network' },
  { visualization: 'InputComponent', title: 'InputComponent', class: 'Normal' },
  {
    visualization: 'SliderComponent',
    title: '滑块',
    icontype: 'iconslider',
    class: 'Normal',
  },
  {
    visualization: 'ButtonComponent',
    title: '按钮',
    icontype: 'iconbutton',
    class: 'Normal',
  },
  {
    visualization: 'HeaderComponent',
    title: '标题',
    icontype: 'iconText',
    class: 'Normal',
  },
  { visualization: 'Divider', title: 'Divider', class: 'Normal' },
  { visualization: 'ListComponent', title: '分页列表', class: 'Normal' },
  {
    visualization: 'MultiSelectComponent',
    title: 'MultiSelectComponent',
    class: 'Normal',
  },
  {
    visualization: 'ListContainer',
    title: '列表容器',
    icontype: 'iconlist',
    class: 'Normal',
  },
  {
    visualization: 'SelectComponent',
    title: 'SelectComponent',
    class: 'Normal',
  },
  { visualization: 'Checkbox', title: 'Checkbox', class: 'Others' },
  {
    visualization: 'ParallelCoordinates',
    title: 'ParallelCoordinates',
    class: 'Others',
  },
  { visualization: 'RadioComponent', title: 'RadioComponent', class: 'Others' },
  {
    visualization: 'Scatterplot',
    title: '散点图',
    icontype: 'iconScatterplotbeifen',
    class: 'Point',
  },
]
const visComponentClasses = {
  Normal: { title: '常规组件', iconCharCode: '\ue67b' },
  Line: { title: '折线', iconCharCode: '\ue681' },
  Point: { title: '点状', iconCharCode: '\ue678' },
  Circle: { title: '饼图', iconCharCode: '\ue67a' },
  Bar: { title: '条形', iconCharCode: '\ue67d' },
  Area: { title: '面积图', iconCharCode: '\ue679' },
  Network: { title: '网络', iconCharCode: '\ue680' },
  Map: { title: '地图', iconCharCode: '\ue682' },
  Distribution: { title: 'Distribution', iconCharCode: '\ue67e' },
  Grid: { title: '网格', iconCharCode: '\ue67f' },
  Hierarchy: { title: '层次', iconCharCode: '\ue658' },
  Complex: { title: '复杂', iconCharCode: '\ue67c' },
}
export default {
  name: 'ComponentSelector',
  components: {
    visualComponentCard,
  },
  props: {},
  data() {
    return {
      currentClass: 'Normal',
      visComponentClasses,
      search: '',
    }
  },
  computed: {
    visualComponents() {
      return availableComponents.filter((vc) => {
        if (this.search) {
          return (
            vc.visualization
              .toLowerCase()
              .indexOf(this.search.toLowerCase()) !== -1
          )
        } else return !this.currentClass || vc.class === this.currentClass
      })
    },
  },
  methods: {
    handleComponentSelectDrag(visualization) {
      window.visualization = visualization
      return visualization
    },
    handleDragEnd() {
      window.visualization = ''
    },
    handleClassChange(key) {
      this.currentClass = key
    },
  },
}
</script>

<template>
  <div class="component-selector">
    <div class="section-header">
      <span class="title" style="padding-left: 16px;">
        组件列表
      </span>
    </div>
    <div class="section-content">
      <div class="component-classifier">
        <div class="classes-bar">
          <div class="class-tabs">
            <div
              v-for="(item, index) in visComponentClasses"
              :key="index"
              class="class-tab class-btn"
              :active="index === currentClass"
              @click="handleClassChange(index)"
            >
              <i
                class="iconfont"
                :title="item.title"
                v-html="item.iconCharCode"
              />
            </div>
          </div>
        </div>
        <div class="classes-content">
          <div
            style="
              width: 100%;
              height: 40px;
              border-bottom: 1px solid #00000020;
            "
          >
            <a-input
              slot="content"
              v-model="search"
              allow-clear
              style="margin: 4px; width: calc(100% - 10px); height: 32px;"
              placeholder="filter"
              size="small"
            >
              <a-icon slot="prefix" type="search" />
            </a-input>
          </div>
          <div class="classes-cards">
            <a-row :gutter="8">
              <a-col
                v-for="cp in visualComponents"
                :key="cp.visualization"
                :span="6"
                style="min-width: 189px; text-align: left; margin-bottom: 4px;"
              >
                <a-card
                  size="small"
                  style="width: 100%;"
                  draggable
                  @dragstart="handleComponentSelectDrag(cp.visualization)"
                >
                  <span slot="title" style="font-weight: 600;">
                    <a-icon-font
                      class="component-btn"
                      :type="cp.icontype || 'iconchanggui'"
                      style="zoom: 40%;"
                    />
                    {{ cp.visualization.replace('Component', '') }}
                  </span>
                  <visual-component-card
                    style="zoom: 50%; height: 120px;"
                    :visualization="cp.visualization"
                  />
                </a-card>
              </a-col>
            </a-row>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less">
.component-selector {
  user-select: none;
  position: absolute;
  width: 100%;
  height: 100%;
  .component-classifier {
    width: 100%;
    height: 100%;
    display: flex;
    .classes-bar {
      box-sizing: border-box;
      height: 100%;
      width: 42px;
      border-right: 1px solid @border-color-base;
      display: flex;
      flex-direction: column;
      user-select: none;
      .class-btn {
        box-sizing: border-box;
        width: 41px;
        height: 40px;
        cursor: pointer;
        flex: 0 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        &:hover {
          color: fade(@primary-color, 50%);
        }
      }
      .class-tabs {
        flex: 1;
        overflow: auto;
        &::-webkit-scrollbar {
          width: 0px;
        }
        .class-tab[active] {
          color: fade(@primary-color, 100%);
        }
      }
    }
    .classes-content {
      width: calc(~'100% - 42px');
      height: 100%;
      .classes-cards {
        box-sizing: border-box;
        width: 100%;
        height: calc(~'100% - 42px');
        padding: 4px;
        overflow: auto;
        &::-webkit-scrollbar {
          width: 0px;
        }

        .component-btn {
          cursor: pointer;
          width: 34px;
          height: 34px;
          font-size: 32px;
          margin: 0.5rem;
          background: fade(@primary-color, 5%);
          border-radius: 2px;
          border: 1px solid fade(@primary-color, 15%);

          &:hover {
            border: 1px solid fade(@primary-color, 50%);
          }
          &.component-btn-active {
            border: 1px solid @primary-color;
          }
        }
      }
    }
  }
}
</style>
