# wx-ent-api
微信企业号API对象。


## 目的

简化使用 [wechat-enterprise-api](https://github.com/node-webot/wechat-enterprise-api) 时的初始化工作

## 安装

`npm install wx-ent-api`

## 用法

```

// 使用基于MongoDB的AccessTokenProvider
var atProvider = require('access-token-mongo')(db);

var wxapi = require('wx-ent-api')(atProvider, {
	corpId: 'your coprId',
	secret: 'your secret',
	agentId: 12 // as a example.
});

// 通过以上操作，你将获得一个初始化好的 [API](http://doxmate.cool/node-webot/wechat-enterprise-api/api.html#api_common__API) 对象

```