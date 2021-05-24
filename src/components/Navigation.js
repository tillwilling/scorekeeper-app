import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Button from './Button'
import { NavLink } from 'react-router-dom'

Navigation.propTypes = {
  pages: PropTypes.arrayOf(
    PropTypes.shape({ title: PropTypes.string, id: PropTypes.string })
  ),
}
export default function Navigation({ pages }) {
  return (
    <Nav>
      {pages.map(({ title, id, disabled }) => (
        <NavButton
          exact
          component={NavLink}
          to={id}
          key={id}
          disabled={disabled}
        >
          {title}
        </NavButton>
      ))}
    </Nav>
  )
}

const Nav = styled.nav`
  display: flex;
`

const NavButton = styled(Button)`
  border-radius: 0;
  width: 100%inherit;
`
