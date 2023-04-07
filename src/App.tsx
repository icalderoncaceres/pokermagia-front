import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './pages/Main';
import { BrowserRouter } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <Main></Main>
        </BrowserRouter>
    );
}

export default App;
