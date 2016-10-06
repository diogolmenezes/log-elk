module.exports = function(app) {
    app.get('/', app.controllers.homeController.index.bind(app.controllers.homeController));
};