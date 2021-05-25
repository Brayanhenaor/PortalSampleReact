import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';

export const Glosary = ({title, description, idTerm}) => {
    return (
        <div class="card">
            <h2><Link to={`/ciclo#${idTerm}`}>{title}</Link></h2>
            <p class="font">{description}</p>
        </div>
    )
}
