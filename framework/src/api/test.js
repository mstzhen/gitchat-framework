import { ajaxGetData, ajaxPostData, ajaxPostJsonData } from '@/config/api'

let testIp = process.env.testIp;
const testApi = {
  testGet: (params) => {
    return ajaxGetData({ 'url': `${testIp}/test/get`, 'params': params })
  },
  testPost: (params) => {
    return ajaxPostData({ 'url': `${testIp}/test/post`, 'params': params })
  },
  testPostJson: (params) => {
    return ajaxPostJsonData({'url': `${testIp}/test/postj`, 'dataBody': params})
  }
}
export default testApi
