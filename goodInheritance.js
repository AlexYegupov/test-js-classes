// http://frontender.info/the-two-pillars-of-javascript/

let human = {
  name: 'human',
  title: 'A',

  getName: function() {
    return this.title + ' ' + this.name
  },

  get: function() {
    return this
  }
}

// alt:
// let human = {name: 'human'}
// 
// human.title = 'A'
// 
// human.getName = function() {
//   return this.title + ' ' + this.name
// }
// 
// human.get = function() {
//   return this
// }




console.log('----- show basic-----------')
console.log(human.get(), human.getName())

console.log('-----modify child-----------')
let john = Object.create(human)
console.log('?? __proto__ == human:', john.__proto__ == human)
console.log('?? prototype:', john.prototype)
console.log(john.get(), john.getName())
john.name = 'Jonny'
console.log(john.get(), john.getName())


console.log('--------modify child two ways--------')
let carl = Object.create(human, {name: { value: 'Carl', writable: true, enumerable: true }})
console.log(carl.get(), carl.getName())
carl.name = 'Carly'
console.log(carl.get(), carl.getName())

console.log('--------inherit partially and completely --------')
let kate = Object.create(
  human,
  {name: { value: 'Kate', writable: true, enumerable: true }
  }
)
let ann = Object.create(
  human,
  {name: { value: 'Ann', writable: true, enumerable: true },
   title: { value: 'Mrs', writable: true, enumerable: true }
  }
)

console.log(kate.get(), kate.getName())
console.log(ann.get(), ann.getName())

console.log('------------------ ugly mixins ------------------')
// ugly because need use "new" (to combine global var + this.attr)

let Mixin = function() {
  spec = '<<<'

  // experiment: try to use global variable + this.someattribute
  this.getSpecial = function() {
    return spec + this.name
  }
}

let mix = new Mixin()

let tom = Object.create(human)
tom.name = 'Tom'

tom.getSpecial = mix.getSpecial

console.log(tom.getSpecial())

// CONCLUSION: that mixin is evil. Better use separated object with util funtions with params

console.log('------------------ shmugly mixins ------------------')
// ugly because need use "new" (to combine global var + this.attr)

let shon = Object.create(human)
shon.name = 'Shon'
console.log(shon.get(), shon.getName())


console.log('-------- classic boring classes method declarations 2 ways --------')
function Myclass() {
  this.a = 'a'

  this.get1 = function() {
    return 'get1:' + this.a
  }

}

Myclass.prototype.get2 = function() {
  return 'get2:'+this.a
}

Myclass.prototype.someProp = 10

let inst = new Myclass()

console.log('prototype:', Myclass.prototype)  //  Myclass { get2: [Function] }
console.log('__proto__:', inst.__proto__)  // (the same)

//note: .prototype has sense for constructor only! (see https://learn.javascript.ru/new-prototype)
console.log(inst.get1(), inst.get2())     // get1:a get2:a

console.log('-------- func classes + mixins inside --------')
function MyA() {
  this.a = 'a'

  this.get1 = function() {
    return 'get1:' + this.a
  }
  //return this
  Mixin1.call(this)
  Mixin2.call(this)
}

// MyA.prototype.get2 = function() {
//   return 'get2:'+this.a
// }

Mixin1 = function() {
  //proto.call(this)

  this.spec = "***"
  this.getSpecial1 = function() {
    return this.spec + this.a
  }
  //return this
}

Mixin2 = function() {
  //proto.call(this)

  this.spec2 = "%%%"
  this.getSpecial2 = function() {
    return this.spec2 + this.a
  }
  //return this
}

let im = new MyA()
console.log(im, im.get1(), im.getSpecial1(), im.getSpecial2() ) // get1:a ***a %%%a




// console.log('----------------')
// 
// function Myclass(p1) {
//   this.field1 = p1
//   this.fun = function(param)  {
//     console.log('Myclass.func(', param, ')', this, this.field1)
//   }
// }
// 
// 
// myinst = new Myclass(111)
// myinst.fun(222)
