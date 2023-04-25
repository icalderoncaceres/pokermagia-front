
import React from 'react';
import { NavLink } from "react-router-dom";

function List() {
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
                                    <th>Nombre</th>
                                    <th>ROLL START</th>
                                    <th>BALANCE</th>
                                    <th>CASHBACK</th>
                                    <th>PROFIT NETO</th>
                                    <th>BANK FINAL</th>
                                    <th>RAKE</th>
                                    <th>COMPENSA MES<br />ANTERIOR</th>
                                    <th>ROLL NEXT MONTH</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>Herrera Vargas Jorge Alberto</td>
                                    <td>100,87</td>
                                    <td>314,88</td>
                                    <td>208,76</td>
                                    <td>14,21</td>
                                    <td>657,54</td>
                                    <td>0,00</td>
                                    <td>239,87</td>
                                    <td>276,87</td>
                                    <td>
                                        <a href="#" className="btn btn-success btn-circle">
                                            <i className="fas fa-check"></i>
                                        </a>
                                        <a href="#" className="btn btn-danger btn-circle">
                                            <i className="fas fa-trash"></i>
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Herrera Vargas Jorge Alberto</td>
                                    <td>100,87</td>
                                    <td>314,88</td>
                                    <td>208,76</td>
                                    <td>14,21</td>
                                    <td>657,54</td>
                                    <td>0,00</td>
                                    <td>239,87</td>
                                    <td>276,87</td>
                                    <td>
                                        <a href="#" className="btn btn-success btn-circle">
                                            <i className="fas fa-check"></i>
                                        </a>
                                        <a href="#" className="btn btn-danger btn-circle">
                                            <i className="fas fa-trash"></i>
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Herrera Vargas Jorge Alberto</td>
                                    <td>100,87</td>
                                    <td>314,88</td>
                                    <td>208,76</td>
                                    <td>14,21</td>
                                    <td>657,54</td>
                                    <td>0,00</td>
                                    <td>239,87</td>
                                    <td>276,87</td>
                                    <td>
                                        <a href="#" className="btn btn-success btn-circle">
                                            <i className="fas fa-check"></i>
                                        </a>
                                        <a href="#" className="btn btn-danger btn-circle">
                                            <i className="fas fa-trash"></i>
                                        </a>
                                    </td>                                        </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default List;