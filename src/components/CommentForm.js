import React, { useState } from 'react'
import { Comments } from './Comments';

const initForm = {
    name:'',
    message:''
};

export const CommentForm = () => {

    const [comments, setComments] = useState([]);

    const [form, setForm] = useState(initForm);

    const handleInputChange = ({target}) =>{
        setForm({
            ...form,
            [target.name] : target.value
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        setComments([...comments, {name : form.name, message : form.message}])
        setForm(initForm)
    }

    return (
        <>
            <div className="container">
                <div id="comentaries">
                    <br/><h1 align="center">El Iujo le gustaría saber que opinas del contenido</h1>
                    <h1> 👇 👇 👇 👇 👇 👇 👇 👇 👇 👇    Comenta     👇 👇  👇 👇 👇 👇 👇 👇 👇</h1>
                    <form id="form" onSubmit={handleSubmit}>

                        <input name="name" type="text" required placeholder="Nombre / Apellido" value={form.name} onChange={handleInputChange}/> <br/>

                        <textarea name="message" style={{height: '150px'}} required placeholder="Comentario" value={form.message} onChange={handleInputChange}></textarea>

                        <button className="submit" >Enviar</button>
                    </form>
                </div>

                <Comments comments={comments}/>

                
            </div>

            
            
        </>
    )
}
