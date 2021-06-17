const path = require("path");

module.exports = {
    devServer: {
        proxy: 'http://localhost:8000'
    },
    outputDir: path.resolve('../app-laravel/public/dist'),
    publicPath: '/dist',
    indexPath: path.resolve('../app-laravel/resources/views/index.html')
}