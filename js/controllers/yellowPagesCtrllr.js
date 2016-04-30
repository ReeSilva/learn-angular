angular.module("yellowPages").controller("yellowPagesCtrllr", function($scope, $http) {
  $scope.app = "Yellow Pages";

  $scope.contacts = [];
  $scope.telecoms = [];

  var loadContacts = function() {
    $http.get("http://172.17.0.1:32780/contacts").success(function(data, status){
      $scope.contacts = data;
    });
  };

  var loadTelecoms = function() {
    $http.get("http://172.17.0.1:32780/telecoms").success(function(data, status){
      $scope.telecoms = data;
    });
  };

  $scope.addContact = function(contact) {
    contact.date = new Date();

    $http.post("http://172.17.0.1:32780/contacts", contact).success(function(data) {
      delete $scope.contact;
      $scope.contactForm.$setPristine();
      loadContacts();
    }).error(function(data, status){
      $scope.message = "Aconteceu um problema: " + data;
    });
  };
  $scope.delContacts = function(contacts) {
    $scope.contacts = contacts.filter(function(contact) {
      if (!contact.selected) return contact;
    });
  };
  $scope.isContactSelected = function(contacts) {
    return contacts.some(function(contact) {
      return contact.selected;
    });
  };
  $scope.orderBy = function (field) {
    $scope.orderCriteria = field;
    $scope.orderDirection = !$scope.orderDirection;
  };

  loadContacts();
  loadTelecoms();

});
