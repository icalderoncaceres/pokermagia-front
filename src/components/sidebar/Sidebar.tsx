
import React from 'react';
import { NavLink } from "react-router-dom";
import userUser from '../../hooks/useUser';

function Sidebar() {
    const user = userUser();
    let playersSection;
    let adminSection;

    if (user.role === 'PLAYER') {
        playersSection = <React.Fragment>
            <div className="sidebar-heading">
                Jugadores
            </div>

            <li className="nav-item">
                <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                    <i className="fas fa-fw fa-cog"></i>
                    <span>Registros</span>
                </a>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Salas:</h6>
                        <NavLink className="collapse-item" to={`/registerPartyPoker`}>PARTYPOKER</NavLink>
                        <NavLink className="collapse-item" to={`/registerGGPoker`}>GGPOKER</NavLink>
                    </div>
                </div>
            </li>

            <li className="nav-item">
                <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
                    aria-expanded="true" aria-controls="collapseUtilities">
                    <i className="fas fa-fw fa-wrench"></i>
                    <span>Reportes</span>
                </a>
                <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities"
                    data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <a className="collapse-item" href="utilities-color.html">Registros</a>
                        <a className="collapse-item" href="utilities-border.html">Ganancias</a>
                        <a className="collapse-item" href="utilities-animation.html">Retiros</a>
                    </div>
                </div>
            </li>
            <hr className="sidebar-divider" />
        </React.Fragment>
    }
    if (user.role !== 'PLAYER') {
        adminSection = <React.Fragment>
            <div className="sidebar-heading">
                Administración
            </div>

            <li className="nav-item">
                <NavLink className="nav-link" to={`player`}>
                    <i className="fas fa-fw fa-chart-area"></i>
                    <span>Jugadores</span></NavLink>
            </li>

            <li className="nav-item">
                <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
                    aria-expanded="true" aria-controls="collapsePages">
                    <i className="fas fa-fw fa-folder"></i>
                    <span>Reportes</span>
                </a>
                <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Reportes:</h6>
                        <a className="collapse-item" href="login.html">Registros diarios</a>
                        <a className="collapse-item" href="login.html">Registros semanales</a>
                        <a className="collapse-item" href="login.html">Registros mensuales</a>
                        <a className="collapse-item" href="login.html">Registros personalizados</a>
                        <a className="collapse-item" href="login.html">Alertas</a>
                        <a className="collapse-item" href="login.html">Por sala</a>
                    </div>
                </div>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to={`recharges`}>
                    <i className="fas fa-fw fa-chart-area"></i>
                    <span>Recargas</span></NavLink>
            </li>

            <li className="nav-item">
                <NavLink className="nav-link" to={`closeMonth`}>
                    <i className="fas fa-fw fa-table"></i>
                    <span>Cierre de mes</span></NavLink>
            </li>

            <li className="nav-item">
                <NavLink className="nav-link" to={`configuration`}>
                    <i className="fas fa-fw fa-table"></i>
                    <span>Configuración</span></NavLink>
            </li>

            <hr className="sidebar-divider d-none d-md-block" />
        </React.Fragment>
    }
    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">Pokermagia Admin </div>
            </a>

            <hr className="sidebar-divider my-0" />

            <li className="nav-item active">
                <NavLink className="nav-link" to={`/`}>
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Inicio</span></NavLink>
            </li>

            <hr className="sidebar-divider" />

            {playersSection}
            {adminSection}

            <div className="text-center d-none d-md-inline">
                <button className="rounded-circle border-0" id="sidebarToggle"></button>
            </div>

        </ul>
    )
}

export default Sidebar;