import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { FirebaseContext } from './Store/FirebaseContext'
import Firebase from './Firebase/config';

ReactDOM.render(
    <FirebaseContext.Provider value={{Firebase}}>
        <App />
    </FirebaseContext.Provider>
    , document.getElementById('root'))
