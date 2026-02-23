import fs from 'fs';

const svg = fs.readFileSync('public/favicon.svg', 'utf8');

async function go() {
    const size = 512;
    const tightViewBox = "156 120 249 118";

    let newSvg = svg.replace(/<svg[^>]*>/, `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="${tightViewBox}" width="${size}" height="${size}">`);
    fs.writeFileSync('app/icon.svg', newSvg);
    console.log("Wrote icon.svg");
}

go();
