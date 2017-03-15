import React, { Component } from 'react'
import ReactDOM from 'react-dom'
var root = document.getElementById('root')


class NewTxt extends Component {
  componentWillReceiveProps(nextProps) {
    var newEle = document.createElement("div")
    var textNode = document.createTextNode(this.props.txt)
    newEle.appendChild(textNode)
    var exe = document.getElementById('root')
    exe.appendChild(newEle)
  }
  render() {
    return (
      <div>
        <h2>{this.props.txt}</h2>
        <h1>{this.props.txt}</h1>
      </div>
    );
  }
}
class Txt extends Component {
  constructor(props) {
    super(props);
    this.state = { text: this.props.text }
  }
  change(e) {
    this.setState({
      text: e.target.value
    });
  }
  render() {
    return (
      <div>
        <input type="text" value={this.state.text} onChange={this.change.bind(this)} />
        <NewTxt txt={this.state.text} />
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>hello
            <Txt text={this.props.name} />
      </div>
    );
  }
}
ReactDOM.render(
  <App name="Bilal Ahmad" />,
  root
)