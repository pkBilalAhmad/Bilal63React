import React, { Component } from 'react'
import ReactDOM from 'react-dom'
var root = document.getElementById('root')
class Txt extends Component {
  render() {
    return (
      <div>
        <h1>{
          this.props.text
        }</h1>
      </div>
    );
  }
}

class App extends Component {
  _log(methodName, args) {
    console.log(methodName, args);
  }
  componentWillUpdate() {
    alert('componentWillUpdate', arguments);
    this._log('componentWillUpdate', arguments);
  }
  componentDidUpdate() {
    alert('componentDidUpdate', arguments);
    this._log('componentDidUpdate', arguments);
  }
  componentWillMount() {
    alert('componentWillMount', arguments);
    this._log('componentWillMount', arguments);
  }
  componentDidMount() {
    alert('componentDidMount', arguments);
    this._log('componentDidMount', arguments);
  }
  componentWillUnmount() {
    alert('componentWillUnmount', arguments);
    this._log('componentWillUnmount', arguments);
  }

  constructor(props) {
    super(props);
    this.state = { text: " Bilal" }
  }
  change(e) {
    this.setState({
      text: e.target.value
    });
  }
  render() {
    return (
      <div>hello
        {alert("render")}
        <input type="text" value={this.state.text} onChange={this.change.bind(this)} />
        <Txt text={this.state.text} />
      </div>
    );
  }
}
ReactDOM.render(
  <App />,
  root
)