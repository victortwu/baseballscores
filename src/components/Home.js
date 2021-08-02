import React, { useState, useEffect } from 'react'
import griffey from '../images/griffey.png'
import ichiro from '../images/ichiro.png'
import felix from '../images/felix.png'
import '../App.css'

const Home = (props) => {

  const wholeDate = new Date()
  const year = wholeDate.getFullYear()
  const m = `${wholeDate.getMonth() + 1}`
  const d = `${wholeDate.getDate()}`
  const month = (m.length < 2) ? '0' + m : m
  const day = (d.length < 2) ? '0' + d : d
  // accesses today's date in YYYY-MM-DD format
  const todayDateFormat = `${year}-${month}-${day}`

  const [data, setData] = useState([])

  const query = `games?league=1&season=${year}&date=`

  const getScore = (date) => {
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
    const abort = new AbortController()
    getScore(todayDateFormat)
    return ()=> abort.abort()
  }, [data])

const winnerStyle = {
  color: '#42eff5',
  backgroundColor: 'rgba(0,0,0,.4)',
  borderRadius: '5px'
}

const scoreStyle = {
  color: '#42eff5',
  backgroundColor: 'rgba(255,255,255,.7)',
  borderRadius: '5px'
}

const arrow = `<`

  return(

    <div className='homeMain'>
    {(data.length === 0) ? <h3>No score right now...</h3> : <h1>Today's Score</h1>}




        <div className='homeScoreBoxContainer'>
            <div className='felix'><img src={felix}/></div>
            <div className='griffey'><img src={griffey}/></div>
            <div className='ichiro'><img src={ichiro}/></div>
            {
              data.map(game=> {
                if ( game.teams.away.name === 'Seattle Mariners' || game.teams.home.name === 'Seattle Mariners') {
                  const awayWin = game.status.long === 'Finished' && game.scores.away.total > game.scores.home.total

                  const homeWin = game.status.long === 'Finished' && game.scores.home.total > game.scores.away.total

                  let awayScore
                  awayWin ? awayScore = <td style={winnerStyle}>{game.scores.away.total}<span>{arrow}</span></td>
                          : awayScore = <td style={scoreStyle}>{game.scores.away.total}</td>

                  let homeScore
                  homeWin ? homeScore = <td style={winnerStyle}>{game.scores.home.total}<span>{arrow}</span></td>
                          : homeScore = <td style={scoreStyle}>{game.scores.home.total}</td>
                  return(
                    <div className='homeScoreBox' key={game.id}>
                      <table>
                        <tbody>
                          <tr>
                            <td id='logoCell'><img src={game.teams.away.logo}/></td>
                            <td id='teamNameCell'>{game.teams.away.name}</td>
                            <td>{awayScore}</td>
                            <td>{game.status.long}</td>
                          </tr>
                          <tr>
                            <td id='logoCell'><img src={game.teams.home.logo}/></td>
                            <td id='teamNameCell'>{game.teams.home.name}</td>
                            <td>{homeScore}</td>
                            <td>{game.time}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  )
                }


              })
            }
        </div>
    </div>



  )
}

export default Home
