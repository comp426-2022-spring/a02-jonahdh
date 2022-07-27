// Import the coinflips and countFlips functions from coin module"
// Import the minimist package
import { coinFlips, countFlips} from "./modules/coin.mjs";
import minimist from "minimist";

// Format the args using minimist
const args = minimist(process.argv.slice(2));

// Declare argument name "number"
args['number']

// Flip with the argument or once if none provided
const flipNum = args.number || 1;
const result = coinFlips(flipNum);
const count = countFlips(result);

// Print to stdout
console.log(result);
console.log(count);