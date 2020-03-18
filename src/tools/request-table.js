import axios from './axios';

export const requestTable = async id => {
  let res = {};
  await axios.get(`/table/${id}`)
  .then(data => res = data)
  .catch(e => console.error(`Failed to request table: ${e.message}`));
  return res;
}