import Vue from 'vue'
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'
import {
  Avatar,
  Button,
  Icon,
  Input,
  Layout,
  List,
  message,
  Menu,
  notification,
  Popover,
  Slider,
  Table,
  Tabs,
  Drawer,
  Base
} from 'ant-design-vue'
Vue.component('VueSlider', VueSlider)
Vue.prototype.$message = message
Vue.prototype.$notification = notification

Vue.use(Base)
Vue.use(Button)
Vue.use(Avatar)
Vue.use(Drawer)
Vue.use(Icon)
Vue.use(Input)
Vue.use(Layout)
Vue.use(List)
Vue.use(Menu)
Vue.use(Popover)
Vue.use(Slider)
Vue.use(Table)
Vue.use(Tabs)
