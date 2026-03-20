const fs = require('fs');
const urls = [
    'https://upload.wikimedia.org/wikipedia/commons/d/d4/Enrico_Fermi_1943-49.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/4/42/Fei-Fei_Li.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/8/8f/Elon_Musk_Royal_Society_%28crop1%29.jpg'
];
let out = '';
urls.forEach(finalUrl => {
    let thumbUrl = finalUrl;
    const uploadMatch = finalUrl.match(/^https?:\/\/upload\.wikimedia\.org\/wikipedia\/commons\/([a-f0-9]+)\/([a-f0-9]{2})\/([^/]+)$/i);
    if (uploadMatch) {
        const [full, a, ab, filename] = uploadMatch;
        // filename is URI encoded, Wikipedia thumb names keep it as is, except sometimes they decode it?
        // usually they keep it encoded but some characters like %28 are not re-encoded by thumb generator.
        let thumbName = decodeURIComponent(filename);
        out += `https://upload.wikimedia.org/wikipedia/commons/thumb/${a}/${ab}/${filename}/400px-${filename}\n`;
    }
});
fs.writeFileSync('output4.txt', out, 'utf8');
