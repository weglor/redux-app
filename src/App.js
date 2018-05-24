import React, {Component} from 'react';
import './App.css';
import Input from './Input.js';
import store from './store';


class App extends Component {
    render() {
        return (
            <div className="App">
                <Input store={store}/>
            </div>
        );
    }
}

export default App;
