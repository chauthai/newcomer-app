angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope) {})

.controller('ImportantCtrl', function($scope) {})

.controller('SparetimeCtrl', function($scope) {})

.controller('InfoCtrl', function($scope) {})

.controller('SettingsCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
