export default async function getTarjetas(clienteId) {
  let data =[];
  let isLoading =true;
  let error;

  const url = `http://localhost:8000/tarjetas/${clienteId}`

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Error al obtener todas las tarjetas del cliente');
    }
    const jsonData = await response.json();
    data = jsonData;
  } catch (e) {
    error = e;
  } finally {
    isLoading = false;
  }

  return { data, isLoading, error };
};

export async function newTarjeta(tarjeta, clienteId) {
  let isLoading =true;
  let error;

  const url = `http://localhost:8000/tarjeta/${clienteId}/nueva`

  try {
    const response = await fetch(url, {
      method: 'POST',
      body: tarjeta, //Se envía como un JSON
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      }
    });
    if (!response.ok) {
      throw new Error('Error al guardar la tarjeta');
    }
  } catch (error) {
    error = (error);
  } finally {
    isLoading = false;
  }

  return { isLoading, error };
};