import DivisionTable from './DivisionTable'

const NLEastStandings = (props) => {

  const division = {title: 'NL East', division: 'NL East'}

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

export default NLEastStandings
