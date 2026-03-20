import urllib.request, urllib.error
url = 'https://images.weserv.nl/?url=commons.wikimedia.org%2Fwiki%2FSpecial%3AFilePath%2FEnrico_Fermi_1943-49.jpg&w=400'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0', 'Referer': 'http://localhost:8000/'})
try:
    res = urllib.request.urlopen(req)
    print("SUCCESS", res.status)
except urllib.error.HTTPError as e:
    print("HTTP ERROR", e.code)
