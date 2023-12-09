export async function fetchPrestamos() {
  let data = [];
  const url = `http://localhost:8000/prestamos/`

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Error al obtener los prestamos del banco');
    }
    const jsonData = await response.json();
    data = jsonData;
  } catch (e) {
    console.log(e);
  }
  return data;
};

//ACCION puede ser solo "aprobar" o "desaprobar"
export function editarPrestamo(id_prestamo, accion){
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var requestOptions = {
    method: 'PUT',
    headers: myHeaders,
    redirect: 'follow'
  };
  const url = `http://127.0.0.1:8000/prestamo/${accion}/${id_prestamo}/`

  fetch(url, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}