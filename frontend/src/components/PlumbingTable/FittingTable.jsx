import { useMemo, useState, useEffect } from "react";
import { useTable, useSortBy, useGlobalFilter } from "react-table";
import mockData from "../../../mockData.json";
import { GROUP_COLUMNS, COLUMNS, FITTING_COLUMNS } from "./Columns/columns";
import GlobalFilter from "./GlobalFilter";
import "./table.css";

function TableComponent() {
  const [plumbingData, setPlumbingData] = useState([]);

  const getPlumbingList = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/plumbing/fitting"
      );
      const data = await response.json();
      setPlumbingData(data);
      console.log(data);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getPlumbingList();
  }, []);

  const columns = useMemo(() => FITTING_COLUMNS, []);
  const data = useMemo(() => plumbingData, [plumbingData]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },

    useGlobalFilter,
    useSortBy
  );

  const { globalFilter } = state;

  // console.log(headerGroups);
  // console.log(footerGroups);
  // console.log(rows);

  return (
    <>
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  <span>
                    {column.isSorted ? (column.isSortedDesc ? "🔼" : "🔽") : ""}
                  </span>
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
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          {footerGroups.map((footerGroup) => (
            <tr {...footerGroup.getFooterGroupProps()}>
              {footerGroup.headers.map((column) => (
                <td {...column.getFooterProps()}>{column.render("Footer")}</td>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
    </>
  );
}

export default TableComponent;
