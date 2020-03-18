import axios from './axios';

export const requestTable = async id => {
  let json = {};
  await axios.get(`/table/${id}`)
  .then(res => json = res.data)
  .catch(e => console.error(`Failed to request table: ${e.message}`));
  return json;
}