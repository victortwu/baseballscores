import React, { useState, useEffect } from 'react'

const Scores = (props) => {
  const wholeDate = new Date()
  const year = wholeDate.getFullYear()
  const m = `${wholeDate.getMonth() + 1}`
  const d = `${wholeDate.getDate()}`
  const month = (m.length < 2) ? '0' + m : m
  const day = (d.length < 2) ? '0' + d : d

  const dateFormat = `${year}-${month}-${day}`

  const [data, setData] = useState([])
  const query = `games?league=1&season=${year}&date=${dateFormat}`


  const getScores = () => {
    fetch(props.baseURL + query, {
      method: 'GET',
      headers: {
        'x-rapidapi-key': props.apiKey,
        'x-rapidapi-host': 'api-baseball.p.rapidapi.com'
      }
    })
    .then(res => {
      return res.json()
    })
    .then(json => {
      setData(json.response)
    })
    .catch(err => {console.error(err)})
  }

  useEffect(()=> {
    getScores()
  }, [])

  console.log(data)

return(
    <h1>Scores</h1>
  )
}

export default Scores
