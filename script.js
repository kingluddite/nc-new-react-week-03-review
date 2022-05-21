// const myProperty = 'foo'
//
// const myObject = {
//   [myProperty]: 'this is a test',
// }
let user = {
  firstName: '',
  lastName: '',
}

let handleChange = (event) => {
  const { name, value } = event.target
  console.log(`${name} is equal to ${value}`)
  user[name] = value
}

let displayPerson = () => {
  document.querySelector(
    '#output'
  ).innerHTML = `${user.firstName} ${user.lastName}`
}

document.querySelectorAll('input').forEach((element) => {
  element.oninput = handleChange
})

document.querySelector('button').onclick = displayPerson
