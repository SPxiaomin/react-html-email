import React from 'react'
import PropTypes from 'prop-types'
import EmailPropTypes from '../PropTypes'
import includeDataProps from '../includeDataProps'

export default function Text(props) {
  return (
    <div
      style={{
        ...props.padding,
        ...props.background,
        width: props.outerWidth,
      }}
    >
      <div
        style={{
          width: props.width,
          height: props.height,
          ...props.style,
        }}
        {...includeDataProps(props)}
        dangerouslySetInnerHTML={{ __html: props.children }}
      />
    </div>
  )
}

Text.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  style: EmailPropTypes.style,
  children: PropTypes.node,
}

Text.defaultProps = {
  width: '0',
  height: '0',
  style: undefined,
  children: undefined,
  padding: {},
}
