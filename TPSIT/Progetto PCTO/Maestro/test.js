function sanitizeHttpUrl(value) {
    if (typeof value !== "string" || !value) return "";
    try {
        const parsed = new URL(value);
        if (parsed.protocol === "http:") parsed.protocol = "https:";
        if (parsed.protocol === "https:") {
            let finalUrl = parsed.href;
            const fileMatch = finalUrl.match(/\/wiki\/File:([^#?]+)/);
            if (fileMatch) finalUrl = `https://commons.wikimedia.org/wiki/Special:FilePath/${fileMatch[1]}`;
            if (finalUrl.includes("Special:FilePath") && !finalUrl.includes("width=")) {
                finalUrl += (finalUrl.includes("?") ? "&" : "?") + "width=400";
            }
            return finalUrl;
        }
    } catch { }
    return "";
}

console.log(sanitizeHttpUrl("https://commons.wikimedia.org/wiki/File:Enrico_Fermi_1943-49.jpg#/media/File:Enrico_Fermi_1943-49.jpg"));
