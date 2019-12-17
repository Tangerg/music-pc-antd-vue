import Vue from 'vue'
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'
import VueLazyload from 'vue-lazyload'
import Storage from 'vue-ls'
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
  Base,
  Modal,
  Col,
  Row
} from 'ant-design-vue'
Vue.component('VueSlider', VueSlider)
Vue.prototype.$message = message
Vue.prototype.$notification = notification
Vue.prototype.$info = Modal.info
Vue.prototype.$success = Modal.success
Vue.prototype.$error = Modal.error
Vue.prototype.$warning = Modal.warning
Vue.prototype.$confirm = Modal.confirm
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
Vue.use(Modal)
Vue.use(Col)
Vue.use(Row)
Vue.use(VueLazyload, {
  loading: require('./assets/cd-img.png')
})
const options = {
  namespace: 'music__', // key prefix
  name: 'ls', // name variable Vue.[ls] or this.[$ls],
  storage: 'local' // storage name session, local, memory
}
Vue.use(Storage, options)
