#  启动 mongodb
mongod.exe --logpath D:\MongoDB\data\log\mongodb.log --logappend --dbpath E:\MongoDB\data --directoryperdb --serviceName MongoDB --install
# 查看mongodb.log
Service can be started from the command line with 'net start MongoDB'
net start MongoDB

# 删除 mongodb
mongod --logpath "D:\MongoDB\data\log\mongodb.log" --logappend --dbpath "D:\MongoDB\data" --directoryperdb --serviceName "MongoDB" --serviceDisplayName "MongoDB" --remove

# 重新创建
mongod --logpath "D:\MongoDB\data\log\mongodb.log" --logappend --dbpath "D:\MongoDB\data" --directoryperdb --serviceName "MongoDB" --serviceDisplayName "MongoDB" --install


# 创建用户
```bash
use admin
 
db.createUser( {user: "admin",pwd: "123456",roles: [ { role: "userAdminAnyDatabase", db: "admin" } ], mechanisms : ['SCRAM-SHA-1']})

db.auth('admin', '123456')
```
# 在 db_wdcpb 上创建 root/abc123 账号，并认证
```bash
# 没有数据库，可先建数据库
use db_blog
db.createUser({
    user:'root',
    pwd:'qax_123_aq', 
    roles:[
        {role:'readWrite', db:'db_blog'}
    ],
    mechanisms : ['SCRAM-SHA-1'] 
})
db.auth("root","qax_123_aq")
```
[参考文档](https://blog.csdn.net/xiaoxiangzi520/article/details/81094378)
# 删除用户
db.system.users.remove({user:"root"})

[连接MongoDB报错：error: couldn't connect to server 127.0.0.1:27017 src/mongo/shell/mo](https://www.cnblogs.com/now-future/p/6507249.html)
