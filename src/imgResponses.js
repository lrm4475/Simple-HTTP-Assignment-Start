const fs = require('fs');
const image = fs.readFileSync(`${__dirname}/../client/spongegar.png`);

const getImg = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/png' });
  response.write(image);
  response.end();
};

module.exports.getImg = getImg;