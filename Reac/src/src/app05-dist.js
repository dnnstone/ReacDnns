'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var Pregunta = function (_React$Component) {
    _inherits(Pregunta, _React$Component);

    function Pregunta(props) {
        _classCallCheck(this, Pregunta);

        var _this = _possibleConstructorReturn(this, (Pregunta.__proto__ || Object.getPrototypeOf(Pregunta)).call(this, props));

        _this.upCount = function (e) {
            e.preventDefault();
            _this.setFocus(function (prevCount) {
                this.count = prevCount + 1;
                console.log(this.count);
                return this.state[this.count];
            });
        };

        _this.downCount = function (e) {
            e.preventDefault();
            _this.setState(function (prevState) {
                if (prevState.count >= 1) {
                    return {
                        count: prevState.count - 1
                    };
                }
            });
        };

        _this.NextQuestion = function (e) {
            e.preventDefault();
            _this.setState({ count: 0 });
        };

        _this.state = [{
            pregunta: 'la Primera pregunta es primer multiplo de 5 es en numeros naturales',
            respuesta1: ' el valor es 15',
            respuesta2: ' el valor es 5',
            respuesta3: ' el valor es 35',
            respuesta4: ' el valor es 25'
        }, {
            pregunta: 'la Segunda pregunta es primer multiplo de 5 es en numeros naturales',
            respuesta1: ' el valor es 5',
            respuesta2: ' el valor es 55',
            respuesta3: ' el valor es 15',
            respuesta4: ' el valor es 25'
        }];
        _this.count = 0;
        _this.focus = _this.state[_this.count];
        //        this.state={
        //            pregunta:'la Tercera pregunta es primer multiplo de 5 es en numeros naturales',
        //            respuesta1:' el valor es 5',
        //            respuesta2:' el valor es 55',
        //            respuesta3:' el valor es 15',
        //            respuesta4:' el valor es 25'
        //        }
        return _this;
    }

    _createClass(Pregunta, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'pregunta' },
                React.createElement(
                    'div',
                    { className: 'texto' },
                    ' ',
                    this.focus.pregunta
                ),
                React.createElement(
                    'div',
                    { className: 'alternativas' },
                    React.createElement(
                        'div',
                        { className: 'alternativa A' },
                        React.createElement(
                            'a',
                            { href: '#', className: 'upCount' },
                            this.focus.respuesta1
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'alternativa B' },
                        React.createElement(
                            'a',
                            { href: '#', className: 'upCount' },
                            this.focus.respuesta2
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'alternativa C' },
                        React.createElement(
                            'a',
                            { href: '#', className: 'upCount' },
                            this.focus.respuesta3
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'alternativa D' },
                        React.createElement(
                            'a',
                            { href: '#', className: 'upCount' },
                            this.focus.respuesta4
                        )
                    ),
                    React.createElement(
                        'button',
                        { type: 'button', className: 'boton D', disabled: 'enabled' },
                        'Cerrar'
                    ),
                    React.createElement(
                        'button',
                        { type: 'button', className: 'boton D', onClick: this.upCount },
                        'Continuar'
                    )
                )
            );
        }
    }]);

    return Pregunta;
}(React.Component);

ReactDOM.render(React.createElement(Pregunta, null), document.getElementById('app'));