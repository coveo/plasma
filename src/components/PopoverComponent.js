"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var React = require('react');
var ReactDOM = require('react-dom');
var react_tether_1 = require('react-tether');
var PopoverComponent = (function (_super) {
    __extends(PopoverComponent, _super);
    function PopoverComponent() {
        var _this = this;
        _super.apply(this, arguments);
        this.refs = {};
        // Using a fat arrow function instead of a methot here to bind it to context and to make sure we have the same listener for both
        // addEventListener and removeEventListener and therefore prevent leaking listeners.
        this.handleDocumentClick = function (event) {
            var tetherToggle = ReactDOM.findDOMNode(_this.refs.tetherToggle);
            var tetherElement = ReactDOM.findDOMNode(_this.refs.tetherElement);
            var outsideTetherToggle = tetherToggle ? !tetherToggle.contains(event.target) : true;
            var outsideTetherElement = tetherElement ? !tetherElement.contains(event.target) : true;
            if (outsideTetherElement && outsideTetherToggle) {
                _this.props.toggleOpenedTetherElement(false);
            }
        };
    }
    PopoverComponent.prototype.componentDidMount = function () {
        document.addEventListener('click', this.handleDocumentClick, true);
    };
    PopoverComponent.prototype.componentWillUnmount = function () {
        document.removeEventListener('click', this.handleDocumentClick, true);
    };
    PopoverComponent.prototype.render = function () {
        var tetherToggle = this.props.children[0];
        var tetherElement = this.props.children[1];
        return (<react_tether_1.TetherComponent {..._.omit(this.props, 'children')}>
        <div ref='tetherToggle'>
          {tetherToggle}
        </div>
        {tetherElement &&
            <div ref='tetherElement'>
            {tetherElement}
          </div>}
      </react_tether_1.TetherComponent>);
    };
    return PopoverComponent;
}(React.Component));
exports.PopoverComponent = PopoverComponent;
