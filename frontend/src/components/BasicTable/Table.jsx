import { useMemo, forwardRef, useRef, useEffect } from "react";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
  useRowSelect,
} from "react-table";
import GlobalFilter from "./GlobalFilter";
// import "./table.css";

const IndeterminateCheckbox = forwardRef(({ indeterminate, ...rest }, ref) => {
  const defaultRef = useRef();
  const resolvedRef = ref || defaultRef;

  useEffect(() => {
    resolvedRef.current.indeterminate = indeterminate;
  }, [resolvedRef, indeterminate]);

  return (
    <>
      <input type='checkbox' ref={resolvedRef} {...rest} />
    </>
  );
});

function Table({ TableColumns, parentState }) {
  const columns = useMemo(() => TableColumns, []);
  const data = useMemo(() => parentState, [parentState]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    selectedFlatRows,
    setGlobalFilter,
    state: { pageIndex, pageSize, selectedRowIds },
  } = useTable(
    {
      columns,
      data,
    },

    useGlobalFilter,
    useSortBy,
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        // Let's make a column for selection
        {
          id: "selection",
          // The header can use the table's getToggleAllRowsSelectedProps method
          // to render a checkbox
          Header: ({ getToggleAllPageRowsSelectedProps }) => (
            <div>
              <IndeterminateCheckbox {...getToggleAllPageRowsSelectedProps()} />
            </div>
          ),
          // The cell can use the individual row's getToggleRowSelectedProps method
          // to the render a checkbox
          Cell: ({ row }) => (
            <div>
              <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
            </div>
          ),
        },
        ...columns,
      ]);
    }
  );

  //   const { globalFilter } = state;

  // console.log(headerGroups);
  // console.log(footerGroups);
  // console.log(rows);

  return (
    <>
      {/* <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} /> */}
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
            {page.map((row) => {
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
          {/* <span>
            | Go to page:{" "}
            <input
              type='number'
              defaultValue={pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                gotoPage(page);
              }}
              style={{ width: "100px" }}
            />
          </span>{" "}
          <select
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
            }}>
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select> */}
          {/* <pre>
            <code>
              {JSON.stringify(
                {
                  selectedRowIds: selectedRowIds,
                  "selectedFlatRows[].original": selectedFlatRows.map(
                    (d) => d.original
                  ),
                },
                null,
                2
              )}
            </code>
          </pre> */}
        </div>
      </div>
    </>
  );
}

export default Table;
