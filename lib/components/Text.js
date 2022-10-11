'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Text;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _PropTypes = require('../PropTypes');

var _PropTypes2 = _interopRequireDefault(_PropTypes);

var _includeDataProps = require('../includeDataProps');

var _includeDataProps2 = _interopRequireDefault(_includeDataProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Text(props) {
  return _react2.default.createElement(
    'div',
    {
      style: _extends({}, props.padding, props.background, {
        width: props.outerWidth
      })
    },
    _react2.default.createElement('div', _extends({
      style: _extends({
        width: props.width,
        height: props.height
      }, props.style)
    }, (0, _includeDataProps2.default)(props), {
      dangerouslySetInnerHTML: { __html: props.children }
    }))
  );
}

Text.propTypes = {
  width: _propTypes2.default.string,
  height: _propTypes2.default.string,
  style: _PropTypes2.default.style,
  children: _propTypes2.default.node
};

Text.defaultProps = {
  width: '0',
  height: '0',
  style: undefined,
  children: undefined,
  padding: {}
};