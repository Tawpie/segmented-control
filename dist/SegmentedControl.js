'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

require('./SegmentedControl.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SegmentedControl = _react2.default.createClass({
  displayName: 'SegmentedControl',

  propTypes: {
    name: _react.PropTypes.string.isRequired,
    options: _react.PropTypes.array.isRequired,
    style: _react.PropTypes.object,
    setValue: _react.PropTypes.func
  },

  componentWillMount: function componentWillMount() {
    var defaultOption = _lodash2.default.find(this.props.options, { default: true });
    this.setValue(defaultOption.value);
  },
  setValue: function setValue(val) {
    this.props.setValue && this.props.setValue(val);
  },
  render: function render() {
    var _this = this;

    var getId = function getId(option) {
      return _this.props.name + option.value;
    };

    var defaultStyle = {
      width: '100%'
    };

    var style = _lodash2.default.extend(defaultStyle, this.props.style);

    return _react2.default.createElement(
      'div',
      {
        className: 'segmented-control',
        style: style
      },
      this.props.options.map(function (option) {
        return _react2.default.createElement('input', {
          key: getId(option),
          type: 'radio',
          name: _this.props.name,
          id: getId(option),
          onChange: function onChange() {
            return _this.setValue(option.value);
          },
          defaultChecked: option.default,
          disabled: option.disabled
        });
      }),
      this.props.options.map(function (option) {
        return _react2.default.createElement(
          'label',
          {
            key: getId(option),
            htmlFor: getId(option),
            'data-value': option.label
          },
          option.label
        );
      })
    );
  }
});

exports.default = SegmentedControl;