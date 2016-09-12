// http://frontender.info/the-two-pillars-of-javascript/

let human0 = {
  name: 'human',
  title: 'A',

  getName: function() {
    return this.title + ' ' + this.name
  },

  get: function() {
    return this
  }
}


///////////////////////

let Human = function() {
  this.name = 'human'
  this.title = 'A'

  this.getName = function() {
    return this.title + ' ' + this.name
  }

  this.get = function() {
    return this
  }
}

human = new Human()

///////////////////////

let Human2 = function() {
  this.name = 'human'
  //this.title = 'A',
}


Human2.prototype.title = 'A'

Human2.prototype.getName = function() {
  return this.title + ' ' + this.name
}

Human2.prototype.get = function() {
  return this
}


human2 = new Human2()

console.log('----- functional/prototype instantiation -----------')
//console.log('Human1:', human.get(), human.getName())
console.log('human0.__proto__:', human0.__proto__)

console.log('')
//console.log('Human1:', human.get(), human.getName())
console.log('human.__proto__:', human.__proto__)
//console.log('\nHuman.prototype:', Human.prototype)

console.log('')
//console.log('\nHuman2:', human2.get(), human2.getName())
console.log('\nhuman2.__proto__:', human2.__proto__)
console.log('Human2.prototype:', Human2.prototype)
