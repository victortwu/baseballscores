import React from 'react'

const NLEastStandings = (props) => {

return(
    <>
    <h1>NL East</h1>
    {
      props.data.map((team, i) => {
        const key = i + Date.now() + team.team.name
        if ( team.group.name === 'NL East' ) {
          return(
            <h2 key={key}>{team.team.name}</h2>
          )
        }
      })
    }
    </>
  )
}

export default NLEastStandings
