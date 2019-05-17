import tempdata from './components/tempdata';

const CUR_YAOLING_VERSION = 'sprite_0e4ebf1344bf35582f7504ee265f32eb.json'; // 妖灵数据库版本，如果与官方版本不一致，需要手动更新
const APP_VERSION = 'v0.9.512.2316'; // 地图版本
const API_KEY = '2LWBZ-FEQK6-KKYS2-M6WR4-PFGS5-RZBP3'; // 地图 api key

const SUBSCRIBERS = ["落殇"];

const FILTER = {
  FILTER_RARE: [
    2000106, // 风雪虎
    2000313, // 银角小妖
    2000327, // 小蝙蝠
    2000265, // 香玉
    2000238, // 颜如玉
    2000109, // 螺莉莉
    //2000078, // 布鲁 大量出现
    2000028, //小蝌蚪
    //2000191, // 麻将仔 大量出现
    2000242, // 夜行枭
    2000147, // 檐上喵
    2000188 // CoCo熊   todo: 檐上喵&CoCo熊官方雷达貌似不提供搜索
  ],
  FILTER_NEST: [
    2000321, // 木偶娃娃
    2000324, // 瓷偶娃娃
    2000112 // 雷童子
  ],
  FILTER_FEATURE: [
    2004013, // 暴走小龙虾
    2004016, // 素包
    2004010, // 舞狮
    2004007, // 貂宝
    2004004, // 小白蛇
    2000206, // 麻辣小火锅
    2000182, // 小兵俑
  ],
  FILTER_FISH: [
    2000501, // 咸鱼
    2000502, // 多鱼
    2000504, // 摸鱼
    2000519 // 大若智鱼
  ],
  FILTER_ELEMENT: [
    2000511, // 金元宝宝
    2000512, // 木元宝宝
    2000513, // 水元宝宝
    2000514, // 火元宝宝
    2000515 // 土元宝宝
  ],
  FILTER_BOT: [
    // 告警机器人使用
    2000106, // 风雪虎
    2000313, // 银角小妖
    2000327, // 小蝙蝠
    2000265, // 香玉
    2000238 // 颜如玉
  ],
  FILTER_T1: tempdata.Data.filter(item => {
    return item.Level === 2;
  }).map(item => {
    return item.Id;
  }),
  FILTER_T2: tempdata.Data.filter(item => {
    return item.Level === 3;
  }).map(item => {
    return item.Id;
  })
};
const SOCKET = {
  RECONNECT_TIME: 1000, // 断线重连时间
  URL:
    'wss://publicld.gwgo.qq.com?account_value=0&account_type=0&appid=0&token=0' // 官方妖灵查询接口
};

const BOT = {
  URL: 'http://127.0.0.1:36524/api/v1/Cqp/CQ_sendGroupMsg'
};

module.exports = {
  FILTER,
  API_KEY,
  SOCKET,
  CUR_YAOLING_VERSION,
  APP_VERSION,
  BOT
};
