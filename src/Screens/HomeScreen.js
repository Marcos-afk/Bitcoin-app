import React from 'react'

function HomeScreen(){
    return(
        <div>
            <div className="row top">
                <div className="column2">
                        <ul className="text">
                            <li>
                            <h1>O que é bitcoin ?</h1>
                            <p>
                            O Bitcoin é uma criptomoeda descentralizada, sendo um dinheiro eletrônico para transações ponto-a-ponto. De modo mais simples, podemos dizer que é uma moeda eletrônica que pode ser usada para adquirir qualquer serviço, produto ou qualquer outra coisa em estabelecimentos que aceitem ser pagos com ele. O Bitcoin foi a primeira moeda criada desse tipo, ele é totalmente digital e não possui cédulas ou moedas. Como citado anteriormente, o Bitcoin é descentralizado, isso quer dizer que nenhum banco ou governo o regula, além disso, é possível comprar e receber Bitcoins sem nenhum intermediário, como bancos ou emissores cartões de créditos, tudo é feito a partir das carteiras digitais dos usuários. Em acréscimo a tudo isso, o Bitcoin é uma moeda limitada, isso significa que diferente de moedas tradicionais, como o real ou dólar, que podem ser emitidas conforme a necessidade dos países, o Bitcoin tem um limite de circulação, seu código foi criado de forma que só permitisse a emissão de 21 milhões de moedas. Até 2019 cerca de 19 milhões de moedas já haviam sido emitidas.
                            </p>
                            </li>
                            <li>
                                <h1>Como o bitcoin funciona?</h1>
                                <p>
                                Para entendermos como o Bitcoin funciona é necessário saber que as suas transações são feitas na internet em uma rede própria da moeda, o blockchain. Por sua vez, o blockchain é uma espécie de sistema que permite rastrear e receber algumas informações pela internet, são alguns pedaços de códigos gerados virtualmente que transportam informações conectadas. Obviamente a utilidade do blockchain não se resume a isso, o mesmo pode ser usado para validar documentos, contratos, trocas de ações, etc. Apesar disso tudo, as informações de participantes da criptomoeda são anônimas. Após validadas, as transações são aninhadas em blocos - de transação - a cada 10 minutos, quando novos blocos são criados. Devido a essa validação periódica, até então, não é possível fraudar bitcoin. Os bitcoins dos usuários ficam armazenados em suas carteiras digitais, onde transações e o acesso à moeda torna-se possível, são, em suma, programas de celulares e computadores. Já para determinar o valor de um bitcoin, a criptomoeda já se torna mais próxima das moedas que estamos habituados. Como todas as moedas, o bitcoin sofre de variações diárias e segue a lei da oferta e demanda - quanto maior a procura, mais caro torna-se a unidade, e vice-versa. Porém, apesar dessa semelhança, a variação que o Bitcoin pode sofrer é muito maior que das moedas convencionais, visto que a criptomoeda, diferente das moedas tradicionais, é limitada e sofre de altíssima demanda. Devido a notoriedade da moeda, a popularização de carteiras digitais e o surgimento de diversas corretoras de bitcoin, a busca pela moeda aumentou, o que fez com que a sua cotação subisse ainda mais. Vale ressaltar que o bitcoin segue a referência do dólar, assim, qualquer oscilação no valor da moeda norte-americana pode impactar diretamente no valor do bitcoin em território brasileiro.
                                </p>
                            </li>
                            <li>
                                <h1>Referências</h1>
                                <p>
                                    <a href="https://blog.nubank.com.br/o-que-e-bitcoin/https://foxbit.com.br/o-que-e-bitcoin/"  rel="noreferrer" target="_blank">https://blog.nubank.com.br/o-que-e-bitcoin/</a>
                                </p>
                                <p>
                                <a href="https://foxbit.com.br/o-que-e-bitcoin/"  rel="noreferrer" target="_blank">https://foxbit.com.br/o-que-e-bitcoin/</a>
                                </p>
                            </li>
                        </ul>
                </div>
                <div className="column1">
                    <div className="card card-body">
                                <h2>Vídeo explicativo</h2>
                                <br/>
                                <video className="videos" controls>
                                    <source src="videos/videoplayback.mp4" type="video/mp4"></source>
                                </video>
                                <br/>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HomeScreen