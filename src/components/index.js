/*
 * @Author: fengzhonghui
 * @Date: 2020-07-14 10:04:09
 * @LastEditors: fengzhonghui
 * @LastEditTime: 2020-07-14 10:18:40
 * @Description:
 */
// 扫描所有的组件
const files = require.context('./', true, /^\.\/[\w-_]+\/index\.(js|vue)$/)

const components = files.keys().map(key => {
  return files(key).default
})

export default {
  install(Vue) {
    components.forEach(component => {
      Vue.component(component.name, component)
    })
  }
}
