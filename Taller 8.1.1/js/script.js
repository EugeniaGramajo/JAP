import { store, loadData, loadDataError } from './redux.js';

const DATA_URL = "json/data.json"; 

const container = document.getElementById("container"); 


// Función para obtener los datos de forma asíncrona
async function fetchData() {
  try {
    const response = await fetch(DATA_URL);
    const datos = await response.json();
    
    // Despachamos la acción para cargar los datos en el store
    store.dispatch(loadData(datos));
  } catch (error) {
    console.error("Socorro Jesús", error);
    
    // Despachamos la acción para manejar el error
    store.dispatch(loadDataError(error));
  }
}


function showData(dataArray) {

  for (const item of dataArray) {
    
    container.innerHTML += `<p> ${item.name} ${item.lastname} </p>`;
  }
}

// Suscripción al store para actualizar la UI cuando cambie el estado
store.subscribe(() => {
  const state = store.getState();

  if (state.data) {
    showData(state.data.students); // Usamos los datos almacenados en el store
  }

  if (state.error) {
    container.innerHTML = `<p>Error al cargar los datos: ${state.error}</p>`;
  }
});

// Llamamos a la función para obtener los datos
fetchData();
