import React from 'react';
import ReactDOM from 'react-dom';
//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
//import TextField from 'material-ui/TextField';
//import injectTapEventPlugin from 'react-tap-event-plugin';

const App = () => {
    return (
        <div className='row text-center'>
            <div className='col-sm-8 col-sm-offset-2'>
                <input className='form-control' />
            </div>
        </div>
    )

}

ReactDOM.render(<App />, document.getElementById('container'));