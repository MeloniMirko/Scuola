import urllib.request, urllib.error
for url in [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Enrico_Fermi_1943-49.jpg/400px-Enrico_Fermi_1943-49.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Fei-Fei_Li.jpg/400px-Fei-Fei_Li.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Elon_Musk_Royal_Society_%28crop1%29.jpg/400px-Elon_Musk_Royal_Society_%28crop1%29.jpg'
]:
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0', 'Referer': 'http://localhost'})
    try:
        res = urllib.request.urlopen(req)
        print(url.split('/')[-1], res.status, res.headers.get('content-type'))
    except urllib.error.HTTPError as e:
        print(url.split('/')[-1], 'HTTP ERROR', e.code)
