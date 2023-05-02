
import Home from '../containers/home/Home';
import RegisterPartyPoker from '../containers/registerPartyPoker/RegisterPartypoker';
import RegisterGGPoker from '../containers/registerGGPoker/RegisterGGpoker';
import Player from '../containers/player/Player';
import { Routes, Route } from "react-router-dom";
import PlayerRouter from './Player';
import Add from '../components/player/add/Add';
import Recharges from '../containers/recharges/Recharges';
import CloseMonth from '../containers/closeMonth/CloseMonth';
import Configuration from '../containers/configuration/Configuration';

function MainRouter() {
    return(
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/registerPartyPoker" element={<RegisterPartyPoker />}></Route>
            <Route path="/registerGGPoker" element={<RegisterGGPoker />}></Route>
            <Route path="/player" element={<Player></Player>}></Route>
            <Route path="/player/add" element={<Add></Add>}></Route>
            <Route path="/player/edit/:id" element={<Add></Add>}></Route>
            <Route path="/recharges" element={<Recharges></Recharges>}></Route>
            <Route path="/closeMonth" element={<CloseMonth></CloseMonth>}></Route>
            <Route path="/configuration" element={<Configuration></Configuration>}></Route>
        </Routes>
    );
}

export default MainRouter;