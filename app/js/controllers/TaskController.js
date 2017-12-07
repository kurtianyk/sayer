app.controller('TaskController', ($scope, localStorageService)=>{

  $scope.tasks = (localStorageService.get('tasks')!==null) ? angular.fromJson(localStorageService.get('tasks')) : [];

  $scope.addTask = () => {
      $scope.tasks.push({taskText:$scope.taskInput, taskComments:[]});
      localStorageService.set('tasks', angular.toJson($scope.tasks));
      $scope.taskInput = '';
  };

  $scope.removeTask = index => {
      $scope.tasks.splice(index, 1);
      localStorageService.set('tasks', angular.toJson($scope.tasks));
    };

  $scope.addComment = index => {
      $scope.tasks[index].taskComments.push($scope.tasks.task[index]);
      $scope.commentInput = "";
      localStorageService.set('tasks', angular.toJson($scope.tasks));
      $scope.tasks.task[index] = '';
    };

});
