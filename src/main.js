import Vue from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';
import router from './router'
import store from './store'
import './assets/index.less';
import 'ant-design-vue/dist/antd.css';

Vue.use(Antd)
//ant-design-vue按需加载
import { Button,spin, Calendar,Card,LocaleProvider,Layout,Radio,Checkbox,DatePicker,Dropdown,Form,FormModel,Icon,Input,InputNumber,Tree,message,Popconfirm,Menu,Modal,notification,Pagination,Select,Table,TreeSelect,Upload,Col,Row} from 'ant-design-vue';
Vue.use(Button);
Vue.use(Calendar);
// Vue.use(spin);
Vue.use(Card);
Vue.use(Checkbox);
Vue.use(DatePicker);
Vue.use(Dropdown);
Vue.use(Form);
Vue.use(FormModel);
Vue.use(Icon);
Vue.use(Input);
Vue.use(InputNumber);
Vue.use(message);
Vue.use(Menu);
Vue.use(Modal);
Vue.use(notification);
Vue.use(Pagination);
Vue.use(Select);
Vue.use(Table);
Vue.use(TreeSelect);
Vue.use(Tree);
Vue.use(Upload);
Vue.use(Col);
Vue.use(Row);
Vue.use(Radio);
Vue.use(Layout);
Vue.use(Popconfirm)
Vue.use(LocaleProvider)
Vue.prototype.$message = message;
Vue.prototype.$notification = notification;
Vue.prototype.$info = Modal.info;
Vue.prototype.$success = Modal.success;
Vue.prototype.$error = Modal.error;
Vue.prototype.$warning = Modal.warning;
Vue.prototype.$confirm = Modal.confirm;
Vue.prototype.$destroyAll = Modal.destroyAll;
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
