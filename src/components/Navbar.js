import React from 'react'
import { Link, useHistory } from 'react-router-dom'

export const Navbar = () => {
    const history = useHistory();

    const handleInfoClick = ()=>{
        history.push('/ciclo')
    }

    return (
        <div className="topnav" id="myTopnav">

            <Link to="/">IUJO CATIA</Link>

            <div className="dropdown">
                <button className="dropbtn" onClick={handleInfoClick}> Información 
                </button>
                <div className="dropdown-content">
                    <Link to="/ciclo">Ciclo de vida</Link>
                    <a href="./desarrollo.html">desarrollo de aplicaciones</a>
                    <a href="./principio.html">Metodologías </a>
                </div>
            </div> 

            <Link to="/glosary">Glosario</Link>
        </div>
    )
}
