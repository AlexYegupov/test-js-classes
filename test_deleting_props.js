// demo: - modify and delete parent and child props
//       - difference between "delete obj.attr" and "obj.attr = undefined" 
let parent = {
  p1: 10,
  p2: 20
}

let child = {
  __proto__: parent,
  
  // p1: 10,   not modify   
  p2: 21,  // modify
  p3: 31   // new
}

function show() {
  console.log('parent:', parent.p1, parent.p2, parent.p3)
  console.log('child: ', child.p1, child.p2, child.p3)
  // console.log('p1:', parent.p1, ' ', child.p1)
  // console.log('p2:', parent.p2, ' ', child.p2)
  // console.log('p3:', parent.p3, ' ', child.p3)
}

function modify() {
  console.log('...')

  // (Uncomment any single line and see effect)

  // Deleting:
  //delete parent.p1 // affect both 
  //delete parent.p2 // affect only parent (because child redefined) 
  //delete child.p1 // no affect (because child not redefined)
  //delete child.p2  // inherited parent.p2  will be used
  //child.p2 = undefined  // !!! NOT the same as "delete child.p2"
  //delete child.p3    // just delete child.p3

  // Modifying:
  //parent.p1 = '**'
  //parent.p2 = '**'
  //child.p1 = '**'
  child.p2 = '**'
  //child.p3 = '**'
}

show()
modify()
show()
