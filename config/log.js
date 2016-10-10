var bunyan = require('bunyan');

const logger = bunyan.createLogger({
  name: 'log-elk',
  streams: [
    {
      level: 'info',
      path: 'logs/log-elk.log'
    }
  ]
})

module.exports = logger;