'use strict';

// had enabled by egg
// exports.static = true;
exports.mysql = {
  enable: true,
  package: 'egg-mysql',
};
exports.oauth2Server = {
  enable: true,
  package: 'egg-oauth2-server',
};
exports.userrole = {
  package: 'egg-userrole',
};