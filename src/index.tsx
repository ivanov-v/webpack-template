import * as React from 'react';
import {Component} from 'react';
import {hello} from './hello';
import icons from './assets/images/icons.png';
console.log(icons);

hello('hello');

class App extends Component {
    render() {
        return (
            <div>App component</div>
        );
    }
}
