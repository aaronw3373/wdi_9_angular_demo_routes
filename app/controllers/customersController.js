(function customerControllerIIFE(data){

  
  var CustomersController = function($scope){
    $scope.customers = data;
    // $scope.customers = [
    // {joined: '2000-12-02', name:'John', city:'Chandler', orderTotal: 9.9956}, 
    // {joined: '1965-01-25',name:'Zed', city:'Las Vegas', orderTotal: 19.99},
    // {joined: '1944-06-15',name:'Tina', city:'New York', orderTotal:44.99}, 
    // {joined: '1995-03-28',name:'Dave', city:'Seattle', orderTotal:101.50}
    // ];

    $scope.sortBy = "name";
    $scope.reverse = false;

    $scope.doSort = function(propName){
      $scope.sortBy = propName;
      $scope.reverse = !$scope.reverse;
    }; // end of doSort
  };  // end of the CustomersController definintion

  // Prevent minification problems
  CustomersController.$inject = ['$scope'];

  // Register this 
  angular.module('customersApp').controller('customersController', CustomersController);

})(customerData);
