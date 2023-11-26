function OTSinAsignar(patente, ot, descripcion) {
    return ( 
      <tr>
         <td>
          {ot}
        </td>
        <td>
          <a href="#">{patente}</a>
        </td>
        <td>
          {descripcion}
        </td>
      </tr>
/*
<table
className="table-fixed m-5 border-collapse border border-sky-200 w-11/12">
  <thead className="bg-sky-200 text-white">
    <tr className="">
      <th
      className="">
        OT
      </th>
      <th
      className="">
        Patente
      </th>
      <th
      className="">
        Descripcion
      </th>
    </tr>
  </thead>
  <tbody className="text-center">
    <tr>
      <td>
        <a href="#">KLW974</a>
      </td>
      <td>
        3
      </td>
      <td>
        Bateria, Frenos
      </td>
    </tr>
    <tr>
      <td>
      <a href="#">AB254HD</a>
      </td>
      <td>
        2
      </td>
      <td>
        Tren delantero, luces
      </td>
    </tr>
    <tr>
      <td>
      <a href="#">AF148FV</a>
      </td>
      <td>
        1
      </td>
      <td>
        Parche
      </td>
    </tr>
  </tbody>

</table>*/
     );
}

export default OTSinAsignar;

