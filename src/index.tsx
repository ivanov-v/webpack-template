import * as React from 'react';
import {Component} from 'react';
import {hello} from './hello';

hello('hello');

class App extends Component {
    render() {
        return (
            <div>App component</div>
        );
    }
}
