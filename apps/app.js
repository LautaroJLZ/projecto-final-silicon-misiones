//Enlace con API a mi archivo JavaScript
const API_BASE = "https://rickandmortyapi.com/api";
const API_CHARACTERS = "https://rickandmortyapi.com/api/character";

//Guardo la api en una variable
const callApi = fetch(API_CHARACTERS);

//Convierto llamada de API en Json

// 

callApi.then((data) => {
    return data.json();
  })
  //Último then la data llega formateada lista para usar
  .then((data) => {
    const $container = document.getElementById("container");
    const characters = data.results;
    console.log(data.results);

    for (let i = 0; i < characters.length; i++) {
      $container.innerHTML += 
      `
      <div class="item-grid">
        <img src=${characters[i].image} alt="imagen de personaje"/>
        <h2>${characters[i].name}</h2>
        <p>Gender: ${characters[i].gender}</p>
        <p>Species: ${characters[i].species}</p>
        <p>Status: ${characters[i].status}</p>
        <p>Origin: ${characters[i].origin.name}</p>
      </div>
      `
      ;
    }
  })
  //Pasa 4: En caso de que haya error aparece en el catch
  .catch((err) => {
    console.log(err);
  });