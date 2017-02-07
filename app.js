(function(angular){
	angular.module('app', [])
	.controller('searchCtrl', ['$scope','$http', function($scope,$http){
		$scope.keyword = '';
		$scope.search = function(){
			
			$http.get('https://api.360fan.com/search',{params: {q:$scope.keyword}}).then(function(res){
				if(res.status == 200){
					$scope.result = res.data;
					console.log('success'+res);
				}
				else{
					$scope.result = res.statusText;
				}
				
			},function(res){
				$scope.result = res.data;
				console.log(res);
			});
		}

		var text = "the sky is blue";
		var reversewords = function(str){
			return str.split(' ').reverse().join(' ');
		};

		reversewords(text);
	}])
})(angular)