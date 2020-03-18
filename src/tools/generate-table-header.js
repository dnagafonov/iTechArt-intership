export const generateTableHeader = json => Object.keys(json).sort().map(key => ({
  Header: key,
  accessor: key
}));