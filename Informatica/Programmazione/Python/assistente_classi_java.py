import tkinter as tk
from tkinter import ttk, scrolledtext

# ======================================================
#                     FUNZIONI
# ======================================================

def genera_codice():
    class_name = entry_class.get().strip()
    raw_vars = text_vars.get("1.0", tk.END).strip().split("\n")
    
    if not class_name or not raw_vars[0]:
        lbl_status.config(text="⚠ Inserisci il nome e almeno una variabile!", foreground="#f44336")
        return

    variables = []
    for line in raw_vars:
        if ":" in line:
            name, typ = line.split(":")
            variables.append((name.strip(), typ.strip()))

    # ------------------------------------------
    #           GENERAZIONE CODICE JAVA
    # ------------------------------------------
    
    code = f"public class {class_name} {{\n\n"
    
    # Attributi
    code += "    // Attributi\n"
    for name, typ in variables:
        code += f"    private {typ} {name};\n"
    code += "\n"

    # Costruttore principale
    code += f"    // Costruttore Principale\n"
    code += f"    public {class_name}(" + ", ".join([f"{typ} {name}" for name, typ in variables]) + ") {\n"
    for name, typ in variables:
        code += f"        this.{name} = {name};\n"
    code += "    }\n\n"

    # Costruttore di copia
    code += f"    // Costruttore di Copia\n"
    code += f"    public {class_name}({class_name} other) {{\n"
    for name, typ in variables:
        code += f"        this.{name} = other.get{name.capitalize()}();\n"
    code += "    }\n\n"

    # Getter
    code += "    // Getter\n"
    for name, typ in variables:
        code += f"    public {typ} get{name.capitalize()}() {{\n"
        code += f"        return this.{name};\n"
        code += "    }\n\n"

    # Setter
    code += "    // Setter\n"
    for name, typ in variables:
        code += f"    public void set{name.capitalize()}({typ} {name}) {{\n"
        code += f"        this.{name} = {name};\n"
        code += "    }\n\n"

    # toString corretto stile multilinea
    code += "    // toString\n"
    code += "    @Override\n"
    code += "    public String toString() {\n"
    code += "        return "

    for i, (name, _) in enumerate(variables):
        newline = '"\\n" + ' if i > 0 else ""
        code += f'{newline}"{name.capitalize()}=" + this.{name}'
        if i < len(variables) - 1:
            code += " +\n                 "
        else:
            code += ";\n"
    code += "    }\n\n"

    code += "}\n"

    # Pulisci e mostra
    text_output.delete("1.0", tk.END)
    animate_code(code)
    progress['value'] = 0
    animate_progress()


def animate_code(code, index=0):
    if index < len(code):
        text_output.insert(tk.END, code[index])
        text_output.see(tk.END)
        root.after(1, lambda: animate_code(code, index + 1))
    else:
        lbl_status.config(text="✔ Codice generato!", foreground="#4CAF50")
        root.after(2500, lambda: lbl_status.config(text=""))


def animate_progress(current=0):
    if current <= 100:
        progress['value'] = current
        root.after(5, lambda: animate_progress(current + 1))


def copia_codice():
    root.clipboard_clear()
    root.clipboard_append(text_output.get("1.0", tk.END))
    lbl_status.config(text="✔ Codice copiato!", foreground="#2196F3")
    root.after(2500, lambda: lbl_status.config(text=""))


def pulisci_tutto():
    entry_class.delete(0, tk.END)
    text_vars.delete("1.0", tk.END)
    text_output.delete("1.0", tk.END)
    lbl_status.config(text="")
    progress['value'] = 0


# ======================================================
#                        UI MIGLIORATA
# ======================================================

root = tk.Tk()
root.title("Generatore Professionale Classi Java")
root.geometry("1050x750")
root.configure(bg="#1e1e1e")

# Tema
style = ttk.Style(root)
style.theme_use("clam")
style.configure("TLabel", background="#1e1e1e", foreground="white", font=("Segoe UI", 12))
style.configure("TFrame", background="#1e1e1e")
style.configure("TEntry", fieldbackground="#2d2d2d", foreground="white")
style.configure("TButton", padding=6)

# Titolo
title = ttk.Label(root, text="Generatore Professionale di Classi Java",
                  font=("Segoe UI", 26, "bold"))
title.pack(pady=15)

# Frame input
frame = ttk.Frame(root)
frame.pack(pady=15)

lbl_class = ttk.Label(frame, text="Nome Classe:")
lbl_class.grid(row=0, column=0, sticky="w", padx=10, pady=10)

entry_class = ttk.Entry(frame, width=40)
entry_class.grid(row=0, column=1, pady=10)

lbl_vars = ttk.Label(frame, text="Variabili (es: nome : String):")
lbl_vars.grid(row=1, column=0, sticky="nw", padx=10)

text_vars = scrolledtext.ScrolledText(frame, width=40, height=10,
                                      bg="#292929", fg="white",
                                      insertbackground="white",
                                      borderwidth=2, relief="solid")
text_vars.grid(row=1, column=1)

# Pulsanti
btn_frame = tk.Frame(root, bg="#1e1e1e")
btn_frame.pack(pady=10)

def make_button(text, cmd, color):
    b = tk.Button(btn_frame, text=text, command=cmd,
                  bg=color, fg="white",
                  font=("Segoe UI", 11, "bold"),
                  relief="flat", padx=12, pady=6)
    b.pack(side="left", padx=10)
    return b

btn_generate = make_button("Genera Codice", genera_codice, "#4CAF50")
btn_copy = make_button("Copia Codice", copia_codice, "#2196F3")
btn_clear = make_button("Pulisci Tutto", pulisci_tutto, "#f44336")

# Barra di progresso
progress = ttk.Progressbar(root, orient="horizontal", length=500, mode="determinate")
progress.pack(pady=10)

# Stato
lbl_status = ttk.Label(root, text="", font=("Segoe UI", 12))
lbl_status.pack()

# Output
lbl_output = ttk.Label(root, text="Codice Generato:")
lbl_output.pack(pady=5)

text_output = scrolledtext.ScrolledText(root, width=120, height=24,
                                        bg="#292929", fg="white",
                                        insertbackground="white",
                                        borderwidth=2, relief="solid")
text_output.pack(pady=10)

root.mainloop()