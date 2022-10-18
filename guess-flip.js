// Import the coinFlip function and minimist
import { flipACoin } from "./modules/coin.mjs";
import minimist from 'minimist';

// Process args
const args = minimist(process.argv.slice(2));

// Declar arg name "call"
args['call'];


if ((args.call == "heads") || (args.call == "tails")) {
    console.log(flipACoin(args.call));
}
else {
    console.log("Error: no input.\nUsage: node guess-flip --call=[heads|tails]")
}