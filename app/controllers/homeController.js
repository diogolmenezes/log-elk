HomeController = function() {
    this.log = require('../../config/log').getLogger("logElk");
};

HomeController.prototype.index = function(request, response) {
    this.logar(function() {
        response.end('Logs gravados no ELK');
    });
};

HomeController.prototype.logar = function(cb) {
   console.log('Gravando logs no ELK...');

   this.log.info('Testando o log no ELK %s', new Date());

   if(cb)
    cb();
};

module.exports = new HomeController();