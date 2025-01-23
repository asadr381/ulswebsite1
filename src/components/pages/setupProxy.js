const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',  // Matches API requests to /api*
    createProxyMiddleware({
      target: 'https://ups-uat.sowaanerp.com',  // Your Frappe server URL
      changeOrigin: true,
      secure: false,  // Set to true if your server uses HTTPS without self-signed certificates
      pathRewrite: {
        '^/api': '',  // Remove /api prefix before forwarding to the target server
      },
    })
  );
};
