
function Add() {
    return (
        <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
                <div className="row">
                    <div className="col-lg-5 d-none d-lg-block">
                        Cargar Foto
                    </div>
                    <div className="col-lg-7">
                        <div className="p-5">
                            <div className="text-center">
                                <h1 className="h4 text-gray-900 mb-4">Registrar un Jugador</h1>
                            </div>
                            <form className="user">
                                <div className="form-group row">
                                    <div className="col-sm-6 mb-3 mb-sm-0">
                                        <input type="text" className="form-control form-control-user" id="exampleFirstName"
                                            placeholder="Nombre" />
                                    </div>
                                    <div className="col-sm-6">
                                        <input type="text" className="form-control form-control-user" id="exampleLastName"
                                            placeholder="Apellido" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control form-control-user" id="exampleInputEmail"
                                        placeholder="Email Address" />
                                </div>
                                <div className="form-group row">
                                    <div className="col-sm-6 mb-3 mb-sm-0">
                                        <select className="form-control form-control-user"
                                            id="selectSala" placeholder="Sala">
                                            <option>Seleccione sala(s)</option>
                                            <option>PARTYPOKER</option>
                                            <option>GGPOKER</option>
                                            <option>Todas</option>
                                        </select>
                                    </div>
                                    <div className="col-sm-6">
                                        <input type="text" className="form-control form-control-user"
                                            id="phone" placeholder="Telefono" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-sm-6 mb-3 mb-sm-0">
                                        <input type="password" className="form-control form-control-user"
                                            id="exampleInputPassword" placeholder="Contraseña" />
                                    </div>
                                    <div className="col-sm-6">
                                        <input type="password" className="form-control form-control-user"
                                            id="exampleRepeatPassword" placeholder="Repetir contraseña" />
                                    </div>
                                </div>
                                <a href="#" className="btn btn-primary btn-user btn-block">
                                    Guardar
                                </a>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Add;