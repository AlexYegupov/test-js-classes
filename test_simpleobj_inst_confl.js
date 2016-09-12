human = {
  height: -100,

  grow: function() {
    //console.log('growing ', this)
    this.height += 1
  },

  init: function(newHeight) {
    this.height = newHeight
  }
}



// instantiating using Object.create
humanA = Object.create(human)
humanA.height = 10
humanA.grow()
console.log(humanA.height)


// instantiating using Object.create
humanB = Object.create(human)
humanB.height = 20
humanB.grow()
console.log(humanB.height)


// __proto__ linking
humanC = {height: 30}
humanC.__proto__ = human
humanC.grow()
console.log(humanC.height)


// with default age
humanD = {}
humanD.__proto__ = human
humanD.grow()
console.log(humanD.height)

console.log('----- inheritance1 -------')

// with method override
humanTall = {height: 40}
humanTall.__proto__ = human
humanTall.grow = function () {
  this.__proto__.grow.call(this)  //super
  this.height += 1 //additional grow
}
humanTall.grow()
console.log(humanTall.height)


console.log('----- inheritance2 -------')
// one-class inheritance
humanE = {
  __proto__: human,

  height: 50,

  grow: function () {
    this.__proto__.grow.call(this)  //super
    this.height += 1 //additional grow
  }

}
humanE.grow()
console.log(humanE.height)  // 52 = 50 + 1 + 1


