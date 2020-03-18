export const generateTableHeader = json => Object.keys(json).map(key => {
  const t = {
    Header: key,
    accessor: key
  }
  console.log(t);
  return t;
});