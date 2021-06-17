import { useState } from 'react'
import styled from 'styled-components/macro'
import Navigation from './components/Navigation'
import CreatePage from './pages/CreatePage'
import GamePage from './pages/GamePage'
import HistoryPage from './pages/HistoryPage'
import { Route, Switch, useHistory } from 'react-router-dom'

export default function App() {
  const [matchHistory, setMatchHistory] = useState([])
  const [players, setPlayers] = useState([])
  const [nameOfGame, setNameOfGame] = useState('')
  const history = useHistory()

  return (
    <AppGrid>
      <Switch>
        <Route exact path="/">
          <CreatePage onSubmit={handleSubmit} />
        </Route>

        <Route path="/game">
          <GamePage
            onResetScores={resetScores}
            onEndGame={handleEndGame}
            onPlayerUpdate={updateScore}
            nameOfGame={nameOfGame}
            players={players}
          />
        </Route>

        <Route path="/history">
          <HistoryPage games={matchHistory} />
        </Route>
      </Switch>

      <Route paths={['/', 'history']}>
        <Navigation
          pages={[
            { title: 'Create', id: '/' },
            {
              title: 'History',
              id: 'history',
              disabled: !matchHistory.length,
            },
          ]}
        />
      </Route>
    </AppGrid>
  )

  function handleEndGame() {
    history.push('history')
    setMatchHistory([{ players, nameOfGame }, ...setMatchHistory])
  }

  function handleSubmit({ players, nameOfGame }) {
    setPlayers(players)
    setNameOfGame(nameOfGame)
    history.push('game')
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
}

const AppGrid = styled.div`
  display: grid;
  grid-template-rows: auto min-content;
  height: 100vh;
  padding: 12px;
  gap: 20px;
`
