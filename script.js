// The spread operator (...)
// Can be used with both arrays and objects
// Lets you pull out (aka "spread") a copy of what's inside the array or object
// (typically in order to create a new array or object)
// We will see this again when learning Redux

// SPREAD operator with ARRAYS
const landVehicles = ['sedan', 'truck', 'van']
const waterVehicles = ['canoe', 'sailboat', 'submarine']
// combine both arrays into one NEW array
const vehicles = [...landVehicles, ...waterVehicles]
console.log(vehicles)

// grab an array and add a new item and place all in a new array
const moreLandVehicles = [...landVehicles, 'tank']
console.log(moreLandVehicles)

// You can even spread and recombine multiple arrays along with other types of data. Try this in your console:
const mixNMatch = [
  ...landVehicles,
  'banana',
  3,
  3,
  { someObjProperty: 'someObjPropertyValue' },
  ...waterVehicles,
]
console.log(mixNMatch)

// spread operator with Objects
const objOne = { color: 'blue', height: 12 }
const objTwo = { material: 'ceramic', width: 6 }
const objOneAndTwoCombined = { ...objOne, ...objTwo }
console.log(objOneAndTwoCombined)

// override existing properties in common
// The reason that the color from objThree carried over to the new object is simply because it was later in the list than objOne
const objThree = { color: 'red', width: 7 }
const objOneAndThreeCombined = { ...objOne, ...objThree }
console.log(objOneAndThreeCombined)
// if you did this
// const objThreeAndOneCombined = {...objThree, ...objOne};
// this new object has the color property of "blue", carried over from objOne

// You can also use the spread syntax to create a new object from an existing object, while updating one or more of its properties.
// const objOneUpdatedHeight = {...objOne, height: 300};
// console.log(objOneUpdatedHeight)
