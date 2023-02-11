const makePromise = require('./test/pot-plant');

const addSoil = makePromise('addSoil');
const plantSeed = makePromise('plantSeed');
const growPlant = makePromise('growPlant');

/**
 * Do not change code above this line.
 * See README.md for instructions

 ******************************************************************************/

// .then chaining
// function potPlant(seed) {
//   addSoil()
//   .then(() => plantSeed(seed))
//   .then(plant => growPlant(plant))
// }

//async await
async function potPlant(seed) {
  await addSoil()
  const plant = await plantSeed(seed)
  return await growPlant(plant)
}


/*******************************************************************************
 * Do not change code below this line.
 */

if (!exports) {
  var exports = {};
}
(function (exports) {
  try {
    exports.potPlant = potPlant;
  } catch (e) {
    exports.potPlant = () => { throw e };
  }
})(exports);