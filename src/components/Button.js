import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import * as React from 'react'

Button.propTypes = {
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node,
  component: PropTypes.any,
  disabled: PropTypes.bool,
}

export default function Button({
  component: Component = 'button',
  ...otherProps
}) {
  return <ButtonStyled as={Component} {...otherProps} />
}

const ButtonStyled = styled.button`
  padding: 12px;
  border: none;
  border-radius: 8px;
  text-decoration: none;
  color: inherit;
  text-align: center;
  background: ${p => (p.isActive ? 'steelblue' : '#ddd')};
  &.active {
    background: steelblue;
  }
  &[disabled] {
    opacity: 0.6;
    pointer-events: none;
  }
`
