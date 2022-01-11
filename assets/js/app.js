angular.module("myApp", ["LocalStorageModule", "ngResource", "ngRoute"])
.config(function($routeProvider){
    $routeProvider
      .when("/", {
          templateUrl: "assets/views/table.html",
          controller: "controllertoDoList",
        }
      )
      .when("/update/:objeto", {
        templateUrl: "assets/views/upDate.html",
          controller: "controllerupDatetoDoList",
        }
      )
      .otherwise({
        redirectTo : "/"
      })
  }
)
