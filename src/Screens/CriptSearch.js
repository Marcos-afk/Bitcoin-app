import React, { useEffect, useState } from 'react'
import axios from 'axios'

function CriptSearch(){

    const[coins, setCoins] = useState([])
  
    useEffect(() =>{
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=false').then( response =>{
            setCoins(response.data)
        }).catch(error =>{
            alert('Ocorreu uma exceção : ' + error)
        })
    }, [])

    return(
              <div className="coin-app">
                  {
                      coins.map( coin => {
                          return(
                            <div className='coin-container' key={coin.id}>
                            <div className='coin-row'>
                              <div className='coin'>
                                <img src={coin.image} alt={coin.name} />
                                <h1>{coin.name}</h1>
                                <p className='coin-symbol'>{coin.symbol}</p>
                              </div>
                              <div className='coin-data'>
                                <p className='coin-price'>US${coin.current_price}</p>
                                <p className='coin-volume'>US${coin.total_volume.toLocaleString()}</p>
                      
                                {coin.price_change_percentage_24h < 0 ? (
                                  <p className='coin-percent red'>{coin.price_change_percentage_24h.toFixed(2)}%</p>
                                ) : (
                                  <p className='coin-percent green'>{coin.price_change_percentage_24h.toFixed(2)}%</p>
                                )}
                      
                                <p className='coin-marketcap'>
                                  Mkt Cap: US${coin.market_cap.toLocaleString()}
                                </p>
                              </div>
                            </div>
                          </div>
                        
                      )})
                  }
              </div>
              
    )
}

export default CriptSearch


