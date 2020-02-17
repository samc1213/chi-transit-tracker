const proxy = require("http-proxy-middleware");

module.exports = app => {
  app.use(
    "/traintime",
    proxy({
      target: "http://lapi.transitchicago.com",
      changeOrigin: true,
      pathRewrite: {
        '^/traintime/api': '/api', // rewrite path
      },
    })
  );
  app.use(
    "/bustime",
    proxy({
      target: "http://www.ctabustracker.com",
      changeOrigin: true
    })
  );
  // app.use(
  //   "/gbfs",
  //   proxy({
  //     target: "http://gbfs.divvybikes.com",
  //     changeOrigin: true
  //   })
  // );

};