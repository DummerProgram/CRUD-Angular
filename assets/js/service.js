angular.module("myApp")
.service("ToDoService", ["localStorageService", function(l){

    this.key = "angular-toDoList"

    if (l.get(this.key)) {
      this.act = l.get(this.key)
    } else {
      this.act = []
    }

    this.add = function (newAct) {
      this.act.push(newAct)
      this.upDateLocalStorage()
    }

    this.upDateLocalStorage = function () {l.set(this.key, this.act)}

    this.getAll = function () {return this.act}

    this.removeItem = function (item) {
      this.act = this.act.filter( activity => activity != item )
      this.upDateLocalStorage()
      return this.getAll()
    }

    this.clean = function () {
      this.act = []
      this.upDateLocalStorage()
      return this.getAll()
    }

    this.upDate = function (upDateAct) {

      let valor = this.act.findIndex( (element, valor) => {
        return element.nombre === upDateAct.nombre
      })
      this.act[valor] = upDateAct
      this.upDateLocalStorage()
      return this.getAll()
    }

  }
])
