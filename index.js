
/**
 * 使用access-token-mongo组件和wechat-enterprise-api生成wxapi组件，用于调用微信API
 * Created by 文琪 on 2015/4/22.
 */


var API = require('wechat-enterprise-api');


/*
参数
	- provider 用于存取AccessToken的提供程序，可以使用access-token-mongo或access-token-redis
	- options 其他参数
	    - corpId 必须。微信企业号的ID
	    - secret 必须。微信企业号管理组的secret
	    - agentId 必须。调用api的应用的Id
*/

module.exports = function (provider, options) {

    var wxapi = new API(options.corpId, options.secret, options.agentId,
        function(callback){
            provider.getToken({
                appId: options.corpId,
                appSecret: options.secret
            }, function(err, token){
                callback(null, token);
            })
        },
        function(token, callback){
            provider.saveToken({
                appId: options.corpId,
                appSecret: options.secret,
                expire: options.expire || 7000
            }, token, function(){
                callback(null, token);
            });
        }
    );

    return wxapi;
};