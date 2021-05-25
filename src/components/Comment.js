import React from 'react'

export const Comment = ({name, message}) => {
    return (
        <div className="comentary"> 
            <div className="comment_title">
                <h3><strong>{name}</strong></h3>
            </div>
            <div className="comment_body">
                <p>{message}</p>
            </div>
        </div>
    )
}
