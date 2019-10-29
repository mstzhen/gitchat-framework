const router = [{
  path: '/item1/page1',
  name: 'item1-page1',
  component: () => import ('@/pages/item1/page1'),
}, {
  path: '/item1/page2',
  name: 'item1-page2',
  component: () => import ('@/pages/item1/page2')
}]
export default router