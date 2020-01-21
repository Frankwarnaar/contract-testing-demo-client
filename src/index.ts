(function (): void {
  fetch('http://localhost:8888/.netlify/functions/get-name')
    .then((res: Response) => res.json())
    .then(person => greet(person.name))
    .catch((error: unknown) => {
      console.error('error', error)
      
      greet('Unknown')
    })
  
  function greet(name: string): void {
    document.body.textContent = 'Hello ' + name
  }
})()
