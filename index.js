// El la forma vieja de importar un modulo. Aqui si esta requiriendo o importando un modulo que se llama http y lo guardas en una constante


let Personas = [{
  id: 1,
  name: "Enmanuel",
  lastName: "Gomez",
  age: 19
},
{
  id: 2,
  name: "Jose",
  lastName: "Perez",
  age: 28
},
{
  id: 3,
  name: "Petruco",
  lastName: "Alvarez",
  age: 30
},
{
  id: 4,
  name: "Eduardo",
  lastName: "Pereira",
  age: 50
},
{
  id: 5,
  name: "Joselito",
  lastName: "Alfonzo",
  age: 17
}
]

const express = require("express")

const app = express()

app.use(express.json())
// con esto se crea la aplicacion
app.get("/", (request, response) => {
  // lo que se pone en la primera posicion en la ruta o el link que se va a encontrar en tal lugar 
  response.send("<h1>Hello Wold</h1>")
})

app.get("/api/personas", (request, response) => {
  response.json(Personas);
})
// Se pone get, para indicale que quieres que haga cuando haces una peticion tipo get

app.get("/api/personas/:id", (request, response) => {
  const id = Number(request.params.id)
  const persona = Personas.find(element => element.id === id)

  if (persona) {
    response.json(persona)
  }
  else {
    response.status(404).end() 
  }

})

app.delete("/api/personas/:id", (request, response) => {
  const id = Number(request.params.id);
  Personas = Personas.filter(persona => persona.id !== id)
  response.status(204).end()
 })

app.post("/api/personas", (request, response) => {
  const persona = request.body;
  console.log(persona)
  response.json(persona)


  const ids = Personas.map(persona => persona.id)
  const maxid = Math.max(...ids)

  const newPersona = {
    id: maxid + 1,
    name: persona.name,
    lastName: persona.lastName,
    age: persona.age

  }

  Personas = [...Personas, newPersona]

})


const PORT = 3000
// Aqui le vas a indicar en que puerto se va a alojar. Te en cuenta de que si tienes otra apk en otro lugar no la puedes poner aqui, por que ya esta ocupada y van a chocar el programa no se va a lanzar.(Va a dar error)
app.listen(PORT, () => {
  console.log(`Server runnig in port ${PORT}`) 
 })
// app va a escuchar al port que le pusiste 
