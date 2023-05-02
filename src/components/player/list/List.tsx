
import React, {useEffect, useState} from 'react';
import { NavLink } from "react-router-dom";
import { index } from '../../../services/players/PlayerService';

function List() {

    interface IPlayer {
        id?: number | string
        name: string
        last_name: string
        email: string
        room: string
        level: string
        phone: string
        country: string
        notes: string
    }

    const [list,setList] = useState<IPlayer[]>([]);

    useEffect(() => {
        (async() => {
            try {                
                const response = await index({});
                if (response.status === 200 && response.players) {
                    setList(response.players);
                }
            } catch (error) {
                console.log(error);
            }

        })();
    }, []);
    return (
        <React.Fragment>
            <h1 className="h3 mb-2 text-gray-800">JUGADORES</h1>
            <p className="mb-4">Lista de jugadores de POKERMAGIA, AQUÍ PODRA VER TODOS LOS JUGADORES ADEMAS DE EDITARLES SUS DATOS, DARLE DE BAJA, DESACTIVARLOS TEMPORALMENTE ADEMAS DE AGREGAR NUEVOS JUGADORES.</p>
            <NavLink to={"/player/add"} className="btn btn-primary btn-icon-split">
                <span className="icon text-white-50">
                    <i className="fas fa-flag"></i>
                </span>
                <span className="text">Nuevo Jugador</span>
            </NavLink>
            <hr />
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Jugadores</h6>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Nombre</th>
                                    <th>Apellido</th>
                                    <th>Email</th>
                                    <th>Sala</th>
                                    <th>Nivel</th>
                                    <th>Telefono</th>
                                    <th>País</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    list.map((player: IPlayer, index: number) => {
                                        return (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{player.name}</td>
                                            <td>{player.last_name}</td>
                                            <td>{player.email}</td>
                                            <td>{player.room}</td>
                                            <td>{player.level}</td>
                                            <td>{player.phone}</td>
                                            <td>{player.country}</td>
                                            <td>
                                                <NavLink to={`/player/edit/${player.id}`} className="btn btn-success btn-circle">
                                                    <i className="fas fa-check"></i>
                                                </NavLink>
                                                <a href="#" className="btn btn-danger btn-circle">
                                                    <i className="fas fa-trash"></i>
                                                </a>
                                            </td>
                                        </tr>
                                        );
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default List;