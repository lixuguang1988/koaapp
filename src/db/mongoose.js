const mongoose = require('mongoose');

function dbInit() {
    const connection = mongoose.connection;
    mongoose.connect('mongodb://root:qax_123_aq@127.0.0.1:27017/db_blog', { useNewUrlParser: true});
    connection.on('error', console.error.bind(console, 'connection error:'));
    connection.once('open', function() {
        console.log('链接数据库成功！');
    });
}
module.exports = dbInit;