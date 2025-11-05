const fs = require("fs");
const path = require("path");

function cleanHtmlContent(content, options = {}) {
    const collapse = !!options.collapseTagWhitespace;
    let out = content;
    out = out.replace(/\u00A0/g, " ");
    out = out.replace(/\u200B/g, "");
    out = out.replace(/\uFEFF/g, "");
    out = out.replace(/&nbsp;/g, " ");
    if (collapse) {
        out = out.replace(/>\s+</g, "><");
    }
    return out;
}

function processFile(filePath, options = {}) {
    const p = path.resolve(filePath);
    if (!fs.existsSync(p)) {
        throw new Error(`File not found: ${p}`);
    }
    const original = fs.readFileSync(p, { encoding: "utf8" });
    const cleaned = cleanHtmlContent(original, options);
    fs.writeFileSync(p, cleaned, { encoding: "utf8" });
    return { path: p, bytesIn: Buffer.byteLength(original, "utf8"), bytesOut: Buffer.byteLength(cleaned, "utf8") };
}

if (require.main === module) {
    const args = process.argv.slice(2);
    let inFile = null;
    let collapse = false;

    for (let i = 0; i < args.length; i++) {
        const a = args[i];
        if (!inFile && !a.startsWith("--")) {
            inFile = a;
            continue;
        }
        if (a === "--collapse") {
            collapse = true;
        }
    }

    if (!inFile) {
        inFile = "c:\\Users\\In1t\\Desktop\\guia-radioaficionado\\guia-radioaficionado.html";
    }

    try {
        const res = processFile(inFile, { collapseTagWhitespace: collapse });
        console.log(`Cleaned: ${res.path}`);
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
}