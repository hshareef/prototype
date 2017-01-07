
createApp.controller('CreateCtrl', function($scope, $http, CreateService) {
	
	
	//$scope.claim = {claimStatement: "default statement", claimId: 1};
	
	$scope.claim = new Object();
	$scope.claim.claimStatement="default statement";
	$scope.claim.claimId=1;
	$scope.claim.arguments = [];
	
	$scope.claim2 = "{\"claimStatement\": \"default statement\"}";
	
	$scope.testClaim = "this is the test claim";
	
	//$scope.claimStatement = ;
 
	$scope.testCreateCtrl = function() {
        alert("create controller works!");
        CreateService.testCreateService();
    };
    
    $scope.saveStatement = function(){
    	alert("hellow");
    	alert(this.claim.claimStatement);
    	
    	//var test = $http.post("http://localhost:8080/Prototype/prototype/claim/create2?claim=test");
    	var test = $http.post("http://localhost:8080/Prototype/prototype/claim/create", $scope.claim);
    	
    	alert("saved ");
    	alert("new alert");
    };
    
    $scope.addToArgumentArray = function(){
    	var argument = new Object();
    	argument.argName="default name";
    	argument.premises = [];
    	$scope.claim.arguments.push(argument);
    };
    
    
    $scope.addToPremiseArray = function(argIndex){
    	var premise = new Object();
    	premise.statement="default statement";
    	$scope.claim.arguments[argIndex].premises.push(premise);
    };
    
    
});