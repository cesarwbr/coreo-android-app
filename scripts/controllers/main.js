/*global angular,console,$*/

'use strict';

var mainCtrlScp;
angular.module('angularApp')
    .controller('MainCtrl', function ($scope) {
        mainCtrlScp = $scope;
        $scope.contacts = [];
        $scope.enviaSMS = function() {
          $scope.result = 'Sucesso!';
          $scope.resultMessage = 'Sua mensagem foi enviada!';
          $.get('http://192.168.1.103:9763/coreo/callcoreo.jag', {SMSTo: $scope.sendSmsTo.phoneNumbers[0].value.replace(/[^0-9.]/g, ''), SMSText: $scope.sendSmsText}, function(data) {
            console.log(data);
          });
        };

      });
