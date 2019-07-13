var app=angular.module("app",[]);
app.controller("control",function($scope){
	$scope.m=true;
	$scope.video1=function(x){
		if(x==1){
			$scope.n=true;
			$scope.x=false;
			$scope.y=false;
			$scope.z=false;
			$scope.m=false;
			$("#a1").addClass("ec");
			$("#a2").removeClass("ec2");
			$("#a3").removeClass("ec3");
			$("#a4").removeClass("ec");
		}else if(x==2){
			$scope.x=true;
			$scope.n=false;
			$scope.y=false;
			$scope.z=false;
			$scope.m=false;
			$("#a2").addClass("ec2");
			$("#a1").removeClass("ec");
			$("#a3").removeClass("ec3");
			$("#a4").removeClass("ec");
		}else if(x==3){
			$scope.y=true;
			$scope.x=false;
			$scope.n=false;
			$scope.z=false;
			$scope.m=false;
			$("#a3").addClass("ec3");
			$("#a1").removeClass("ec");
			$("#a2").removeClass("ec2");
			$("#a4").removeClass("ec");
		}else if(x==4){
			$scope.z=true;
			$scope.x=false;
			$scope.y=false;
			$scope.n=false;
			$scope.m=false;
			$("#a4").addClass("ec");
			$("#a1").removeClass("ec");
			$("#a3").removeClass("ec3");
			$("#a2").removeClass("ec2");
		}
	}
});