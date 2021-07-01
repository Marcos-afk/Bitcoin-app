import React from 'react'

function AboutUs(){
    return(
        <div>
            <div className="row top">
                    <div className="column2">
                            <ul>
                                <li>
                                <h1> Quem nós somos ?</h1>
                                <p>
                                    Estudantes do curso de ciência da computação pelo Instituto Federal de Educação, Ciência e Tecnologia do Maranhão - Campus Imperatriz.<br/>
                                    Este projeto tem por objetivo expor e explicar o funcionamento do bitcoin e pôr em prática conhecimentos adquiridos em React.js.
                                </p>
                                </li>
                                <li>
                                <h1>Contatos:</h1>
                                <p>
                                   Marcos André: andremarcos967@gmail.com <br/>
                                   &nbsp;Sherlyson Silva: sherlyson.silvagoncalves@gmail.com    
                                </p>    
                                </li>                  
                            </ul>
                    </div>
                    <div className="column1">
                        <div className="center">
                         <a href="https://www.youtube.com/user/ifmaoficial" rel="noreferrer" target="_blank"><img  className="medium" src="/IF.png" alt="Logo"/></a>   
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default AboutUs