import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

History.propTypes = {
  nameOfGame: PropTypes.string,
  players: PropTypes.arrayOf(
    PropTypes.shape({ name: PropTypes.string, score: PropTypes.number })
  ),
}
export default function History({ nameOfGame, players }) {
  return (
    <Grid>
      <Title>{nameOfGame}</Title>
      <ul>
        {players.map(players => (
          <Player key={players.name}>
            <span>{players.name}</span>
            <span>{players.score}</span>
          </Player>
        ))}
      </ul>
    </Grid>
  )
}

const Grid = styled.section`
  display: grid;
  gap: 10px;
`

const Title = styled.h2`
  font-size: 1.1.rem;
  margin: 0.2em 0;
`

const Player = styled.li`
  display: flex;
  justify-content: space-between;
`
