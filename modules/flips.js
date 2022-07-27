// Import the coinflips and countFlips functions from coin module"
import { coinFlips, countFlips} from "./coin.mjs"

// Require/import minimist and use it to parse a number argument
const args = require('minimist')(process.argv.slice(2));

// Declare an arg name 'number'
args['number'];

const flipNum = args['number'];
const result = coinFlips(flipNum);
const count = coinFlips(result);

console.log(result);
console.log(count);