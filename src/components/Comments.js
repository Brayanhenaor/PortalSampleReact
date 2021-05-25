import React from 'react'
import generateId from '../helpers/generateId'
import { Comment } from './Comment'

export const Comments = ({comments}) => {
    return (
        <div>
            {
                comments.map(comment => 
                    <Comment key={generateId()} {...comment}/> )
            }
        </div>
    )
}
