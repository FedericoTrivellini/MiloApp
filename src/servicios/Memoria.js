import { createContext, useReducer } from "react";
import BaseOT from "./BaseOT.json";

export const Contexto = createContext(null);

const estadoInicial ={
    orden: [],
    objetos: {}
};

function reductor (estado, accion){
    switch (accion.tipo){
        case 'colocar':{
            const ot = accion.ot;
            const nuevaOT = {
                orden: ot.map(ot => ot.id),
                objetos: ot.reduce((objeto, ot) => ({ ...objeto, [ot.id]: ot}), {})
            }
            return nuevaOT;
        };
        case 'crear':{
            const id = (estadoInicial.orden.length + 1);
            const nuevaOT = {
                orden: [...estado.orden, id],
                objetos: {
                    ...estado.objetos,
                    [id]: accion.ot
                }
            };
            console.log(nuevaOT);
            return nuevaOT;
        };

    }
};
const ot = reductor(estadoInicial, {tipo: 'colocar', ot: BaseOT});

function Memoria({children}) {
    const [estado, enviar] = useReducer(reductor, ot);
    return ( 
        <Contexto.Provider value={[estado, enviar]}>
            {children}
        </Contexto.Provider>
     );
}

export default Memoria;