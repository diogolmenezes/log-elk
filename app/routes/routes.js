module.exports = function(app) {
    app.get('/', app.controllers.homeController.index.bind(app.controllers.homeController));
    app.get('/logar', app.controllers.homeController.logar.bind(app.controllers.homeController));
};