HomeController = function() {
    this.log = require('../../config/log');
};

HomeController.prototype.index = function(request, response) {
    response.render('home/index');
};

HomeController.prototype.logar = function(request, response) {
   console.log('Gravando logs no ELK...');

   var line = {
       nome: "Diogo Menezes",
       idade: 31,
       data: new Date()
   }
   
   this.log.info(line);

   response.end(line);
};

module.exports = new HomeController();