
import { useCallback, useState } from 'react';
import Calendar from '../../components/calendar/Calendar';
import Gallery from '../../components/gallery/Gallery';
import { get, save } from '../../services/registers/RegisterService';
import userUser from '../../hooks/useUser'; 

function RegisterPartyPoker() {

    const initialState = {
        bank: 0,
        hands: 0,
        points: 0
    }
    const [images, setImages] = useState<any[]>([]);
    const [data, setData] = useState<any>(initialState);
    const [list, setList] = useState<any[]>([]);
    const [failed, setFailed] = useState<boolean>(false);

    const cb = useCallback((event: any) => {
        const reader = new FileReader();
        reader.addEventListener('load', (ev) => {
          if (ev.target && ev.target.result) {
            setImages([...images, {id: new Date().getTime(), b64: ev.target.result}]);
          }
        });
        reader.readAsDataURL(event.target.files[0]);
    }, [images]); 

    const handleDelete = useCallback((event: any) => {
        const newImages = images.filter((img: {id: string, b64: string}) => img.id != event.target.id);
        setImages(newImages);
    }, [images]);

    const user = userUser();

    const loadDataFromServer = async (day: number, month: number) => {
        let response = await get({userId: user.id, room: 'partypoker', day, month});
        if (response.data) {
            setData({ bank: response.data.bank, hands: response.data.hands, points: response.data.points});
        }
    }
    
    const handleSelect = useCallback((day: number, month: number) => {
        console.log('day::', day, '  month::', month, ' list:', list);
        if (day === -1 || month === -1) {
            setData({bank: 0, hands: 0, points: 0});
            return;
        }

        loadDataFromServer(day, month);

        const obj = list.find((reg: any) => reg.day == day && reg.month == month);
        console.log('obj--', obj);
        if (obj) {
            setData({bank: obj.bank, hands: obj.hands, points: obj.points });
        } else {
            setData({bank: 0, hands: 0, points: 0});
        }
        setFailed(false);
    }, []);

    const handleChangeValue = (e: any) => {
        setData({
            ...data,
            [e.target.id]: e.target.value
        });
    }

    const onSave = (e: any) => {
        e.preventDefault();
        if (data.bank === 0 || data.hands === 0 || data.points === 0 || images.length === 0) {
            setFailed(true);
            return;
        }
        (async () => {
            try {                
                await save({
                    data
                });

            } catch (error) {
                setFailed(true);
            }
        })();
    }


    /*
    useEffect(() => {
        const loadDataFromServer = async () => {
            let response = await getList({userId: user.id, room: 'partypoker'});
            if (response.list) {
                console.log(response.list);
                setList(response.list);
            }
        }
        loadDataFromServer();   
    }, []);
    */

    let alert: any;
    if (failed) {
        alert = <div className="alert alert-danger text-center" role="alert">No es posible guardar sin la información completa, recuerde colocar al menos una imágen</div>
    }

    return (
        <div className="card o-hidden border-0 shadow-lg my-5">
        <div className="card-body p-0">
            <div className="row">
                <div className="col-lg-7 d-none d-lg-block">
                    <Calendar extraColumns={["$C"]} handleSelect = {() => handleSelect} />
                </div>
                <div className="col-lg-5">
                    <div className="p-5">
                        <div className="text-center">
                            <h1 className="h4 text-gray-900 mb-4">Registro diario</h1>
                        </div>
                        <hr/>
                        <form className="user">
                            <div className="form-group row">
                                <div className="col-sm-6 mb-3 mb-sm-0">
                                    <input type="number" className="form-control form-control-user"
                                        id="bank" placeholder="Bank Party" value={data.bank} onChange={e => handleChangeValue(e)} />
                                </div>
                                <div className="col-sm-6">
                                    <input type="number" className="form-control form-control-user"
                                        id="hands" placeholder="Número de Manos" value={data.hands} onChange={e => handleChangeValue(e)} />
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-sm-6 mb-3 mb-sm-0">
                                    <input type="number" className="form-control form-control-user"
                                        id="points" placeholder="Puntos" value={data.points} onChange={e => handleChangeValue(e)} />
                                </div>
                            </div>                                            
                            <hr/>   
                            <a href="login.html" className="btn btn-primary btn-user btn-block" onClick = {e => onSave(e)}>
                                Guardar
                            </a>
                        </form>
                        <hr />
                        <Gallery images={images} cb={() => cb} handleDelete={() => handleDelete}></Gallery>
                    </div>
                    {alert}
                </div>
            </div>
        </div>
    </div>
    );
}

export default RegisterPartyPoker;