angular.module("myApp")
.controller("controllertoDoList", ["$scope", "ToDoService", function (s, t) {
    s.toDo = t.getAll()
    s.registro = {}

    s.addAct = function () {
      t.add(s.registro)
      s.registro = {}
      window.alert("Modificado");
    }

    s.removeAct = function (item) { s.toDo = t.removeItem(item) }

    s.clear = function () { s.toDo = t.clean() }
  }
])
.controller("controllerupDatetoDoList", ["$scope", "ToDoService", "$routeParams", function (s, t, rp) {
    s.toDo = t.getAll()
    s.objectItem =  JSON.parse(rp.objeto)

    s.upDateItem = function () {
      t.upDate(s.objectItem)
      s.objectItem = {}
      window.alert("Modificado");
    }
  }
])
