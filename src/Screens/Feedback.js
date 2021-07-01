import React, { useState } from 'react'

function Feedback(){
    const [subject, setSubject] = useState('')
    const [description, setDescription] = useState('')

    const emailHandler = (e) =>{
        e.preventDefault()
        if(subject.length > 0 && description.length > 0){
           let link = "mailto:andremarcos967@gmail.com"
           + "?cc=andremarcos967@gmail.com"
           + "&subject=" + escape(subject)
           + "&body=" + escape(description)
           window.location.href = link     

           setSubject('')
           setDescription('')
        }else{
            alert('Preencha todos os campos!')
        }
    }
    return(
        <div>
            <form className="form" onSubmit={emailHandler}>
                <div>
                <h1>Preencha os campos abaixo para prosseguir</h1>
                <p>Deixe seu feedback para que possamos tornar esse ambiente mais amigável</p>
                </div>
                <div>
                    <label htmlFor="subject">Assunto</label>
                    <input type="text" id="subject" name="subject" value={subject} onChange={ e =>{ setSubject(e.target.value)}} required/>
                </div>
                <div>
                    <label htmlFor="description">Descrição</label>
                    <textarea id="describe" name="describe" rows="3" value={description} onChange={e =>{setDescription(e.target.value)}}
                    required> </textarea>
                </div>
                <br/>
                <div>
                    <button type="submit" className="button-color"> Enviar um email</button>
                </div>
            </form>
        </div>
    )
}

export default Feedback;