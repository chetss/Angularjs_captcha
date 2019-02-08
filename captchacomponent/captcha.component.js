(function () {
    'use strict';
    angular
        .module('myApp')
        .component('myCaptcha', Captcha());

    function Captcha() {
        /** @ngInject */
        function CaptchaController($scope) {
            var vm = this;
            var code = null;
            vm.resetCaptcha = createCaptcha;
            vm.validateCaptcha = validateCaptcha;
            
        function createCaptcha() {
            //clear the contents of captcha div first 
            
            document.getElementById('captcha').innerHTML = "";

            var charsArray =
                "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
            var lengthOtp = 8;
            var captcha = [];
            for (var i = 0; i < lengthOtp; i++) {
                //below code will not allow Repetition of Characters
                var index = Math.floor(Math.random() * charsArray.length + 1); //get the next character from the array
                if (captcha.indexOf(charsArray[index]) == -1)
                    captcha.push(charsArray[index]);
                else i--;
            }
            var canv = document.createElement("canvas");
            canv.id = "captcha";
            canv.width = 150;
            canv.height = 50;
            var ctx = canv.getContext("2d");
            ctx.font = "25px Georgia";
            ctx.strokeText(captcha.join(""), 0, 30);
            code = captcha.join("");

            //storing captcha so that can validate you can save it somewhere else according to your specific requirements
            document.getElementById("captcha").appendChild(canv); // adds the canvas to the body element


        }

        function validateCaptcha () {
            event.preventDefault();
            if (document.getElementById("cpatchaTextBox").value == '') {
                alert("please  input captcha");
                return;
            }
            if (document.getElementById("cpatchaTextBox").value == code) {
                alert("Valid Captcha");
            } else {
                alert("Invalid Captcha. try Again");
                createCaptcha();
                // reseting the text box
                document.getElementById("cpatchaTextBox").value = '';
            }
        };

        init();

        function init() {
            createCaptcha();
        }

        }
        return {
            bindings: {},
            controller: CaptchaController,
            controllerAs: 'CapCtrl',
            templateUrl: '/captchacomponent/captcha.html',
        }
    }

}());