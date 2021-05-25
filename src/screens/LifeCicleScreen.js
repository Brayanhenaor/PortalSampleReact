import React, { useState } from 'react'
import { Card } from '../components/Card'
import { Cards } from '../components/Cards';
import { CommentForm } from '../components/CommentForm';
import generateId from '../helpers/generateId';

const cards = [
    {
        id : 'c1',
        title : 'Ciclo de vida',
        description : 'Es primordial comprender que su ciclo de vida comprende una serie de etapas entre las que se encuentran las siguientes: - Planificación - Análisis - Diseño - Implementación - Pruebas - Instalación o despliegue - Uso y mantenimiento.',
        image : './img/ciclovida.jpg'
    },
    {
        id : 'c2',
        title : 'Planificación',
        description : 'Antes de que se le dé oficialmente el pistoletazo de salida a un proyecto de desarrollo de un sistema de información, es necesario realizar una serie de tareas previas que influirán decisivamente en la finalización con éxito del proyecto. Estas tareas se conocen popularmente como el fuzzy front-end del proyecto al no estar sujetas a plazos.',
        image : './img/plani.jpg',
        sample : {
            text : 'Se puede apreciar un modelo básico de cómo se elabora la planificación es una estructura. Para este caso en un proyecto de software.',
            image : './img/plani2.png'
        }
    }
]

export const LifeCicleScreen = () => {
    return (
        <>

            <div className="header">
                <h1>Ciclo de vida del software</h1>
            </div>


            <div className="container">
                <Cards cards={cards}/>

                <CommentForm />

            </div>
            
        </>
    )
}
