
import Home from '../containers/home/Home';
import RegisterPartyPoker from '../containers/registerPartyPoker/RegisterPartypoker';
import RegisterGGPoker from '../containers/registerGGPoker/RegisterGGpoker';
import Player from '../containers/player/Player';
import { Routes, Route } from "react-router-dom";
import PlayerRouter from './Player';
import Add from '../components/player/add/Add';

function MainRouter() {
    return(
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/registerPartyPoker" element={<RegisterPartyPoker />}></Route>
            <Route path="/registerGGPoker" element={<RegisterGGPoker />}></Route>
            <Route path="/player" element={<Player></Player>}></Route>
            <Route path="/player/add" element={<Add></Add>}></Route>
        </Routes>
    );
}

export default MainRouter;