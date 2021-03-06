'use strict'

angular.module('ncy-sample', ['ui.router.state', 'ui.bootstrap', 'ncy-angular-breadcrumb'])
  .config(function($breadcrumbProvider) {
    $breadcrumbProvider.setOptions({
      prefixStateName: 'home',
      template: 'bootstrap2'
    });
  })
  .value('rooms', [
    {roomId: 1, roomNumber: 101, type: 'Double'},
    {roomId: 2, roomNumber: 102, type: 'Double'},
    {roomId: 3, roomNumber: 103, type: 'Single'},
    {roomId: 4, roomNumber: 104, type: 'Double'}
  ])
  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        data: {
          ncyBreadcrumbLabel: 'Home'
        }
      })
      .state('booking', {
        url: '/booking',
        templateUrl: 'views/booking_list.html',
        controller: 'BookingListCtrl',
        data: {
          ncyBreadcrumbLabel: 'Reservations'
        }
      })
      .state('booking.day', {
        url: '/:year-:month-:day',
        templateUrl: 'views/booking_day.html',
        controller: 'BookingDayCtrl',
        data: {
          ncyBreadcrumbLabel: 'Reservations for {{reservationDate | date:\'mediumDate\'}}'
        }
      })
      .state('room', {
        url: '/room',
        templateUrl: 'views/room_list.html',
        controller: 'RoomListCtrl',
        data: {
          ncyBreadcrumbLabel: 'Rooms'
        }
      })
      .state('room.detail', {
        url: '/{roomId}',
        views: {
          "@" : {
            templateUrl: 'views/room_detail.html',
            controller: 'RoomDetailCtrl'
          }
        },
        data: {
          ncyBreadcrumbLabel: 'Room {{room.roomNumber}}'
        }
      })
      .state('room.detail.edit', {
        url: '/edit',
        views: {
          "@" : {
            templateUrl: 'views/room_form.html',
            controller: 'RoomDetailCtrl'
          }
        },
        data: {
          ncyBreadcrumbLabel: 'Editing'
        }
      });

    $urlRouterProvider.otherwise('/home');

  });
