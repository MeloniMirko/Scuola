import re, hashlib, urllib.parse

with open('characters.js', 'r', encoding='utf-8') as f:
    text = f.read()

def repl(m):
    url = m.group(0).strip('"')
    
    # Extract filename from any format
    filename = None
    if 'Special:FilePath/' in url:
        # It handles encoded ?width=400 etc
        filename = url.split('Special:FilePath/')[1].split('?')[0]
    elif '/wiki/File:' in url:
        filename = url.split('/wiki/File:')[1].split('#')[0].split('?')[0]
    elif '/wikipedia/commons/' in url:
        filename = url.split('/')[-1]
    
    if filename:
        filename = urllib.parse.unquote(filename).replace(' ', '_')
        # hash it
        md5_hash = hashlib.md5(filename.encode('utf-8')).hexdigest()
        a = md5_hash[0]
        ab = md5_hash[0:2]
        # properly encode filename for URL
        encoded_filename = urllib.parse.quote(filename)
        # wikipedia preserves some characters like ( ) though? Yes but we quote it safely.
        encoded_filename = filename.replace('(', '%28').replace(')', '%29') # manual safety for Elon Musk
        # let's just quote the filename manually but avoiding double encode
        # wait, the CDN is very flexible. Let's use urllib.parse.quote
        encoded_filename = urllib.parse.quote(filename)
        
        return f'"https://upload.wikimedia.org/wikipedia/commons/thumb/{a}/{ab}/{encoded_filename}/400px-{encoded_filename}"'
    return m.group(0)

new_text = re.sub(r'\"https://[^\"]+\"', repl, text)

with open('characters.js', 'w', encoding='utf-8') as f:
    f.write(new_text)

print("Done converting to native thumbnails.")
