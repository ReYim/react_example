// node 服务器配置
var server_config = {
    HOST: '0.0.0.0',
    PORT: 9528
}

// mysql 配置
var mysql_config = {
    DB_HOST: 'kujijiku.com',
    DB_NAME: 'reyim',
    DB_USER: 'reyim',
    DB_PASSWORD: '123456',
    DB_PORT: '3306'
}

// redis 配置
var redis_config = {
    HOST: 'kujijiku.com',
    PORT: 6379,
    USER: "",
    PASSWORD: "",
    EXPIRE_TIME: 60 * 30
}

// 生成token的key
json_web_token_key = 'ReYim_7'

module.exports = {
    server_config,
    mysql_config,
    redis_config
}
