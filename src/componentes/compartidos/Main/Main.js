import { children } from "react";
import './Principal.css';

function Main({children}) {
    return (
      <main  className="bg-gradient-to-t from-sky-50 from-10% to-sky-300 principal">
        {children}


        bg-sky-200
        bg-sky-500
        bg-sky-800
        bg-sky-950
      </main>
    );
}

export default Main;