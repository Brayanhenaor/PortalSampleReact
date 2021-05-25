import React from 'react'

export const Card = ({title, description, image, sample, id}) => {
    return (
        <div className="content"> 
            <div align="center"> <h2 id={id}>{title}</h2> </div>

            <p align="justify">{description}</p>
            <img src={image}  class="centered_image"></img>

            {
                sample && (
                <>
                    <h3>Ejemplo</h3>
                        <p align="justify">{sample.text}</p>
                    <img src={sample.image}  className="centered_image"></img>
                </>)
            }
        </div>
    )
}
