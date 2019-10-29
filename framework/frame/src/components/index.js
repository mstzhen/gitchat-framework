// 全局组件配置文件
import FadeAnimation from './FadeAnimation'
import slideFade from './slideFade'

const components = {
  FadeAnimation,
  slideFade
}

const  install = function(Vue){
  if (install.installed) return;
  Object.keys(components).forEach(key=>{
    Vue.component(key,components[key])
  })
}

if (typeof window !=="undefined" && window.vue) {
  install(window.vue)
}

const component = {
  install
}

export  default  component