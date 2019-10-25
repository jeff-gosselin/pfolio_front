const proxy = require("http-proxy-middleware");

module.exports = function(app) {
    app.use(
        proxy("/api/v1/", {
            target: "https://jg-pfolio-api.herokuapp.com",
            changeOrigin: true
        })
    );
};