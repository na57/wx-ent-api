var should = require("should");
var MongoClient = require('mongodb').MongoClient,
    ObjectID = require('mongodb').ObjectID;



// 设置环境变量，读取config
process.env.NODE_ENV = 'development';

var mongoClientConfig = {
    server: {
        poolSize: 5,
        socketOptions: { autoReconnect: true }
    }
};

// 初始化需要测试的model

var atProvider = {}, wxapi = null;

describe("AccessToken model test", function() {
	before(function (done) {
        MongoClient.connect('mongodb://127.0.0.1/ynu', mongoClientConfig, function (err, db) {
            atProvider = require('access-token-mongo')(db);
            wxapi = require('../index')(atProvider, {
                cropId: 'cropId',
                secret: 'secret',
                agentId: 0
            });
            should.exist(wxapi);
            done();
        });
	});

});