module myApp {
    // Define the controller
    export class MyController {
    title: string;
    items: string[];
    constructor() {
    this.title = 'AngularJS + TypeScript Example';
    this.items = ['Item 1', 'Item 2', 'Item 3'];
    }
    }
    // Register the controller with the module
    angular.module('myApp', [])
    .controller('MyController', MyController);
    }