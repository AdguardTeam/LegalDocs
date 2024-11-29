const fs = require('fs');
const path = require('path');

let errorFound = false;

function checkFiles(dir) {
    const files = fs.readdirSync(dir);

    files.forEach(fileName => {
        const filePath = path.join(dir, fileName);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            // Exclude 'node_modules' directory
            if (fileName === 'node_modules') {
                return;
            }

            checkFiles(filePath);
        } else if (stat.isFile() && path.extname(fileName) === '.md') {
            const content = fs.readFileSync(filePath, 'utf8');

            const lines = content.split('\n');
            lines.forEach((line, index) => {
                // Check for forbidden characters '<' or '>'
                if (line.includes('<') || line.includes('>')) {
                    console.error(`Error in ${filePath}:${index + 1}: Forbidden character '<' or '>' found.`);
                    errorFound = true;
                }
            });
        }
    });
}

checkFiles('.');

if (errorFound) {
    console.error('Linting failed due to forbidden characters.');
    process.exit(1);
} else {
    console.log('All Markdown files are clean.');
    process.exit(0);
}
