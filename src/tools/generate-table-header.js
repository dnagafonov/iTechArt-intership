export const generateTableHeader = json => Object.keys(json).map(key => ({
    Header: key,
    accessor: key
}));