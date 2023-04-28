var myApp;
(function (myApp) {
    // Define the controller
    var MyController = /** @class */ (function () {
        function MyController() {
            this.title = 'AngularJS + TypeScript Example';
            this.items = ['Item 1', 'Item 2', 'Item 3'];
        }
        return MyController;
    }());
    myApp.MyController = MyController;
    // Register the controller with the module
    angular.module('myApp', [])
        .controller('MyController', MyController);
})(myApp || (myApp = {}));
