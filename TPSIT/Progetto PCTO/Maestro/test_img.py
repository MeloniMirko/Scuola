import re, urllib.request, urllib.error
import urllib.parse

with open('characters.js', 'r', encoding='utf-8') as f:
    text = f.read()

urls = re.findall(r'https://[^\"\'\s]+', text)
bad = []

for u in urls:
    try:
        req = urllib.request.Request(u.strip(), headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'})
        res = urllib.request.urlopen(req, timeout=5)
        ct = str(res.headers.get('content-type', ''))
        if 'image' not in ct:
            bad.append((u, 'Bad content-type: ' + ct))
    except urllib.error.HTTPError as e:
        if e.code == 404 or e.code == 403:
            bad.append((u, 'HTTP ' + str(e.code)))
    except Exception as e:
        bad.append((u, str(e)))

print('--- BAD URLS ---')
for u, err in bad:
    print(err + ': ' + u)
if not bad:
    print('ALL OK')
