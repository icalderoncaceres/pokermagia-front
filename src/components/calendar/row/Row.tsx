

function Row(props: {week: number, range: number[], day: number, handleSelectDay: any }) {
    
    return (
        <tr>
            <td>{props.week}</td>
            {
                props.range.map((n: number, index: number) => {
                    if (n === props.day) {
                        return (<td key={`${n}_${index}`}><button onClick={props.handleSelectDay} value={n} className="btn btn-primary"> {n > 0 ? n : ''}</button></td>)
                    }
                    return (<td key={`${n}_${index}`}><button onClick={props.handleSelectDay} value={n} className="btn btn-default"> {n > 0 ? n : ''}</button></td>)
                })
            }
            <td><input style={{width: "60px"}}></input></td>
        </tr>
    );
}

export default Row;