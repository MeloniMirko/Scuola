import re

with open('app.js', 'r', encoding='utf-8') as f:
    text = f.read()

m = re.search(r'const LOCAL_SEED = \[\n([\s\S]*?)\n\];', text)
if not m:
    print("Not found")
    exit(1)

lines = m.group(1).split('\n')
out = ["const SHARED_CHARACTERS_DATA = ["]
for l in lines:
    if "seedCharacter" in l:
        args = l.strip().replace("seedCharacter(", "", 1)
        if args.endswith("),"):
            args = args[:-2]
        elif args.endswith(")"):
            args = args[:-1]
        out.append(f"    {{ args: [{args}] }},")
out.append("];")

with open('characters.js', 'w', encoding='utf-8') as f:
    f.write("\n".join(out))
print("characters.js created.")
