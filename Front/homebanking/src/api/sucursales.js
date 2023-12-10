export default async function getSucursales() {
  let data = [];

  const url = "http://localhost:8000/sucursales/"

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Error al obtener todas las sucursales');
    }
    const jsonData = await response.json();
    data = jsonData;
  } catch (e) {
    console.log(e);;
  }

  return data;
};