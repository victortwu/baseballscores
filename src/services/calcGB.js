export const calcGB = (pos, wins, loses, firstPlace) => {

  const firstWins = firstPlace[0].games.win.total
  const firstLoses = firstPlace[0].games.lose.total

  if (pos === 1) {
      return '--'
  }

  const firstDiff = firstWins - firstLoses
  const trailingDiff = wins - loses
  const difference = firstDiff - trailingDiff

  return difference / 2

}
