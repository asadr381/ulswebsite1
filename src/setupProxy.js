const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',  // This will match any API requests to the /api route
    createProxyMiddleware({
      target: 'https://ups-uat.sowaanerp.com',  // The Frappe server URL
      changeOrigin: true,  // Ensure the host header is rewritten
      secure: false,  // If using self-signed SSL certificates, set it to false
    })
  );
};
