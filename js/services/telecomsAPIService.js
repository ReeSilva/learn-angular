angular.module("yellowPages").service("telecomsAPI", function($http, config) {
  this.getTelecoms = function() {
    return $http.get(config.serviceUrl + ":" + config.servicePort + "/telecoms");
  }
});
