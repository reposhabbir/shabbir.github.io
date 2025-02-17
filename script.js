var app = angular.module('portfolioApp', []);

app.controller('FormController', function ($scope) {
    $scope.formData = {};

    $scope.submitForm = function () {
        if ($scope.formData.name && $scope.formData.email) {
            alert('Thank you, ' + $scope.formData.name + '! We will contact you at ' + $scope.formData.email + '.');
            $scope.formData = {}; // Clear form
        } else {
            alert('Please fill in all fields!');
        }
    };
});
