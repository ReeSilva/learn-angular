angular.module("yellowPages").controller("yellowPagesCtrllr", function($scope, contactsAPI, telecomsAPI, serialGenerator) {
  $scope.app = "Yellow Pages";

  $scope.contacts = [];
  $scope.telecoms = [];
  console.log(serialGenerator.generate());
  var loadContacts = function() {
    contactsAPI.getContacts().success(function(data, status){
      $scope.contacts = data;
    }).error(function(data, status){
      $scope.message = "Aconteceu um problema: " + data;
    });
  };

  var loadTelecoms = function() {
    telecomsAPI.getTelecoms().success(function(data, status){
      $scope.telecoms = data;
    });
  };

  $scope.addContact = function(contact) {
    contact.date = new Date();
    contact.serial = serialGenerator.generate();
    contactsAPI.saveContact(contact).success(function(data) {
      delete $scope.contact;
      $scope.contactForm.$setPristine();
      loadContacts();
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
