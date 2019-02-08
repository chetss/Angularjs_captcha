(function () {
    'use strict';
    angular
        .module('myApp')
        .controller('Controller', Controller);

    /** @ngInject */
    function Controller($scope) {
        var vm = this;

        function init() {
        }
        init();
    }

}());