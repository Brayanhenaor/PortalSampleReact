import React from 'react'
import generateId from '../helpers/generateId'
import { Card } from './Card'

export const Cards = ({cards}) => {
    return (
        <>
            {
                cards.map(card => <Card key={generateId}
                    {...card}/>)
            }
        </>
    )
}
