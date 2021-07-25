import React, { useState, useEffect } from 'react'
import ALWestStandings from './ALWestStandings'
import ALEastStandings from './ALEastStandings'
import ALCentralStandings from './ALCentralStandings'
import NLWestStandings from './NLWestStandings'
import NLEastStandings from './NLEastStandings'
import NLCentralStandings from './NLCentralStandings'



const Standings = () => {

    const baseURL = "https://api-baseball.p.rapidapi.com/standings?league=1&season="
    let year = new Date().getFullYear()
    const apiKey = "ee67489d8cmsh29097b32d44f898p17138bjsnfac4ccc33688"

    const [data, setData] = useState([])

    const getStandings =()=> {
      fetch( baseURL + year, {
        method: 'GET',
        headers: {
          'x-rapidapi-key': apiKey,
          'x-rapidapi-host': 'api-baseball.p.rapidapi.com'
        }
      })
      .then(res => {
        return res.json()
      })
      .then(json => {
        setData(json.response[0])
      })
      .catch(err => {console.error(err)})
    }


    useEffect(()=> {
      getStandings()
    }, [])


  return(
    <>
    <h1>AMERICAN LEAGUE</h1>
    <ALWestStandings data={data}/>
    <ALEastStandings data={data}/>
    <ALCentralStandings data={data}/>
    <h1>NATIONAL LEAGUE</h1>
    <NLWestStandings data={data}/>
    <NLEastStandings data={data}/>
    <NLCentralStandings data={data}/>
    </>
  )
}

export default Standings
