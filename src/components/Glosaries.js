import React from 'react'
import { Glosary } from './Glosary'

export const Glosaries = ({glosaries}) => {
    return (
        <div class="container grid-container-card"id="glosary_content">
            {
                glosaries.map(glosary =>
                  <Glosary {...glosary}/>)
            }  

        </div>
    )
}
