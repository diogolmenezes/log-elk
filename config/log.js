var log4js = require('log4js');

/*
 Sample logstash config:
   udp {
    codec => json
    port => 10001
    queue_size => 2
    workers => 2
    type => myAppType
  }
*/

log4js.configure({
  "appenders": [
    {
      type: "console",
      category: "logElk"
    },
    {
          "type": "file",
          "filename": "./logs/log-elk.log",
          "maxLogSize": 1024,
          "backups": 3,
          "category": "logElk"
    }
  ]
});

module.exports = log4js;