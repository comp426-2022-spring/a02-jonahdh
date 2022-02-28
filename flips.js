import { coinFlips, countFlips} from "./modules/coin.mjs"

const args = require('minimist')(process.argv.slice(2));

args['number'];

const flipNum = args['number'];
const result = coinFlips(flipNum);
const count = coinFlips(result);

console.log(result);
console.log(count);