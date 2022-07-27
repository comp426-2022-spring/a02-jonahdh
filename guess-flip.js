// Import the coinFlip function and minimist
import { coinFlip } from "./modules/coin.mjs";
import minimist from "minimist";

// Process args
const args = minimist(process.argv.slice(2));

// Declar arg name "call"
args['call'];

// Throw error if nothing provided
// Flip coin
// If heads return result
// If tails return result
// Throw error since it's not heads or tails