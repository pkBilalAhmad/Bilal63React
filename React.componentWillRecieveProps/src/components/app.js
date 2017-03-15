import React, { Component } from 'react';
import Todo from '../container/todo'
class App extends Component {
    render() {
        return (
            <div>
                Hello From Component App
                <Todo />
            </div>
        );
    }
}
export default App;