import { useState, useEffect } from 'react';

export default function useCuentas() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = "http://localhost:8000/cuentas"

  useEffect(() => {
    const traerCuentas = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Error al obtener todas las cuentas');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    traerCuentas();
  }, [url]);

  return { data, isLoading, error };
};

export function useCuentasCliente(idCliente) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = `http://localhost:8000/cuentas/cliente/${idCliente}`

  useEffect(() => {
    const traerCuentasCliente = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Error al obtener todas las cuentas');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    traerCuentasCliente();
  }, [url]);

  return { data, isLoading, error };
};

export function newCuenta(cuenta, clienteId) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = `http://localhost:8000/cuentas/${clienteId}/nueva`

  useEffect(() => {
    const crearCuenta = async () => {
      try {
        const response = await fetch(url, {
          method: 'POST',
          body: cuenta, //Se envía como un JSON
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            "X-CSRFToken":"H836YinrbSOaOkQIY79eNZwAoiWT94ug"

          }
        });
        if (!response.ok) {
          throw new Error('Error al guardar la tarjeta');
        }
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    crearCuenta();
  }, [url]);

  return { isLoading, error };
};