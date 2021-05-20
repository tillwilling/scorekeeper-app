import React from 'react'
import { Default } from '../pages/CreatePage.stories'
import HistoryEntry from './Historyentry'

export default {
  title: 'HistoryEntry',
  component: HistoryEntry,
}

const Template = args => <HistoryEntry {...args} />

export const default = Template.bind({})
Default.args = {
  nameOfGame: 'Carcassonne',
  players: [
    { name: 'John Doe', score: 40 },
    { name: 'Jane Doe', score: 30 },
  ],
}
