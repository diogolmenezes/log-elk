HomeController = function() {
    this.log = require('../../config/log').getLogger("logElk");
};

HomeController.prototype.index = function(request, response) {
    response.render('home/index');
};

HomeController.prototype.logar = function(request, response) {
   console.log('Gravando logs no ELK...');

   var line = 'Testando o log no ELK' + new Date();
   this.log.info(line);

   response.end(line);
};

module.exports = new HomeController();