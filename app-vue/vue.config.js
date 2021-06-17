const path = require("path");

module.exports = {
    outputDir: path.resolve('../app-laravel/public/dist'),
    publicPath: '/dist',
    indexPath: path.resolve('../app-laravel/resources/views/index.html')
}