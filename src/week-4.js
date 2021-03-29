let country = 'New Zealand'
let city = 'Nelson'
let postCode = 7010
console.log(country)
console.log(city)
console.log(postCode)

let isIsland = false
let language

console.log(typeof isIsland)
console.log(typeof language)


language = function () {
  return 'Hello'
}

console.log(typeof language)

language = {
  name: 'Ali',
  city: 'Mosul',
  country : 'Iraq'
}

console.log(typeof language)
console.log(language.city = 'Nelson')
console.log(language)

// language = ['english', 'deutsch', 'arabic']
// console.log(language[1])
console.log(language.country)
console.log(typeof postCode)

console.log(postCode)
postCode++
postCode--
console.log(postCode)

postCode = 7020
postCode++

if (postCode === 7010 && postCode === 7020) {
  console.log('Nelson')
} else if(postCode === 7020) {
  console.log('What???')
} else {
  console.log('Write city name')
}
let a = 'A+'
let b = 'B+'

let studentOne = 75

if (studentOne >= 70 && studentOne <= 80) {
  console.log(b)
} else if (studentOne < 70) {
  console.log('c+')
}

console.log(24 >= 24)
console.log(25 < 26)
console.log('24' === 24)

console.log(24 !== 24)

console.log('24' === 24)

console.log(0 == false)
console.log(1 == true)

console.log( 1 == true)

const x = {
  city: 'Nelson'
}

const y = x

console.log(y.city)