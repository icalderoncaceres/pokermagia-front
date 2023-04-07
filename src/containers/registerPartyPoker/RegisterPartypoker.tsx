
import { useCallback, useState } from 'react';
import Calendar from '../../components/calendar/Calendar';
import Gallery from '../../components/gallery/Gallery';

function RegisterPartyPoker() {

    const [images, setImages] = useState<any[]>([]);
    const [data, setData] = useState<{bank: number | string}>({bank: ''});

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

    const handleSelect = useCallback(() => {
        console.log('Aqui debe de llamar al api');
        setData({bank: 100});
    }, [data]);

    const handleChangeValue = (value: string) => {
        console.log('Valor del input:', value);
        setData({bank: +value});
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
                                        id="bank" placeholder="Bank Party" value={data.bank} onChange={e => handleChangeValue(e.target.value)} />
                                </div>
                                <div className="col-sm-6">
                                    <input type="text" className="form-control form-control-user"
                                        id="hands" placeholder="Número de Manos" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-sm-6 mb-3 mb-sm-0">
                                    <input type="text" className="form-control form-control-user"
                                        id="points" placeholder="Puntos" />
                                </div>
                            </div>                                            
                            <hr/>   
                            <a href="login.html" className="btn btn-primary btn-user btn-block">
                                Guardar
                            </a>
                        </form>
                        <hr />
                        <Gallery images={images} cb={() => cb} handleDelete={() => handleDelete}></Gallery>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default RegisterPartyPoker;