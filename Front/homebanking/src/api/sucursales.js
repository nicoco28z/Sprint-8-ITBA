import { useState, useEffect } from 'react';

export default function useSucursales() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = "http://localhost:8000/sucursales"

  useEffect(() => {
    const traerSucursales = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Error al obtener las sucursales');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    traerSucursales();
  }, [url]);

  return { data, isLoading, error };
};