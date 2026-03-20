import urllib.request
url = 'https://images.weserv.nl/?url=upload.wikimedia.org/wikipedia/commons/d/d4/Enrico_Fermi_1943-49.jpg&w=400'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    res = urllib.request.urlopen(req)
    print(res.status, res.headers.get('content-type'))
except Exception as e:
    print('ERROR', e)
