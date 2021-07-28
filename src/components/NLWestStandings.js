import React from 'react'

const NLWestStandings = (props) => {

return(
  <div className='divisionContainer'>
    <h1>NL West</h1>
    <div className='tableContainer'>

      <table>
        <tbody>
          <tr>
            <td>TEAM</td>
            <td>{''}</td>
            <td>W</td>
            <td>L</td>
            <td>Pct.</td>
          </tr>
          {
            props.data.map((team, i) => {
                const key = i + Date.now() + team.team.name
                if ( team.group.name === 'NL West' ) {
                  return(
                    <tr key={key}>
                      <td>{team.team.logo}</td>
                      <td>{team.team.name}</td>
                      <td>{team.games.win.total}</td>
                      <td>{team.games.lose.total}</td>
                      <td>{team.games.win.percentage}</td>
                    </tr>


                  )
                }
              })
          }
        </tbody>
      </table>

    </div>
  </div>
  )
}

export default NLWestStandings
