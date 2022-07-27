// Import the coinflips and countFlips functions from coin module"
// Import the minimist package
import { coinFlips, countFlips} from "./modules/coin.mjs";
import 'minimist';

args['number'];

// Flip with the argument or once if none provided;
const flipNum =  minimist(process.argsv.slice(2));
const result = coinFlips(flipNum);
const count = countFlips(result);

console.log(result);
console.log(count);