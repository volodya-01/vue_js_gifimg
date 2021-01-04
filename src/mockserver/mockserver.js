// 引入mockjs
const Mock = require("mockjs");

import GetTotalWaterFlow from './data/GetTotalWaterFlow.json'
import GetWaterworksName from './data/GetWaterworksName.json'



// Mock.mock( url, post/get , 返回的数据)；

Mock.mock("/api/GetTotalWaterFlow", "post", GetTotalWaterFlow);
Mock.mock("/api/GetWaterworksName", "post", GetWaterworksName);