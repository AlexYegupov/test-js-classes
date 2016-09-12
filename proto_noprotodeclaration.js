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


let human2 = {name: 'human'}

human2.title = 'A'

human2.getName = function() {
  return this.title + ' ' + this.name
}

human2.get = function() {
  return this
}




console.log('----- show basic-----------')
console.log(human.get(), human.getName(), human.__proto__)
console.log(human2.get(), human2.getName(), human2.__proto__)
