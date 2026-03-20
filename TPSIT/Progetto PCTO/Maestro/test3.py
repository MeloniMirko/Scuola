import urllib.request, urllib.error
for name in ['Fei-Fei_Li.jpg', 'Elon_Musk_Royal_Society_%28crop1%29.jpg', 'Emmy_Noether.jpg']:
    url = f"https://commons.wikimedia.org/wiki/Special:FilePath/{name}?width=400"
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        res = urllib.request.urlopen(req)
        print(name, res.status, res.headers.get('content-type'))
    except urllib.error.HTTPError as e:
        print(name, 'HTTP ERROR', e.code)
