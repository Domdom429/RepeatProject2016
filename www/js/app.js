angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
   
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  // setting up each tab
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  
  // setup for tab one and first controller
  .state('tab.one', {
    url: '/one',
    views: {
      'tab-one': {
        templateUrl: 'templates/tab-one.html',
        controller: 'firstCtrl'
      }
    }
  })

  // setup for tab two and second controller
  .state('tab.two', {
      url: '/two',
      views: {
        'tab-two': {
          templateUrl: 'templates/tab-two.html',
          controller: 'secondCtrl'
        }
      }
    })

  // default setup 

  $urlRouterProvider.otherwise('/tab/one');

});
