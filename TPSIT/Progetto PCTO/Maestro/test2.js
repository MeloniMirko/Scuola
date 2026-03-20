const fs = require('fs');
const urls = [
    'https://upload.wikimedia.org/wikipedia/commons/d/d4/Enrico_Fermi_1943-49.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/4/42/Fei-Fei_Li.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/3/3e/Einstein_1921_by_F_Schmutzer_-_restoration.jpg'
];
let out = '';
urls.forEach(finalUrl => {
    const uploadMatch = finalUrl.match(/upload\.wikimedia\.org\/wikipedia\/commons(?:\/[a-f0-9]+){2}\/([^/]+)$/i);
    out += finalUrl + ' => ' + (uploadMatch ? uploadMatch[1] : 'FAIL') + '\n';
});
fs.writeFileSync('output2.txt', out, 'utf8');
