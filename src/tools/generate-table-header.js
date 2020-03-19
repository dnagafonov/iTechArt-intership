export const generateTableHeader = json => Object.keys(json[0]).sort().map(key => ({
  Header: key,
  accessor: key
}));