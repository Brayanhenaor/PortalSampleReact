import React from 'react'
import { Glosaries } from '../components/Glosaries'

const glosaries = [
    {
        idTerm : 'c1',
        title : 'Ciclo de vida',
        description : 'comprende una serie de etapas entre las que se encuentran las siguientes: - Planificación - Análisis - Diseño - Implementación - Pruebas - Instalación o despliegue - Uso y mantenimiento.'
    },
    {
        idTerm : 'c2',
        title : 'Planificación',
        description : 'es necesario realizar una serie de tareas previas que influirán decisivamente en la finalización con éxito del proyecto.'
    }
]
export const GlosaryScreen = () => {
    return (
        <>
            <div className="header">
                <h1>Glosario de Terminos</h1>
            </div>


            <div className="container">

                <Glosaries glosaries={glosaries}/>

            </div>
            
        </>
    )
}
