export default async function getSucursales() {
  let data =[];
  let isLoading =true;
  let error;

  const url = "http://localhost:8000/sucursales"

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Error al obtener todas las sucursales');
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