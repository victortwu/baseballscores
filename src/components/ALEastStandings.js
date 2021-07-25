import React from 'react'

const ALEastStandings = (props) => {

return(
    <>
    <h1>AL East</h1>
    {
      props.data.map((team, i) => {
          const key = i + Date.now() + team.team.name
          if ( team.group.name === 'AL East' ) {
            return(
              <h2 key={key}>{team.team.name}</h2>
            )
          }
        })
    }
    </>
  )
}

export default ALEastStandings
