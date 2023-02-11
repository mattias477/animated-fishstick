if (!fetch) {
  var fetch = require('./test/node-fetch')(1);
}

/**
 * Do not change code above this line.
 * See README.md for instructions

 ******************************************************************************/

const headers = {
  "Content-Type": "application/json"
}

const body = JSON.stringify({
  "color": "green"
})

const options = {
  method: "PUT",
  headers,
  body
}

const url = "/colors/1"

fetch(url, options)
.then(res => res.json())
.then(data => console.log(data))