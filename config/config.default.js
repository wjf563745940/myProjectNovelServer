'use strict';

module.exports = appInfo => {
  const config = {};

  // should change to your own
  config.keys = appInfo.name + '_1501051848334_9117';

  // add your config here
  config.mysql = {
  // 单数据库信息配置
  client: {
    // host
    host: '0.0.0.0',
    // 端口号
    port: '3306',
    // 用户名
    user: 'root',
    // 密码
    password: '1qazxsw2',
    // 数据库名
    database: 'crawler',
  },
  // 是否加载到 app 上，默认开启
  app: true,
  // 是否加载到 agent 上，默认关闭
  agent: false,
};
config.security = {
   //domainWhiteList: ['http://localhost:8080','http://192.168.51.199:8080','192.168.51.199:8080','192.168.51.199'],
    domainWhiteList: ['192.168.51.199:8080','192.168.51.199'],
};
config.oauth2Server ={
grants: [ 'password', 'client_credentials' ],
};

config.userrole = {
  failureHandler(action) {
    switch (action) {
      case 'admin':
        this.status = 403;//未登录
        console.log("admin fail")
      //  this.redirect('http://192.168.51.199:8080/#/login');
        console.log(this)
        break;
      default:
        break;
    }
  },
};
 config.security= {
    csrf: {
      queryName: '_csrf', // 通过 query 传递 CSRF token 的默认字段为 _csrf
      bodyName: '_csrf', // 通过 body 传递 CSRF token 的默认字段为 _csrf
       headerName: 'x-csrf-token',
    },
  };
  config.session = {
  maxAge: 10 * 1000, // ms
  key: 'EGG_SESS',
  httpOnly: true,
  encrypt: true,
};
  return config;

};
