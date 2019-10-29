//配置导航
const router = [{
  name: '概览',
  icon: 'el-icon-folder',
  url: '',
  index: '1',
  type: "nav",
  children: [{
    name: '默认页',
    icon: 'el-icon-document',
    url: '/default',
    index: '1-1',
    type: "menu"
  }]
}, {
  name: '选项1',
  icon: 'el-icon-folder',
  url: '',
  index: '2',
  type: "nav",
  children: [{
    name: '页面1',
    icon: 'el-icon-document',
    url: '/item1/page1',
    index: '2-1',
    type: "menu"
  }, {
    name: '页面2',
    icon: 'el-icon-document',
    url: '/item1/page2',
    index: '2-2',
    type: "menu"
  }]
}, {
  name: '选项2',
  icon: 'el-icon-folder',
  url: '',
  index: '3',
  type: "nav",
  children: [{
    name: '页面1',
    icon: 'el-icon-document',
    url: '/item2/page1',
    index: '3-1',
    type: "menu"
  }]
}]

export default router
