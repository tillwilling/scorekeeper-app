import { useState } from 'react'
import Player from './Player'
import Button from './Button'
import PlayerForm from './PlayerForm'

function App() {
  const [players, setPlayers] = useState([
    { name: 'John Doe', score: 20 },
    { name: 'Jane Doe', score: 120 },
  ])

  return (
    <div className="App">
      <PlayerForm onSubmit={createPlayer} />
      <ul className="App__player-list">
        {players.map((player, index) => (
          <li>
            <Player
              onMinus={() => updateScore(index, -1)}
              onPlus={() => updateScore(index, +1)}
              key={player.name}
              name={player.name}
              score={player.score}
            />
          </li>
        ))}
      </ul>

      <div className="App__buttons">
        <Button onClick={resetScores}>Reset scores</Button>
        <Button onClick={resetAll}>Reset all</Button>
      </div>
    </div>
  )

  function resetAll() {
    setPlayers([])
  }

  function resetScores() {
    setPlayers(players.map(player => ({ ...player, score: 0 })))
  }

  function updateScore(index, value) {
    const playerToUpdate = players[index]
    setPlayers([
      ...players.slice(0, index),
      { ...playerToUpdate, score: playerToUpdate.score + value },
      ...players.slice(index + 1),
    ])
  }

  function createPlayer(name) {
    setPlayers([...players, { name, score: 0 }])
  }
}

export default App
