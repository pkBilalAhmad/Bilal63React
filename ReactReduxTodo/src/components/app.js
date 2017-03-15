import React, { Component } from 'react';
import Todos from '../container/todos'
import Data from "../container/data.js"
class App extends Component {
    render() {
        return (
            <div>
                Hello From Component App
                <Todos />
                <Data />
            </div>
        );
    }
}
export default App;