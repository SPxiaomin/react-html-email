import React from 'react'
import PropTypes from 'prop-types'
import EmailPropTypes from '../PropTypes'
import includeDataProps from '../includeDataProps'
import A from './A'

export default function Image(props) {
  let divStyle = {}
  if (props.flex) {
    divStyle = {
      ...divStyle,
      width: '100%',
      textAlign: props.align,
      ...props.padding,
    }
  } else {
    divStyle = {
      ...divStyle,
      ...props.padding,
    }
  }

  return (
    <div
      style={divStyle}
    >
      <A
        href={props.link}
        style={{
          display: 'block',
        }}
      >
        <img
          {...includeDataProps(props)}
          alt={props.alt}
          src={props.src}
          width={props.width}
          height={props.height}
          style={{
            display: 'block',
            outline: 'none',
            border: 'none',
            textDecoration: 'none',
            ...props.style,
          }}
        />
      </A>
    </div>
  )
}

Image.propTypes = {
  flex: PropTypes.bool,
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  style: EmailPropTypes.style,
  align: PropTypes.string,
}

Image.defaultProps = {
  flex: false,
  padding: {},
  style: undefined,
  align: 'center',
}
