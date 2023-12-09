import { useState, useEffect } from "react";
import { fetchPrestamos } from "../api/prestamo";

import PrestamoPendiente from "../components/empleados/PrestamoPendiente";
import PrestamoAprobado from "../components/empleados/PrestamoAprobado";
import PrestamoDesaprobado from "../components/empleados/PrestamoDesaprobado";

export default function Empleado() {
    // eslint-disable-next-line no-unused-vars
    const [prestamos, setPrestamos] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const result = await fetchPrestamos();
            setPrestamos(result);
        };

        fetchData();
    }, []);

    const [listado, setListado] = useState();
    useEffect(() =>{
        const list = prestamos.map((e) => {
            if (e.estado === "Pendiente") {
                return <PrestamoPendiente key={e.id} Prestamo={e} />;
            } else if (e.estado === "Aprobado") {
                return <PrestamoAprobado key={e.id} Prestamo={e} />;
            } else {
                return <PrestamoDesaprobado key={e.id} Prestamo={e} />;
            }
        });
        setListado(list);
    }, [prestamos])
    
    return <div>{listado}</div>;
}
