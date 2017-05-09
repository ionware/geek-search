import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar'
//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
//import TextField from 'material-ui/TextField';
//import injectTapEventPlugin from 'react-tap-event-plugin';

const App = () => {
    return (
        <SearchBar />
    )

}

ReactDOM.render(<App />, document.getElementById('container'));