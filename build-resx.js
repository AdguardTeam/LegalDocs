const fs = require('fs');
const path = require('path');
const {create} = require('xmlbuilder2');

const basePath = 'crowdin';
const outputFilename = 'docs.resx';
const filesToProcessExt = '.html.md'

const mappings = {
    'adguard-mail.com': 'legal-github-docs-mail',
    'adguard.com': 'legal-github-docs-adguard',
    'adguard-dns.io': 'legal-github-docs-dns',
    'adguard-vpn.com': 'legal-github-docs-vpn',
};

console.log('Starting document processing...');

if (!fs.existsSync(basePath)) {
    console.log(`Creating output directory: ${basePath}`);
    fs.mkdirSync(basePath);
}

for (const [sourceDir, crowdinDir] of Object.entries(mappings)) {
    console.log(`\nProcessing directory: ${sourceDir} -> ${crowdinDir}`);

    if (!fs.existsSync(sourceDir)) {
        console.log(`Skipping ${sourceDir} - directory does not exist`);
        continue;
    }

    const mdFiles = fs.readdirSync(sourceDir, {recursive: true})
        .filter(file => file.endsWith(filesToProcessExt));

    console.log(`Found ${mdFiles.length} files to process`);

    let xmlBuilder = create({version: '1.0', encoding: 'utf-8'}).ele('root');

    for (const filePath of mdFiles) {
        console.log(`Processing file: ${filePath}`);
        const content = fs.readFileSync(path.join(sourceDir, filePath), 'utf8');

        const key = filePath
            .replace(filesToProcessExt, '')
            .replaceAll('/', '.');

        console.log(`Generated key: ${key}`);

        xmlBuilder = xmlBuilder.ele('data').att('name', key)
            .ele('value').dat(content).up()
            .up()
    }

    const resxContent = xmlBuilder.end({
        prettyPrint: true,
        indent: '    ',
    });

    const outputDir = path.join(basePath, crowdinDir);

    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir);
    }

    const outputPath = path.join(outputDir, outputFilename);
    console.log(`Writing output to: ${outputPath}`);
    fs.writeFileSync(outputPath, resxContent);
}

console.log('\nProcessing complete!');

