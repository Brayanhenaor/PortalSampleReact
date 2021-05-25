import React from 'react'

export const Footer = () => {
    return (
        <footer>
            <div className="footer grid-container">
                <div className="contacto">
                    <h1>Iujo Catia</h1>
                    <h2>Contactanos</h2>
                    <ul>
                        <li>Tlf: +58 (212) 123 6723</li>
                        <li>iujocatia@gmail.com</li>
                        <li>Redes sociales: Facebook y Twitter @IujoCatia </li>
                    </ul>
                </div>
                <div className="aboutus">
                    <h2>Páginas vinculadas</h2>
                    <ul>
                        <li><a href="#">Aulavirtual/Interfacesweb.com</a></li>
                        <li><a href="#">Iujocatia.com</a></li>
                        
                    </ul>
                    </div>
            </div>
            <div style={{backgroundColor: 'rgb(41, 41, 41)', textAlign: 'left', padding: '10px', color: 'rgb(255, 255, 255)'}}>
                <p> Copyright 2021 - All Rights Reserved - Iujo Catia  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp    &nbsp   &nbsp &nbsp  &nbsp &nbsp   &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp     Creada por Samuel Contreras</p>
            </div>
        </footer>
    )
}
