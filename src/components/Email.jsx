import React from 'react'
import PropTypes from 'prop-types'
import EmailPropTypes from '../PropTypes'
import Box from './Box'
import Item from './Item'
import RowItem from './RowItem'

// inspired by http://htmlemailboilerplate.com
export default function Email(props) {
  // default nested 600px wide outer table container (see http://templates.mailchimp.com/development/html/)
  return (
    <html lang={props.lang} xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{props.title}</title>
        {props.headCSS && <style type="text/css">{props.headCSS}</style>}
      </head>
      <body
        style={{
          width: '100%',
          margin: 0,
          padding: 0,
          WebkitTextSizeAdjust: '100%',
          MsTextSizeAdjust: '100%',
          ...props.bodyStyle,
        }}
      >
        <span
          className="preheader"
          style={{
            color: 'transparent',
            display: 'none',
            height: 0,
            maxHeight: 0,
            maxWidth: 0,
            opacity: 0,
            overflow: 'hidden',
            msoHide: 'all',
            visibility: 'hidden',
            width: 0,
          }}
        >{props.digest}</span>
        <table
          width="100%"
          height="100%"
          cellPadding="0"
          cellSpacing="0"
          border="0"
          bgcolor={props.bgcolor}
        >
          <tbody>
            <RowItem>
              <Item align={props.align} valign={props.valign}>
                <Box width={props.width} align="center" cellPadding={props.cellPadding} cellSpacing={props.cellSpacing} style={props.style}>
                  {props.children}
                </Box>
              </Item>
            </RowItem>
          </tbody>
        </table>
      </body>
    </html>
  )
}

Email.propTypes = {
  lang: PropTypes.string,
  title: PropTypes.string.isRequired,
  digest: PropTypes.string,
  bgcolor: PropTypes.string,
  cellPadding: PropTypes.number,
  cellSpacing: PropTypes.number,
  style: EmailPropTypes.style,
  headCSS: PropTypes.string,
  width: PropTypes.string,
  align: PropTypes.oneOf(['left', 'center', 'right']),
  valign: PropTypes.oneOf(['top', 'middle', 'bottom']),
  bodyStyle: EmailPropTypes.style,
  children: PropTypes.node,
}

Email.defaultProps = {
  digest: '',
  lang: 'en',
  width: '600',
  align: 'center',
  valign: 'top',
  bgcolor: undefined,
  cellPadding: undefined,
  cellSpacing: undefined,
  style: undefined,
  headCSS: undefined,
  bodyStyle: undefined,
  children: undefined,
}
