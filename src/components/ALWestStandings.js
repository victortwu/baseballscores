import DivisionTable from './DivisionTable'

const ALWestStandings = (props) => {

  const division = {title: 'AL West', division: 'AL West'}

  const firstPlace = props.data.filter(team=> {
    if (team.group.name === division.division && team.position === 1){
      return team
    }
  })

  return(
    <div className='divisionContainer'>
      <h1>{division.title}</h1>
        <DivisionTable
          division={division}
          firstPlace={firstPlace}
          data={props.data}
        />
    </div>
    )
}

export default ALWestStandings
