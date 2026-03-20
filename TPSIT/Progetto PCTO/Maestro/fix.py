import sys, re

def process(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        text = f.read()

    # match the full function
    pattern = r'function\s+sanitizeHttpUrl\(value\)\s*\{(?:[^{}]|{(?:[^{}]|{[^}]*})*})*\}'
    
    new_func = """function sanitizeHttpUrl(value) {
    if (typeof value !== "string" || !value) return "";
    try {
        let finalUrl = value.trim().replace(/^http:\\/\\//i, "https://");
        let isWikimedia = false;
        
        const fileMatch = finalUrl.match(/\\/wiki\\/File:([^#?]+)/);
        if (fileMatch) {
            finalUrl = `commons.wikimedia.org/wiki/Special:FilePath/${fileMatch[1]}`;
            isWikimedia = true;
        } else {
            const uploadMatch = finalUrl.match(/upload\\.wikimedia\\.org\\/wikipedia\\/commons(?:\\/[a-f0-9]+){2}\\/([^/]+)$/i);
            if (uploadMatch) {
                finalUrl = `commons.wikimedia.org/wiki/Special:FilePath/${uploadMatch[1]}`;
                isWikimedia = true;
            } else if (finalUrl.includes("wikimedia.org") || finalUrl.includes("Special:FilePath")) {
                if (finalUrl.startsWith("https://")) finalUrl = finalUrl.substring(8);
                isWikimedia = true;
            }
        }
        
        if (isWikimedia) {
            finalUrl = finalUrl.split("?")[0];
            return `https://images.weserv.nl/?url=${encodeURIComponent(finalUrl)}&w=400`;
        }
        return value.replace(/^http:\\/\\//i, "https://");
    } catch { }
    return value;
}"""
    text = re.sub(pattern, new_func, text)

    if "come-giocare.js" in filepath:
        if 'image.loading = "lazy";' not in text:
            text = text.replace('image.className = "character-thumb";', 'image.className = "character-thumb";\\n        image.loading = "lazy";')

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(text)

process('app.js')
process('come-giocare.js')
print("Done")
