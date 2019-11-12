import Vue from 'vue'
import VueSlider from 'vue-slider-component'
import {
  Avatar,
  Button,
  Col,
  Icon,
  Input,
  InputNumber,
  Layout,
  List,
  message,
  Menu,
  notification,
  Pagination,
  Popover,
  Rate,
  Slider,
  Table,
  Tabs,
  // Mention,
  // version,
  Drawer,
  Comment,
  Base
} from 'ant-design-vue'
Vue.component('VueSlider', VueSlider)
Vue.prototype.$message = message
Vue.prototype.$notification = notification

/* v1.1.3+ registration methods */
Vue.use(Base)
Vue.use(Button)
Vue.use(Avatar)
Vue.use(Col)
Vue.use(Drawer)
Vue.use(Icon)
Vue.use(Input)
Vue.use(InputNumber)
Vue.use(Layout)
Vue.use(List)
Vue.use(Menu)
Vue.use(Pagination)
Vue.use(Popover)
Vue.use(Rate)
Vue.use(Slider)
Vue.use(Table)
Vue.use(Tabs)
Vue.use(Comment)
