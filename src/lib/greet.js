export default function () {
  return getName()
    .then(greet)
    .catch(error => {
      console.error('error', error)
      
      greet('Unknown')
    })
}

export function getName() {
  return fetch('http://localhost:8888/.netlify/functions/get-name')
    .then(res => res.json())
    .then(person => person.name)
}
  
function greet(name) {
  document.body.textContent = 'Hello ' + name
}
