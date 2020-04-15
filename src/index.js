import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {
  Button,
  Card,
  Input,
  Avatar,
  Icon,
  Tabs,
  Tree,
  Modal,
  Upload,
  Popover,
  Tooltip,
  Row,
  Col,
  Collapse,
  Switch,
  Select,
  Popconfirm,
  message,
  InputNumber,
  Radio,
  Dropdown,
  Menu,
  Divider,
  notification,
} from 'ant-design-vue'
Vue.component(Button.name, Button)
Vue.component(Button.Group.name, Button.Group)
Vue.component(Radio.name, Radio)
Vue.component(Radio.Button.name, Radio.Button)
Vue.component(Radio.Group.name, Radio.Group)
Vue.component(Card.name, Card)
Vue.component(Input.name, Input)
Vue.component(Input.TextArea.name, Input.TextArea)
Vue.component(Input.Search.name, Input.Search)
Vue.component(Avatar.name, Avatar)
Vue.component(Icon.name, Icon)
Vue.component(Tabs.name, Tabs)
Vue.component(Tabs.TabPane.name, Tabs.TabPane)
Vue.component(Tree.name, Tree)
Vue.component(Tree.TreeNode.name, Tree.TreeNode)
Vue.component(Modal.name, Modal)
Vue.component(Upload.name, Upload)
Vue.component(Popover.name, Popover)
Vue.component(Tooltip.name, Tooltip)
Vue.component(Row.name, Row)
Vue.component(Col.name, Col)
Vue.component(Collapse.name, Collapse)
Vue.component(Collapse.Panel.name, Collapse.Panel)
Vue.component(Switch.name, Switch)
Vue.component(Popconfirm.name, Popconfirm)
Vue.component(Select.name, Select)
Vue.component(Select.OptGroup.name, Select.OptGroup)
Vue.component(Select.Option.name, Select.Option)
Vue.component(InputNumber.name, InputNumber)
Vue.component(Dropdown.name, Dropdown)
Vue.component(Menu.name, Menu)
Vue.component(Menu.Item.name, Menu.Item)
Vue.component(Divider.name, Divider)
Vue.prototype.$message = message
Vue.prototype.$notification = notification

Vue.component(
  'AIconFont',
  Icon.createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_1566179_6y2e929njx.js',
  })
)
Vue.config.productionTip = false
new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
