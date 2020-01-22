import axios from 'axios'

export default function () {
  return getPerson()
    .then(person => greet(person.name))
    .catch(error => {
      console.error('error', error)
      
      greet('Unknown')
    })
}

export function getPerson() {
  return axios.get('http://localhost:8888/.netlify/functions/get-name')
    .then(res => res.data)
}
  
function greet(name) {
  document.body.textContent = 'Hello ' + name
}
