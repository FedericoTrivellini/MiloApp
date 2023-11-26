import BaseOT from "../../../../servicios/BaseOT.json";
import * as React from "react";
import { useTable } from "react-table";
import estilos from './Porlet.module.css';
import { Contexto } from "../../../../servicios/Memoria";
import { useContext } from "react";

function Porlet() {
 /* const [estado, enviar] = useContext(Contexto);
  console.log(estado.objetos)*/
  const data = React.useMemo(() => BaseOT, []);
  const columns = React.useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "Patente",
        accessor: "patente",
      },
      {
        Header: "Modelo",
        accessor: "modelo",
      },
      {
        Header: "Descripcion",
        accessor: "descripcion",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data});

  return (
      <div className={estilos.contenedor} >
        <table className={estilos.table} {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th className={estilos.tableIntTH} {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td className={estilos.tableIntTD} {...cell.getCellProps()}> {cell.render("Cell")} </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
  );
}

export default Porlet;