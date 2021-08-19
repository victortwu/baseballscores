import { calcGB } from '../services/calcGB'

const DivisionTable =(props)=> {
  return(
    <div className='tableContainer'>

      <table>
        <tbody>
          <tr>
            <td>TEAM</td>
            <td>{''}</td>
            <td>W</td>
            <td>L</td>
            <td>Pct.</td>
            <td>GB</td>
          </tr>
          {
            props.data.map((team, i) => {
                const key = i + Date.now() + team.team.name

                if ( team.group.name === `${props.division.division}` ) {

                  return(
                    <tr key={key}>
                      <td id='logoCell'><img src={team.team.logo}/></td>
                      <td id='teamNameCell'>{team.team.name}</td>
                      <td>{team.games.win.total}</td>
                      <td>{team.games.lose.total}</td>
                      <td>{team.games.win.percentage}</td>
                      <td>{
                        calcGB(team.position,
                          team.games.win.total,
                          team.games.lose.total,
                          props.firstPlace
                          )
                      }
                      </td>
                    </tr>
                  )
                }
              })
          }
        </tbody>
      </table>

    </div>
  )
}

export default DivisionTable
