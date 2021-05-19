import './GameForm.css'
import PropTypes from 'prop-types'

GameForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default function GameForm({ onSubmit }) {
  return (
    <form className="GameForm" onSubmit={handleSubmit}>
      <label>
        Name of game:
        <input name="name" type="text" placeholder="e.g. Carcasonne" />
      </label>
    </form>
  )

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const input = form.elements.name
    onSubmit(input.value)
    form.reset()
    input.focus()
  }
}
