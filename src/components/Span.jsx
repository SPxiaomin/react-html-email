import React from 'react'
import PropTypes from 'prop-types'
import EmailPropTypes from '../PropTypes'
import includeDataProps from '../includeDataProps'
import A from './A'

export default function Span(props) {
  const lineHeight = props.lineHeight !== undefined ? props.lineHeight : props.fontSize
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
          textAlign: props.textAlign,
        }}
      >
        <A
          href={props.link}
          style={{
            display: 'block',
          }}
        >
          <span
            {...includeDataProps(props)}
            style={{
              fontFamily: props.fontFamily,
              fontSize: props.fontSize,
              fontWeight: props.fontWeight,
              lineHeight: `${lineHeight}px`,
              color: props.color,
              ...props.style,
            }}
          >
            {props.children}
          </span>
        </A>
      </div>
    </div>
  )
}

Span.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.number,
  fontWeight: PropTypes.string,
  lineHeight: PropTypes.number,
  color: PropTypes.string,
  style: EmailPropTypes.style,
  children: PropTypes.node,
}

Span.defaultProps = {
  width: '0',
  height: '0',
  fontFamily: 'sans-serif',
  fontSize: 14,
  fontWeight: undefined,
  lineHeight: undefined,
  color: '#000',
  style: undefined,
  children: undefined,
  padding: {},
}
