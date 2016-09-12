human = {
  height: 150,

  grow: function() {
    this.height += 1
  }
}

tallMixin = {

  grow: function() {
    this.height += 2

  }

  // getHeightInfo: function () {
  //   //console.log('showing for ', this)
  //   return 'Height is ' + this.height
  // }

}




peter = Object.create(human) // {height: { value: 190, writable: true, enumerable: true }}
peter.height = 160
peter.grow()
console.log(peter.height)



john = Object.assign(human, tallMixin)  //alt: Object.assign({}, human, tallMixin)
john.height = 170
john.grow()
console.log(john.height)

