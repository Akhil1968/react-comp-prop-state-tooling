var React = require('react');
var ReactDOM = require('react-dom');
var comp = require('./App.jsx');

ReactDOM.render(<div>
                <comp.Counter imagename="fethiye.jpg"/>
                <comp.Counter imagename="akita.jpg"/>
                </div>,
document.getElementById('mount-point'));
