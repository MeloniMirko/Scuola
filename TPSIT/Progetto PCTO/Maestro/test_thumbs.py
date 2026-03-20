import urllib.request, urllib.error
urls = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Einstein_1921_by_F_Schmutzer_-_restoration.jpg/400px-Einstein_1921_by_F_Schmutzer_-_restoration.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Enrico_Fermi_1943-49.jpg/400px-Enrico_Fermi_1943-49.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Fei-Fei_Li.jpg/400px-Fei-Fei_Li.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg/400px-Elon_Musk_Royal_Society_%28crop1%29.jpg"
]
for url in urls:
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0', 'Referer': 'http://localhost:8000/'})
    try:
        res = urllib.request.urlopen(req, timeout=10)
        print(f"OK  {url.split('/')[-1][:50]}")
    except urllib.error.HTTPError as e:
        print(f"ERR {e.code} {url.split('/')[-1][:50]}")
    except Exception as e:
        print(f"EXC {url.split('/')[-1][:50]}: {e}")
