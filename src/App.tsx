
import './App.css';
import Main from './pages/Main';
import Login from './pages/Login';
import { BrowserRouter } from 'react-router-dom';

function App() {
    let page;
    if (localStorage.getItem('user') && localStorage.getItem('token')) {
        page = <Main></Main>;
    } else {
        page = <Login></Login>
    }
    return (
        <BrowserRouter>
            {page}
        </BrowserRouter>
    );
}

export default App;
