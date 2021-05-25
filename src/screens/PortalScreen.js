import React from 'react';
import { Cards } from '../components/Cards';

const cards = [
    {
        title : 'Acerca de nosotros',
        description : 'El Instituto Técnico Universitario Jesús Obrero, ha creado este portal web debido a que el desarrollo de aplicaciones web es una disciplina en constante crecimiento en la industria del software y es el perfil "por defecto" del TSU en Informática egresado del IUJO. Es preciso resaltar que tiene como objetivo compartir información relevante a los estudiantes sobre este tema para que puedan familiarizarse con el mismo.',
        image : './img/estudiante.png'
    },
    {
        title : 'Ayuda',
        description : 'Este sitio web es muy sencillo de utilizar, en la parte superior  izquierda encontrarán la barra de navegación. Donde esta IUJO CATIA es donde se encuentran ahora, la segunda opción de información al colocarse sobre ella desplegara las 3 páginas informativas que posee este portal (La que le interese ingresar le dará clic y lo llevara hacia donde se encuentra lo que busca). Es relevante mencionar que cada una de esas 3 páginas contiene una sección al final para comentar su opinión sobre el tema, solo debe ingresar su nombre y apellido, seguidamente su comentario y una vez hecho eso le da clic al botón enviar para publicarlo. La última opción del menú llamada Glosario lo llevará al glosario de términos de todos los puntos que se hablan, si desea leer más sobre algún tema en específico  le da clic al título correspondiente y lo llevara exactamente en donde se encuentra.',
        image : './img/confundido.jpg'
    },
    {
        title : 'Opinión del Desarrollador Web',
        description : 'El Instituto Técnico Universitario Jesús Obrero, ha creado este portal web debido a que el desarrollo de aplicaciones web es una disciplina en constante crecimiento en la industria del software y es el perfil "por defecto" del TSU en Informática egresado del IUJO. Es preciso resaltar que tiene como objetivo compartir información relevante a los estudiantes sobre este tema para que puedan familiarizarse con el mismo.',
        image : './img/opinion.jpg'
    }
]

export const PortalScreen = () => {
    return (
        <>
            <div className="header">
                <h1>Portal</h1>
            </div>

            <div className="container">

                <Cards cards={cards}/>

                <div className="content"> 
                    <div align="center"> <h1 id="r1">Referencias Bibliográficas </h1> </div>

                    <p align="justify">&nbsp &nbsp &nbsp<br/>Sites.  (2015) Arquitectura de las aplicaciones Web. Recuperado en (Marzo de 2015) de:  https://sites.google.com/site/creaciondesitioweb84/arquitectura-de-las-aplicaciones-web#:~:text=Las%20aplicaciones%20web%20se%20basan,funcionalidades%20de%20la%20parte%20servidor.<br/></p>
                    <p align="justify">&nbsp &nbsp <br/>pmy-mooc. (2021)  DESARROLLO DE APLICACIONES WEB: CONCEPTOS BÁSICOS. Recuperado en (Abril de 2020) de: https://www.my-mooc.com/es/mooc/desarrollo-de-aplicaciones-web-conceptos-basicos/#:~:text=Un%20desarrollador%20de%20aplicaciones%20web,la%20interfaz%20de%20usuario%20y<br/></p>
                    <p align="justify">&nbsp &nbsp &nbsp<br/>Berzal F. (2008) El ciclo de vida. Recuperado en (Febrero de 2008) de: http://flanagan.ugr.es/docencia/2005-2006/2/apuntes/ciclovida.pdf.<br/></p>
                    <p align="justify">&nbsp &nbsp &nbsp<br/>ninweb. (2017) Conceptos Básicos. Recuperado en (abril de 2017) de: https://www.ninweb.net/desarrollo-web-conceptos-basicos/ <br/></p>
                    <p align="justify">&nbsp &nbsp &nbsp<br/>arsys. (2017) Flujo de Trabajo. Recuperado en (Agosto de 2017) de: https://www.arsys.es/blog/programacion/flujo-trabajo-paginasweb-aplicacionesweb/<br/></p>
                    <p align="justify">&nbsp &nbsp &nbsp<br/>desarrolloweb. (2017) Flujo de Trabajo. Recuperado en (Abril de 2017) de: https://desarrolloweb.com/articulos/flujo-trabajo-habitual-diseno-web-apps.html<br/></p>
                    <p align="justify">&nbsp &nbsp &nbsp<br/>EDteam. (2019) Cuales son los roles en el desarrollo web. Recuperado en  (Octubre de 2019) de: https://ed.team/blog/cuales-son-los-roles-en-el-desarrollo-web<br/></p>
                    <p align="justify">&nbsp &nbsp &nbsp<br/>Bloginterdominios. (2021) Tendencias de desarrollo web. Recuperado en (Enero de 2021) de: https://blog.interdominios.com/7-tendencias-de-desarrollo-web-que-se-esperan-en-2021/<br/></p>
                    <p align="justify">&nbsp &nbsp &nbsp<br/>Programacionwebisc. (2019) Metodologías para el desarrollo de aplicaciones Web. Recuperado en (Mayo de 2019) de: https://programacionwebisc.wordpress.com/2-5-metodologias-para-el-desarrollo-de-aplicaciones-web/?fbclid=IwAR0DVswfvn5ZEYKSy02ZJ1h7Trj8cbFun6SPHsYn38muZ1ET1dBf9gNgf-4<br/></p>
                    <p align="justify">&nbsp &nbsp &nbsp<br/>Molina J. (2018) METODOLOGÍAS DE DESARROLLO EN APLICACIONES WEB. Recuperado en (Agosto de 2018) de: http://arje.bc.uc.edu.ve/arj21/art16.pdf<br/></p>
                    <p align="justify">&nbsp &nbsp &nbsp<br/>Escalona M. (2001) Metodologías. Recuperado en (Octubre de 2001) de: http://www.lsi.us.es/docs/informes/EstadoActual.pdf<br/></p>
                </div>

            </div>

        </>
    )
}
