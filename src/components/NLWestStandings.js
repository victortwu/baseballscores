import React from 'react'

const NLWestStandings = (props) => {

return(
    <>
    <h1>NL West</h1>
    {
      props.data.map((team, i) => {
        const key = i + Date.now() + team.team.name
        if ( team.group.name === 'NL West' ) {
          return(
            <h2 key={key}>{team.team.name}</h2>
          )
        }
      })
    }
    </>
  )
}

export default NLWestStandings
