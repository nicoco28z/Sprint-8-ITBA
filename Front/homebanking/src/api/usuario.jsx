import { useState, useEffect } from 'react';

export default function useClientes() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = `http://localhost:8000/usuarios/`

  useEffect(() => {
    const traerUsuarios = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Error al obtener los clientes del banco');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    traerUsuarios();
  }, [url]);

  return { data, isLoading, error };
};

//CONTROLAR CON MANU ESTO
export function newUser(usuario) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = `http://localhost:8000/api/registro`

  useEffect(() => {
    const crearUsuario = async () => {
      try {
        const response = await fetch(url, {
          method: 'POST',
          body: {usuario}, //Se envía como un JSON
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            "X-CSRFToken":"H836YinrbSOaOkQIY79eNZwAoiWT94ug"
          }
        });
        if (!response.ok) {
          throw new Error('Error al crear el usuario');
        }
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    crearUsuario();
  }, [url]);

  return { isLoading, error };
};

export function editUser(usuario) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = `http://localhost:8000/usuarios/${usuario.id}`

  useEffect(() => {
    const editarUsuario = async () => {
      try {
        const response = await fetch(url, {
          method: 'PUT',
          body: {usuario}, //Se envía como un JSON
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            "X-CSRFToken":"H836YinrbSOaOkQIY79eNZwAoiWT94ug"
          }
        });
        if (!response.ok) {
          throw new Error('Error al actualizar el usuario');
        }
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    editarUsuario();
  }, [url]);

  return { isLoading, error };
};

