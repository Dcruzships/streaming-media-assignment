const fs = require('fs'); // pull in the file system module

const index = fs.readFileSync(`${__dirname}/../client/client.html`);

const getIndex = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(index);
  response.end();
};

const getPage = (request, response, fileLoc) => {
  let page = fs.readFileSync(`${__dirname}/${fileLoc}`);

  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(page);
  response.end();
};

module.exports.getIndex = getIndex;
module.exports.getPage = getPage;
