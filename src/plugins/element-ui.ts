import Vue from 'vue'
import { Button, Table, TableColumn, Dialog, Loading, Message, MessageBox, Input} from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'

Vue
  .use(Button)
  .use(Table)
  .use(TableColumn)
  .use(Dialog)
  .use(Input)


Vue.use(Loading.directive)

Vue.prototype.$loading = Loading.service
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$prompt = MessageBox.prompt
Vue.prototype.$message = Message