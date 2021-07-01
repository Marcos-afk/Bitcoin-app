import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Coin from '../Components/Cript'

function CriptSearch(){

    const[coins, setCoins] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() =>{
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=false').then( response =>{
            setCoins(response.data)
        }).catch(error =>{
            alert('Ocorreu uma exceção : ' + error)
        })
    }, [])

    const filteredCoins = coins.filter( coin => coin.name.toLowerCase().includes(search.toLowerCase()))
    return(
              <div className="coin-app">
                  <div className="coin-search">
                      <h1 className="coin-text">Pesquisar</h1>
                      <form>
                          <input type="text"  className='coin-input' placeholder="Pesquisar" onChange={e => { setSearch(e.target.value)}}/>
                      </form>

                  </div>
                  {
                      filteredCoins.map( coin => {
                          return(
                          <Coin 
                          key={coin.id}
                          name={coin.name}
                          price={coin.current_price}
                          symbol={coin.symbol}
                          marketcap={coin.total_volume}
                          volume={coin.market_cap}
                          image={coin.image}
                          priceChange={coin.price_change_percentage_24h}
                          />
                      )})
                  }
              </div>
              
    )
}

export default CriptSearch
