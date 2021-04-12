let arr = [1, 2, 3, 4, 5]
console.log(arr.length)


const student = {
  name: "Bob",
  year: "one",
  class: "SDV503"
}

console.log(student.name)
student.name = "Matt"

console.log(student)

const newObj = {}

const info = {
  firstName: 'John',
  lastName: 'Smith',
  dateOfBirth: '1st DEC 2000',
  friends: ['Bob', 'Tom']
}

console.log(info.friends[0])

const example = {
  nestedObj: {
    name: 'Alex'
  }
}

console.log(example)

const anotherObj = new Object()

console.log(anotherObj)

const propsName = 'firstName'

const objOne = {
  [propsName.toUpperCase()]: 'Alex'
}

console.log(objOne)

const objTwo = {
  firstName: 'Alex',
  lastName: 'Ali',
  printFullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

console.log(objTwo.printFullName())

console.log(objTwo['firstName'])

console.log(objTwo.hasOwnProperty('lastName'))
console.log(objTwo.hasOwnProperty('address'))

console.log(delete objTwo.firstName)

console.log(objTwo.hasOwnProperty('firstName'))
