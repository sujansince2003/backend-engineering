import path, { dirname } from "path";

import { fileURLToPath } from "url";

const filename = fileURLToPath(import.meta.url);
console.log(filename);
const dirnameof = dirname(filename);

console.log(dirnameof);
