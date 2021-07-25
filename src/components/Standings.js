import React, { useState, useEffect } from 'react'

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


console.log(year)
console.log(data)
  return(
    <>
    <h1>Standings</h1>

    </>
  )
}

export default Standings
