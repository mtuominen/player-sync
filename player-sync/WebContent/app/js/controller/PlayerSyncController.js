'use strict';

/* Controllers */

var playerSyncController = angular.module('playerSyncController', []);

playerSyncController.controller('PlayerSyncController', ['$scope', 'MflPlayer',
  function($scope, MflPlayer) {
    $scope.mflPlayers = MflPlayer.query();
    $scope.orderProp = 'name';
  }]);