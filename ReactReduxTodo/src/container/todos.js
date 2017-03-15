import React, { Component } from 'react';
import action from '../actions/addAction'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class Todos extends Component {
    actionFire(e) {
        e.preventDefault()        
        var inp = this.refs.input
        console.log(this.props.list, "todo component")
        this.props.todo(inp.value)
        inp.value = ''
    }
    render() {
        return (
            <div>
                <form action="" onSubmit={this.actionFire.bind(this)}>
                    <input type="text" ref="input" />
                    <button type="submit">Add Item</button> <br />
                    Hello from container
                </form>                
            </div>
        );
    }
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({ todo: action }, dispatch)
}

function mapStateToProps(state) {
    return {
        list: state.list
    }
}

export default connect(mapStateToProps, matchDispatchToProps)(Todos);