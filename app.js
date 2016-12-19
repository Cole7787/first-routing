angular.module('myFirstRouter', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.when('', '/home');
  $stateProvider
    .state('home', {
      controller: 'homeCtrl',
      url: '/home',
      templateUrl: './home/home.html'
    })
    .state('about', {
      controller: 'aboutCtrl',
      url: '/about',
      templateUrl: './about/about.html'
    })
    .state('reader', {
      controller: 'readerCtrl',
      url: '/reader/:id',
      templateUrl: './reader/reader.html'
    })
})
