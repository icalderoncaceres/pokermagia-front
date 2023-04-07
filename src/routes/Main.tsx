import {createBrowserRouter} from "react-router-dom"
import Home from '../containers/home/Home';
import RegisterPartyPoker from '../containers/registerPartyPoker/RegisterPartypoker';
import RegisterGGPoker from '../containers/registerGGPoker/RegisterGGpoker';
import { Routes, Route } from "react-router-dom";

function MainRouter() {
    return(
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/registerPartyPoker" element={<RegisterPartyPoker />}></Route>
            <Route path="/registerGGPoker" element={<RegisterGGPoker />}></Route>
        </Routes>
    );
}

export default MainRouter;