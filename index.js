const http = require('http');
const httpProxy = require('http-proxy');

// Create a proxy server
const proxy = httpProxy.createProxyServer({});

// Create a simple server that forwards requests to WhatsApp
const server = http.createServer((req, res) => {
  proxy.web(req, res, { target: 'https://web.whatsapp.com' });
});

// Server will listen on the port provided by Heroku or 8080 locally
server.listen(process.env.PORT || 8080, () => {
  console.log('Proxy server is running on port 8080');
});
