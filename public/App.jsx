var React = require('react');

module.exports.Counter = React.createClass({
  plus: function(){
    this.setState({
      ht: this.state.ht + 25
    });
  },
  minus: function(){
    this.setState({
      ht: this.state.ht - 25
    });
  },
  getInitialState: function(){
     return {
       ht: 300
     }
  },
  render: function(){
    return (
      <div>
        <h3>{this.props.imagename}</h3>
        <button type="button" onClick={this.plus}>+</button>
        <button type="button" onClick={this.minus}>-</button>
        <br/>
        <img src={this.props.imagename} height={this.state.ht}></img>
      </div>
    );
  }
});
