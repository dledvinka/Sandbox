const proxy = [
    {
      context: '/api',
      target: 'http://localhost:3000',
      // pathRewrite: {'^/api' : ''}
    },
    {
      context: '/auth',
      target: 'http://localhost:3000',
      // pathRewrite: {'^/auth' : ''}
    }
  ];
  module.exports = proxy;