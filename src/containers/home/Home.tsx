
import Card from '../../components/card/Card';

function Home() {
    return (
        <div className="container-fluid">

            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Inicio</h1>
                <button className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    className="fas fa-download fa-sm text-white-50"></i> Generar reporte general</button>
            </div>

            <div className="row">

                <div className="col-xl-3 col-md-6 mb-4">
                    <Card></Card>
                </div>

                <div className="col-xl-3 col-md-6 mb-4">
                    <Card></Card>
                </div>

                <div className="col-xl-3 col-md-6 mb-4">
                    <Card></Card>
                </div>

                <div className="col-xl-3 col-md-6 mb-4">
                    <Card></Card>
                </div>
            </div>

            <div className="row">

                <div className="col-xl-8 col-lg-7">
                    <div className="card shadow mb-4">
                        <div
                            className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                            <h6 className="m-0 font-weight-bold text-primary">Rentabilidad por jugador</h6>
                            <div className="dropdown no-arrow">
   
                            </div>
                        </div>

                        <div className="card-body">
                            <div className="chart-area">
                                <canvas id="myAreaChart"></canvas>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-4 col-lg-5">
                    <div className="card shadow mb-4">
                        <div
                            className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                            <h6 className="m-0 font-weight-bold text-primary">Estadisticas</h6>
                            <div className="dropdown no-arrow">

                            </div>
                        </div>
                        <div className="card-body">
                            <div className="chart-pie pt-4 pb-2">
                                <canvas id="myPieChart"></canvas>
                            </div>
                            <div className="mt-4 text-center small">
                                <span className="mr-2">
                                    <i className="fas fa-circle text-primary"></i> Manos
                                </span>
                                <span className="mr-2">
                                    <i className="fas fa-circle text-success"></i> Ganancias
                                </span>
                                <span className="mr-2">
                                    <i className="fas fa-circle text-info"></i> Perdidas
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Home;