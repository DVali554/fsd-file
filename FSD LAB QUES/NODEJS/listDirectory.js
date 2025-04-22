// Import the fs module
const fs = require('fs');

// Directory to read (use '.' for current directory)
const dirPath = '.';

// Read and list directory contents
fs.readdir(dirPath, (err, files) => {
    if (err) {
        console.error("Error reading directory:", err);
        return;
    }

    console.log(`Contents of "${dirPath}":`);
    files.forEach(file => {
        console.log(file);
    });
});
