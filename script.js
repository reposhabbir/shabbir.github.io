 var app = angular.module('myApp', []);

app.controller('NavController', function ($scope, $window) {
    $scope.menuActive = false;
    $scope.isScrolled = false;

    // Toggle menu for mobile
    $scope.toggleMenu = function () {
        $scope.menuActive = !$scope.menuActive;
    };

    // Close menu on clicking a menu item
    $scope.closeMenu = function () {
        $scope.menuActive = false;
    };

    // Change header background on scroll
    angular.element($window).bind('scroll', function () {
        $scope.isScrolled = this.pageYOffset > 250;
        $scope.$apply(); // Apply changes to scope
    });
});
