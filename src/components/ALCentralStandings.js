import React from 'react'

const ALCentralStandings = (props) => {

return(
    <>
    <h1>AL Central</h1>
    {
      props.data.map((team, i) => {
         const key = i + Date.now() + team.team.name
         if ( team.group.name === 'AL Central' ) {
           return(
             <h2 key={key}>{team.team.name}</h2>
           )
         }
       })
    }
    </>
  )
}

export default ALCentralStandings
