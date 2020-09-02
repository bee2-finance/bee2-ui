import Vue from 'vue'
import { Button, Table, TableColumn, Dialog, Loading, MessageBox} from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'

Vue
  .use(Button)
  .use(Table)
  .use(TableColumn)
  .use(Dialog)


Vue.use(Loading.directive)

Vue.prototype.$loading = Loading.service
Vue.prototype.$confirm = MessageBox.confirm