
import React, { useCallback, useState, useEffect } from 'react';
import Row from './row/Row';
import { MONTHS } from './const';

interface IProps {
    extraColumns: string[]
    handleSelect: any
}

function Calendar(props: IProps) {

    const [month, setMonth] = useState(3);
    const [day, setDay] = useState(-1);
    
    const handleSelectDay = useCallback((event: any) => {
        const {value} = event.target;
        setDay(+value);
    }, []);
    
    const handleChangeMonth = useCallback((event: any) => {
        setDay(-1);
        setMonth(+event.target.value);
    }, []);
    
    useEffect(() => {
        const {handleSelect} = props;
        handleSelect()(day, month);
    }, [day, month]);

    return (
        <React.Fragment>
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Mes</h6>
                <select className="form-control" value={month}  onChange={(event) => handleChangeMonth(event)}>
                    {
                        MONTHS.map((m: {id: number, name: string, days: number}) => {
                            return(
                                <option key={m.id} value={m.id}>{m.name}</option>
                            )
                        })
                    }
                </select>
            </div>
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%"
                        cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Sem</th>
                                <th>L</th>
                                <th>M</th>
                                <th>M</th>
                                <th>J</th>
                                <th>V</th>
                                <th>S</th>
                                <th>D</th>
                                {
                                    props.extraColumns.map((c: string, index: number) => <th style={{width: "60px"}} key={index}>{c}</th>)
                                }
                            </tr>
                        </thead>

                        <tbody>
                                {
                                    MONTHS[month].range.map((week: number[], index: number) => {
                                        return(
                                            <Row week={index + 1} key={index} handleSelectDay = {handleSelectDay} day={day} range={week}></Row>
                                        );
                                    })
                                }
                                <tr>
                                    <td colSpan={8}><div className="alert alert-info" role="alert">UTILICE ESTE BOTON PARA GUARDAR LOS REGISTROS SEMANALES</div></td>
                                    <td><button className="btn btn-primary">Guardar</button></td>

                                </tr>                                
                        </tbody>
                    </table>
                </div>
            </div>

        </React.Fragment>
    );
}

export default Calendar;