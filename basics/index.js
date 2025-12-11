const path = require("path");

directory = path.dirname(__filename);
filename = path.basename(__filename);
extension = path.extname(__filename);
console.log("directory is", directory);
console.log("filename  is", filename);
console.log("extension is", extension);

// joining path
const fullPath = path.join(directory, "subdir", "file.txt");
console.log("full path", fullPath);
