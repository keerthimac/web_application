import { useMemo, useEffect, useState } from "react";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  useFilters,
  usePagination,
} from "react-table";
import GlobalFilter from "./GlobalFilter";
// import "./table.css";

function TableV2({ TableColumns, parentState, filterState }) {
  const columns = useMemo(() => TableColumns, []);
  const data = useMemo(() => parentState, [parentState]);

  const {
    getTableProps,
    getTableBodyProps,
    prepareRow,
    headerGroups,
    footerGroups,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    state: { pageIndex },
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
    useSortBy,
    usePagination
  );

  // const { globalFilter } = state;

  useEffect(() => {
    setFilter("plum_fitting_info.plum_fitting.id", filterState);
  }, [filterState, setFilter]);

  return (
    <>
      {/* <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} /> */}
      <div className='overflow-x-auto overflow-y-hidden '>
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
            {page.map((row, i) => {
              prepareRow(row);
              return (
                <tr className='hover' {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className='flex flex-row justify-center p-5'>
          <div className='btn-group'>
            <button
              className='btn'
              onClick={() => gotoPage(0)}
              disabled={!canPreviousPage}>
              {"<<"}
            </button>
            <button
              className='btn'
              onClick={() => previousPage()}
              disabled={!canPreviousPage}>
              {"<"}
            </button>
            <button className='btn'>
              Page {pageIndex + 1} of {pageOptions.length}
            </button>
            <button
              className='btn'
              onClick={() => nextPage()}
              disabled={!canNextPage}>
              {">"}
            </button>
            <button
              className='btn'
              onClick={() => gotoPage(pageCount - 1)}
              disabled={!canNextPage}>
              {">>"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default TableV2;
