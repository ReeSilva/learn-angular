angular.module("yellowPages").factory("contactsAPI", function($http, config) {
  var _getContacts = function() {
    return $http.get(config.serviceUrl + ":" + config.servicePort + "/contacts");
  }

  var _saveContact = function(contact) {
    return $http.post(config.serviceUrl + ":" + config.servicePort + "/contacts", contact);
  }

  return {
    getContacts: _getContacts,
    saveContact: _saveContact
  }
});
