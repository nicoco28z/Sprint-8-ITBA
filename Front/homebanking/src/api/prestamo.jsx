import { useState, useEffect } from 'react';

export default function usePrestamos() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = `http://localhost:8000/prestamos/`

  useEffect(() => {
    const traerPrestamos = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Error al obtener los prestamos del banco');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    traerPrestamos();
  }, [url]);

  return { data, isLoading, error };
};

//PRESTAMO: {monto, cliente, cuenta}
export function solicitarPrestamo(monto, cliente, cuenta) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = `http://localhost:8000/prestamo/solicitar`

  useEffect(() => {
    const crearPrestamo = async () => {
      try {
        const response = await fetch(url, {
          method: 'POST',
          body: {monto:monto, cliente:cliente, cuenta:cuenta}, //Se envía como un JSON
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            "X-CSRFToken":"H836YinrbSOaOkQIY79eNZwAoiWT94ug"
          }
        });
        if (!response.ok) {
          throw new Error('Error al crear la solicitud de prestamo');
        }
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    crearPrestamo();
  }, [url]);

  return { isLoading, error };
};

//ACCION puede ser solo "aprobar" o "desaprobar"
export function editarPrestamo(prestamo, accion){
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = `http://localhost:8000/prestamo/${accion}/${prestamo.id_prestamo}`

  useEffect(() => {
    const editarPrestamo = async () => {
      try {
        const response = await fetch(url, {
          method: 'PUT',
          body: {prestamo}, //Se envía como un JSON
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            "X-CSRFToken":"H836YinrbSOaOkQIY79eNZwAoiWT94ug"
          }
        });
        if (!response.ok) {
          throw new Error('Error al intentar actualizar la solicitud de prestamo');
        }
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    editarPrestamo();
  }, [url]);

  return { isLoading, error };
}