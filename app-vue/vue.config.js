const path = require("path");

module.exports = {
    outputDir: path.resolve(__dirname, '../app-laravel/public/dist'),
    publicPath: '/dist',
    indexPath: path.resolve(__dirname, '../app-laravel/resources/views/index.html')
}