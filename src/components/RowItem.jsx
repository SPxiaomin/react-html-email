import React from 'react'
import PropTypes from 'prop-types'

export default function Item(props) {
  return (
    <tr>
      {props.children}
    </tr>
  )
}

Item.propTypes = {
  children: PropTypes.node,
}

Item.defaultProps = {
  children: undefined,
}
