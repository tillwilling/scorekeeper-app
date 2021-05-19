import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

Player.propTypes = {
  name: PropTypes.string,
  score: PropTypes.number,
  onMinus: PropTypes.func.isRequired,
  onPlus: PropTypes.func.isRequired,
}
export default function Player({ name, score, onMinus, onPlus }) {
  return (
    <Wrapper>
      {name}{' '}
      <div>
        <button onClick={onMinus}>-</button>
        <output>{score}</output>
        <button onClick={onPlus}>+</button>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  div {
    display: flex;
    gap: 10px;
    align-items: center;
  }
  button:first-child {
    background-color: hotpink;
  }
  output {
    width: 3ch;
    text-align: right;
  }
`
