import { format } from "date-fns";

export const PLUMBING_COLUMNS = [
  {
    Header: "Id",
    Footer: "Id",
    accessor: "id",
  },
  {
    Header: "Type",
    Footer: "Type",
    accessor: "PlumType.plumType",
  },
  {
    Header: "Plumbing Grade",
    Footer: "Plumbing Grade",
    accessor: "PlumGrade.plumGrade",
  },
  {
    Header: "Size",
    Footer: "Size",
    accessor: "PlumSize.plumSizeImperial",
  },
  {
    Header: "Pipe End Type",
    Footer: "Pipe End Type",
    accessor: "PlumPipeEndType.plumPipeEndType",
  },
  {
    Header: "Length",
    Footer: "Length",
    accessor: "plumPipeLengthMetric",
  },
  // {
  //   Header: "Date of Birth",
  //   Footer: "Date of Birth",
  //   accessor: "date_of_birth",
  //   Cell: ({ value }) => {
  //     return format(new Date(value), "dd/mm/yyyy");
  //   },
  // },
  // {
  //   Header: "Country",
  //   Footer: "Country",
  //   accessor: "country",
  // },
  // {
  //   Header: "Phone",
  //   Footer: "Phone",
  //   accessor: "phone",
  // },
];

export const COLUMNS = [
  {
    Header: "Id",
    Footer: "Id",
    accessor: "id",
  },
  {
    Header: "First Name",
    Footer: "First Name",
    accessor: "first_name",
  },
  {
    Header: "Last Name",
    Footer: "Last Name",
    accessor: "last_name",
  },
  {
    Header: "Date of Birth",
    Footer: "Date of Birth",
    accessor: "date_of_birth",
    Cell: ({ value }) => {
      return format(new Date(value), "dd/mm/yyyy");
    },
  },
  {
    Header: "Country",
    Footer: "Country",
    accessor: "country",
  },
  {
    Header: "Phone",
    Footer: "Phone",
    accessor: "phone",
  },
];

export const GROUP_COLUMNS = [
  { Header: "Id", Footer: "Id", accessor: "id" },
  {
    Header: "Name",
    Footer: "Name",
    columns: [
      {
        Header: "First Name",
        Footer: "First Name",
        accessor: "first_name",
      },
      {
        Header: "Last Name",
        Footer: "Last Name",
        accessor: "last_name",
      },
    ],
  },
  {
    Header: "Info",
    Footer: "Info",
    columns: [
      {
        Header: "Date of Birth",
        Footer: "Date of Birth",
        accessor: "date_of_birth",
      },
      {
        Header: "Country",
        Footer: "Country",
        accessor: "country",
      },
      {
        Header: "Phone",
        Footer: "Phone",
        accessor: "phone",
      },
    ],
  },
];
