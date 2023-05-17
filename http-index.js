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


const http = require("http");

// De esta mandera podemos crear un servidor con http.createServer pasandole como parametro un callBack (Una funcion que se va a ejecutar cada vez que le llegue una peticion a el server).
// Request llega informacion de la request 
// tienes diferentes metodos para que puedas devolver la informacion que quieras 
const app = http.createServer((request, response) => {
  response.writeHead(200, { "content-text": "application/json" })
  // En esta parte escribe en el head que es la cabezera de las respuestas el 200 significa statushead quiere decir que ah hido bien. Tiene una cabezera que es content-text y el text es de tipo plano, es importante si quieres devolver JSON o si quieres devolver HTML
  response.end(JSON.stringify(Personas, null, 2))
  // response.end es para terminar la respuesta y lo que va a hacer es devolver lo que esta en los () 
});

const PORT = 3000
// Aqui le vas a indicar en que puerto se va a alojar. Te en cuenta de que si tienes otra apk en otro lugar no la puedes poner aqui, por que ya esta ocupada y van a chocar el programa no se va a lanzar.(Va a dar error)
app.listen(PORT)
// app va a escuchar al port que le pusiste 
console.log(`Server runnig in port ${PORT}`)
