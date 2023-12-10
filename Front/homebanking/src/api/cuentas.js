export default async function getCuentas() {
  let data =[];
  let isLoading =true;
  let error;

  const url = "http://localhost:8000/cuentas"

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Error al obtener todas las cuentas');
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

export async function getCuentasCliente(idCliente) {
  let data = [];

  const url = `http://localhost:8000/cuentas/cliente/${idCliente}/`

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Error al obtener las cuentas del cliente');
    }
    const jsonData = await response.json();
    data = jsonData;
  } catch (e) {
    console.log(e);
  }

  return data;
};

export async function newCuenta(clienteId) {
  let isLoading = true;
  let error;

  const url = `http://localhost:8000/cuentas/${clienteId}/nueva/`

  
  try {
    const response = await fetch(url, {
      method: 'POST',
      body: {}, //Se envía como un JSON
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      }
    });
    if (!response.ok) {
      throw new Error('Error al crear la cuenta');
    }
  } catch (e) {
    error = e;
  } finally {
    isLoading = false;
  }

  return { isLoading, error };
};