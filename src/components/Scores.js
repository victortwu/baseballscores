import React, { useState, useEffect } from 'react'

const Scores = (props) => {
  const wholeDate = new Date()
  const year = wholeDate.getFullYear()
  const m = `${wholeDate.getMonth() + 1}`
  const d = `${wholeDate.getDate()}`
  const month = (m.length < 2) ? '0' + m : m
  const day = (d.length < 2) ? '0' + d : d
  // accesses today's date in YYYY-MM-DD format
  const todayDateFormat = `${year}-${month}-${day}`

  const [data, setData] = useState([])
  const [newDay, setNewDay] = useState(day)
  const query = `games?league=1&season=${year}&date=`


  const getScores = (date) => {
    fetch(props.baseURL + query + date, {
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
    getScores(todayDateFormat)
  }, [])

  // function to increment date

  // this kind of works,
  const decrementDay =()=> {
    console.log('decrementDay called')

    setNewDay(newDay-1)
    console.log(newDay)
    return `${year}-${month}-${newDay}`
  }


console.log(data)
return(
  <>
    <h1>Scores</h1>

    <button onClick={()=> getScores(decrementDay())}>back</button>
    {
      data.map(game=> {

        return(
          <div key={game.id}>
            <table>
              <tbody>
                <tr>
                  <td><img src={game.teams.away.logo}/></td>
                  <td>{game.teams.away.name}</td>
                  <td>{game.scores.away.total}</td>
                  <td>{game.status.short}</td>
                </tr>
                <tr>
                  <td><img src={game.teams.home.logo}/></td>
                  <td>{game.teams.home.name}</td>
                  <td>{game.scores.home.total}</td>
                  <td>{game.time}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )

      })

    }

  </>
  )
}

export default Scores
