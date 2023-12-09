export default async function getClientes() {
  let data = [];
  let isLoading = true;
  let error;

  const url = `http://localhost:8000/usuarios/`

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Error al obtener los clientes del banco');
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

//CONTROLAR CON MANU ESTO
export async function nuevoUser(usuario) {
  let isLoading = true

  const url = `http://localhost:8000/api/registro`

  try {
    const response = await fetch(url, {
      method: 'POST',
      body: {usuario}, //Se envía como un JSON
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      }
    });
    if (!response.ok) {
      throw new Error('Error al crear el usuario');
    }
  } catch (error) {
    console.log(error);
  } finally {
    isLoading = false;
  }

  return { isLoading, error };
};

export async function editUser(usuario) {
  let isLoading = true;

  const url = `http://localhost:8000/usuarios/${usuario.id}`

  try {
    const response = await fetch(url, {
      method: 'PUT',
      body: {usuario}, //Se envía como un JSON
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      }
    });
    if (!response.ok) {
      throw new Error('Error al actualizar el usuario');
    }
  } catch (error) {
    console.log(error);
  } finally {
    isLoading = false;
  }

  return { isLoading };
};

