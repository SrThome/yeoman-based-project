'use strict';

/**
 * @ngdoc function
 * @name bilinigualsApp.controller:UsersCtrl
 * @description
 * # UsersCtrl
 * Controller of the bilinigualsApp
 */
angular.module('bilinigualsApp')
  .controller('UsersCtrl', ['userInfo', function(userInfo) {
  	var context = this;
  	  userInfo.get('tyler', function(err, data) {
  	  	if(err) {
  	  		console.log('Error encountered' + err.toString());
  	  	} else {
  	  		context.awesomeThings.push(data);
  	  	}
  	  });
      this.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    }]);
