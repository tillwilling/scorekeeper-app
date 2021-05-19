import react from 'react'
import History from './History'

export default {
  title: 'History',
  component: History,
}

const Template = args => <History {...args} />

export const Default = Template.bind({})
Default.args = {
  nameOfGame: 'Carcasonne',
  players: [
    { name: 'John Doe', score: 40 },
    { name: 'Jane Doe', score: 30 },
  ],
}
