import estilos from './CrearOT.module.css';
import BotonMenu from '../../BotonMenu';
import { useContext, useState, useEffect } from "react";
import { Contexto } from '../../../../servicios/Memoria';

function CrearOT() {
    const [nuevaOT, setForm] = useState({
        "id":7,
        "patente": 'KLW203',
        "modelo":"F4000",
        "descripcion":"Siniestro"
    });

    const [estado, enviar] = useContext(Contexto)

    const {OT, Patente, Modelo, Descripcion} = nuevaOT;

    const onChange = (event, prop) => {
        setForm(estado => ({...estado, [prop]: event.target.value}));
    }
    useEffect(()=>{

    }, [nuevaOT]);

    const crear = async () => {
       enviar({tipo: 'crear', ot: nuevaOT});
    }

    return (
        <div className="flex flex-col p-4">

            <form className="border rounded-lg bg-sky-50">
                <h1 className="text-xl font-bold p-2 ">Creando nueva Orden de Trabajo</h1>
                <label className={estilos.labels}>
                    OT:
                    <input
                    className={estilos.inputs}
                    placeholder="223" 
                    value={OT}
                    onChange={e=> onChange(e, 'id')}
                    ></input>
                </label>
                <br/>
                <label className={estilos.labels}>
                    Patente:
                    <input 
                    className={estilos.inputs} 
                    placeholder="KLW241" 
                    value={Patente}
                    onChange={e=> onChange(e, 'patente')}
                    ></input>
                </label>
                <label className={estilos.labels}>
                    Modelo
                    <input 
                    className={estilos.inputs} 
                    placeholder="Astra" 
                    value={Modelo}
                    onChange={e=> onChange(e, 'modelo')}
                    ></input>
                </label>
                <br/>
                <label className={estilos.labels}>
                    Descripcion
                    <input 
                    className={estilos.inputs} 
                    placeholder="Problema de arranque" 
                    value={Descripcion}
                    onChange={e=> onChange(e, 'descripcion')}
                    ></input>
                </label>
                <br/>
                <label className={estilos.labels}>
                    Puede ir a taller por sus propios medios?
                    <select>
                        <option>Si</option>
                        <option>No</option>
                    </select>
                </label>
                <div className='flex justify-end m-2'>
                <BotonMenu to='#' texto='Crear' click={crear}/>          
                </div>
            </form>
        </div>
     );
}

export default CrearOT;