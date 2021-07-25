import React from 'react'

const NLCentralStandings = (props) => {

return(
    <>
    <h1>NL Central</h1>
    {
      props.data.map((team, i) => {
        const key = i + Date.now() + team.team.name
        if ( team.group.name === 'NL Central' ) {
          return(
            <h2 key={key}>{team.team.name}</h2>
          )
        }
      })
    }
    </>
  )
}

export default NLCentralStandings
