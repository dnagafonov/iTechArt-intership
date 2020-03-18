const { serverURL } = require(`./constants`);
module.exports = require('axios').create({ baseURL: serverURL});