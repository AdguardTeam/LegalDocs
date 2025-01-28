const fs = require('fs');
const path = require('path');
const {create} = require('xmlbuilder2');

const basePath = 'crowdin';
const outputFilename = 'docs.en.resx';
const filesToProcessExt = '.html.md'

const KEYS_SEPARATOR = '<!-- CUT HERE -->';

const CROWDIN_MAX_STRING_LENGTH = 65535;
const TRANSLATION_RATIO = 1.1;
const MAX_BYTES_PER_CHAR = 2;
const MAX_STRING_LENGTH = Math.floor(CROWDIN_MAX_STRING_LENGTH / (MAX_BYTES_PER_CHAR * TRANSLATION_RATIO));

const mappings = {
    'adguard-mail.com': 'legal-github-docs-mail',
    'adguard.com': 'legal-github-docs-adguard',
    'adguard-dns.io': 'legal-github-docs-dns',
    'adguard-vpn.com': 'legal-github-docs-vpn',
    'adguardpartner.com': 'legal-github-docs-aff',
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
        const fullFilePath = path.join(sourceDir, filePath);

        console.log(`Processing file: ${fullFilePath}`);
        const content = fs.readFileSync(fullFilePath, 'utf8');
        
        const baseKey = filePath
            .replace(filesToProcessExt, '')
            .replaceAll('/', '.');

        if (content.length > MAX_STRING_LENGTH) {
            const parts = content.split(KEYS_SEPARATOR);

            if (parts.length === 1) {
                console.error(`Error: File ${fullFilePath} exceeds maximum length and no ${KEYS_SEPARATOR} comment found`);
                process.exit(1);
            }

            for (let i = 0; i < parts.length; i++) {
                const part = parts[i].trim();
                if (part.length > MAX_STRING_LENGTH) {
                    console.error(`Error: Part ${i + 1} of file ${fullFilePath} exceeds maximum length`);
                    process.exit(1);
                }

                const key = `${baseKey}.${i + 1}`;
                console.log(`Generated key: ${key}`);
                xmlBuilder = xmlBuilder.ele('data').att('name', key)
                    .ele('value').dat(part).up()
                    .up();
            }
        } else {
            console.log(`Generated key: ${baseKey}`);
            xmlBuilder = xmlBuilder.ele('data').att('name', baseKey)
                .ele('value').dat(content).up()
                .up();
        }
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
