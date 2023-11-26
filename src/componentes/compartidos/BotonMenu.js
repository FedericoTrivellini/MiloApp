import { Link } from 'react-router-dom';
import estilos from './BotonMenu.module.css';

function BotonMenu({to, texto, click}) {
    return (
        <Link
        to={to}
        className={estilos.boton}
        onClick={click}
        >
        {texto}
        </Link>
     );
}

export default BotonMenu;