import { useState, useEffect } from 'react';

export default function useTarjetas(clienteId) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = `http://localhost:8000/tarjetas/${clienteId}`

  useEffect(() => {
    const traerTarjetas = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Error al obtener las tarjetas');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    traerTarjetas();
  }, [url]);

  return { data, isLoading, error };
};

export function newTarjeta(tarjeta) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = `http://localhost:8000/tarjeta/${clienteId}/nueva`

  useEffect(() => {
    const crearTarjeta = async () => {
      try {
        const response = await fetch(url, {
          method: 'POST',
          body: tarjeta, //Se envía como un JSON
          headers: {
            "Content-type": "application/json; charset=UTF-8"
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

    crearTarjeta();
  }, [url]);

  return { isLoading, error };
};