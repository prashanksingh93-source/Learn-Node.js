// An aliased import means importing a module using a different local name than its original export. This is useful to avoid naming conflicts or to use a shorter or clearer name.

import * as math from './math.js'

console.log(math.add(2,3));
console.log(math.multiply(2,3))