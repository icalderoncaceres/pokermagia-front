
import React, { useCallback, useState } from 'react';
import Row from './row/Row';
import { MONTHS } from './const';

interface IProps {
    extraColumns: string[]
}

function Calendar(props: IProps) {

    const [month, setMonth] = useState(3);
    const [selected, setSelected] = useState(-1);

    const handleSelect = useCallback((event: any) => {
        const {value} = event.target;
        setSelected(+value);
    }, [selected]);

    const handleChangeMonth = useCallback((event: any) => {
        setSelected(-1);
        setMonth(+event.target.value);
    }, [month]);

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
                                            <Row week={index + 1} key={index} handleSelect = {handleSelect} selected={selected} range={week}></Row>
                                        );
                                    })
                                }                                
                        </tbody>
                    </table>
                </div>
            </div>

        </React.Fragment>
    );
}

export default Calendar;