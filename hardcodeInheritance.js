console.log('-------------- hardcode inheritance ------------')
let o1 = {p1: 1, p2: 2}

let o2 = {p1: 11}
o2.__proto__ = o1

console.log(o2.p1, o2.p2)   // 11 2

