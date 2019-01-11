exports.keys = 'csrfToken';

exports.sequelize = {
  dialect: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  database: 'fe-monitor',
  username: 'root',
  password: 'together4',
};

exports.security = {
  csrf: {
    enable: false,
  },
};

exports.cors = {
  origin:'*',
  allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
};