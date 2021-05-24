import { useState } from 'react'
import styled from 'styled-components/macro'
import Navigation from './components/Navigation'
import CreatePage from './pages/CreatePage'
import GamePage from './pages/GamePage'
import HistoryPage from './pages/HistoryPage'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

export default function App() {
  const [history, setHistory] = useState([])
  const [players, setPlayers] = useState([])
  const [nameOfGame, setNameOfGame] = useState('')

  return (
    <Router>
      <AppGrid>
        <Switch>
          <Route exact path="/">
            <CreatePage onSubmit={handleSubmit} />
          </Route>
          <Route path="/game">
            <GamePage
              onResetScore={resetScores}
              onEndGame={handleEndGame}
              onPlayerUpdate={updateScore}
              nameOfGame={nameOfGame}
              players={players}
            />
          </Route>
          <Route path="/history">
            <HistoryPage games={history} />
          </Route>
        </Switch>
        <Route paths={['/', 'history']}>
          <Navigation
            pages={[
              { title: 'Create', id: '/' },
              { title: 'History', id: 'history' },
            ]}
          />
        </Route>
      </AppGrid>
    </Router>
  )

  function handleEndGame() {
    setHistory([{ players, nameOfGame }, ...history])
  }

  function handleSubmit({ players, nameOfGame }) {
    setPlayers(players)
    setNameOfGame(nameOfGame)
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
