import { useMemo, useEffect, useState } from "react";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  useFilters,
  allColumns,
} from "react-table";
import GlobalFilter from "./GlobalFilter";
// import "./table.css";

function TableV2({ TableColumns, parentState, filterState }) {
  const columns = useMemo(() => TableColumns, []);
  const data = useMemo(() => parentState, [parentState]);
  const [filterValue, setFilterValue] = useState("");

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow,
    state,
    // setGlobalFilter,
    setFilter,
  } = useTable(
    {
      columns,
      data,
      initialState: {
        hiddenColumns: columns.map((column) => {
          if (column.show === false) return column.accessor || column.id;
        }),
      },
    },

    // useGlobalFilter,
    useFilters,
    useSortBy
  );

  // const { globalFilter } = state;

  useEffect(() => {
    setFilter("plum_fitting_info.plum_fitting.id", filterState);
  }, [filterState, setFilter]);

  return (
    <>
      {/* <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} /> */}
      <input
        value={filterValue || ""}
        onChange={(e) => setFilterValue(e.target.value)}
        placeholder='Filter by column'
      />
      <div className='overflow-x-auto overflow-y-scroll h-screen'>
        <table className='table table-zebra w-full' {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render("Header")}
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? "🔼"
                          : "🔽"
                        : ""}
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
                  <td {...column.getFooterProps()}>
                    {column.render("Footer")}
                  </td>
                ))}
              </tr>
            ))}
          </tfoot>
        </table>
      </div>
    </>
  );
}

export default TableV2;
