import re

def strip_it(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        text = f.read()

    pattern = r'function\s+sanitizeHttpUrl\(value\)\s*\{(?:[^{}]|{(?:[^{}]|{[^}]*})*})*\}'
    
    simple_func = """function sanitizeHttpUrl(value) {
    if (typeof value !== "string" || !value) return "";
    try {
        return value.trim().replace(/^http:\\/\\//i, "https://");
    } catch { }
    return value;
}"""

    text = re.sub(pattern, simple_func, text)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(text)

strip_it('app.js')
strip_it('come-giocare.js')
print("Done removing weserv logic")
