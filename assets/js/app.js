const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
// Se eliminó el caracter "$" del nombre de la varible
const n = document.querySelector('.name');
const b = document.querySelector('.blog');
const l = document.querySelector('.location');

function displayUser(username) {
  // Se cambio el nombre de la variable
  n.insertAdjacentText("afterbegin",'cargando...');
  // Se agregó un manejo de respuesta para la petición a la API  
  const response = fetch(`${usersEndpoint}/${username}`);
  response.then(respuesta =>{
    // La respuesta se paso a un json
    respuesta.json().then(
      (data) => {
        console.log(data)
        // Se corrigió la forma de insertar los datos, y de igual forma se corrigió la forma de declarar los datos
        n.innerText = data.name;
        b.innerText = data.blog;
        l.innerText = data.location;
      }).catch((err) => { // Se utilizó el catch dentro del manejo de la solicitud en lugar de utilzar la función que lo manejaba
        console.log("Problema con el Json", err)
        n.innerText = `Algo salió mal: ${err}`
      });
  }).catch((err) => {
    console.log("Ocurrio un problema con la solicitud", err)
    n.innerText = `Algo salió mal: ${err}`
  })  
}

// Se eliminó la función que manejaba las excepciones

// Se eliminó la llamada a la función de las excepciones
displayUser('stolinski');