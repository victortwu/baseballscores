import React from 'react'

const ALWestStandings = (props) => {

return(
    <>
    <h1>AL West</h1>
    {
      props.data.map((team, i) => {
          const key = i + Date.now() + team.team.name
          if ( team.group.name === 'AL West' ) {
            return(
              <h2 key={key}>{team.team.name}</h2>
            )
          }
        })
    }
    </>
  )
}

export default ALWestStandings
