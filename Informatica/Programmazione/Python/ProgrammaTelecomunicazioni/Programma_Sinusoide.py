import tkinter as tk
from tkinter import ttk
import numpy as np
import matplotlib.pyplot as plt
from matplotlib.backends.backend_tkagg import FigureCanvasTkAgg

class SinusoideApp:
    def __init__(self, root):
        self.root = root
        self.root.title("FasorLab - Analizzatore Fasoriale")
        self.root.geometry("1600x800")
        self.root.configure(bg='#1E1E2E')

        # Parametri
        self.buffer_size = 1000
        self.max_amp = 50
        self.x_shift = 0
        self.animating = False
        self.pan_start = None
        self.fasori = []
        self.fasore_entries = []
        self.fasore_lines = []

        self.colors = ['#89B4FA', '#F38BA8', '#A6E3A1', '#F9E2AF', '#CBA6F7', '#FAB387', '#94E2D5', '#F5C2E7', '#BAC2DE', '#CDD6F4']

        self.setup_ui()
        self.setup_plot()

    # ---------------- UI ----------------
    def setup_ui(self):
        style = ttk.Style()
        style.configure('TFrame', background='#1E1E2E')
        style.configure('TLabel', background='#1E1E2E', foreground='#ECEFF4', font=('Segoe UI', 10))
        style.configure('TButton', font=('Segoe UI', 10, 'bold'), padding=5)
        style.configure('TEntry', font=('Segoe UI', 10))
        style.configure('TLabelframe', background='#1E1E2E', foreground='#ECEFF4', font=('Segoe UI', 11, 'bold'))
        style.configure('TLabelframe.Label', background='#1E1E2E', foreground='#89B4FA', font=('Segoe UI', 11, 'bold'))

        main_frame = ttk.Frame(self.root)
        main_frame.pack(fill='both', expand=True, padx=10, pady=10)

        # Sidebar
        self.sidebar = ttk.Frame(main_frame, width=320)
        self.sidebar.pack(side='left', fill='y', padx=(0,10))

        # Solo una volta parametri globali
        self.setup_global_params()
        self.setup_fasori_management()

        control_frame = ttk.Frame(self.sidebar)
        control_frame.pack(fill='x', pady=10)

        self.start_btn = ttk.Button(control_frame, text="▶ Avvia Oscilloscopio", command=self.start_animation)
        self.start_btn.pack(fill='x', pady=5)

        self.stop_btn = ttk.Button(control_frame, text="⏹ Ferma", command=self.stop_animation, state='disabled')
        self.stop_btn.pack(fill='x', pady=5)

        self.graph_frame = ttk.Frame(main_frame)
        self.graph_frame.pack(side='right', fill='both', expand=True)

    def setup_global_params(self):
        params_frame = ttk.LabelFrame(self.sidebar, text="⚙ Parametri Globali", padding=10)
        params_frame.pack(fill='x', pady=(0,10))

        ttk.Label(params_frame, text="Frequenza (Hz):").grid(row=0, column=0, sticky='w', pady=2)
        self.freq_var = tk.StringVar(value="1.0")
        ttk.Entry(params_frame, textvariable=self.freq_var).grid(row=0, column=1, sticky='ew', pady=2)
        params_frame.columnconfigure(1, weight=1)

    # ---------------- Fasori ----------------
    def setup_fasori_management(self):
        fasori_frame = ttk.LabelFrame(self.sidebar, text="Gestione Fasori", padding=10)
        fasori_frame.pack(fill='both', expand=True)

        ttk.Label(fasori_frame, text="Numero Fasori:").pack(anchor='w')
        self.num_fasori_var = tk.IntVar(value=0)
        self.num_fasori_spin = tk.Spinbox(fasori_frame, from_=0, to=10, textvariable=self.num_fasori_var, command=self.update_fasori_count)
        self.num_fasori_spin.pack(fill='x', pady=(0,10))

        self.fasori_canvas = tk.Canvas(fasori_frame, bg='#2E3440', highlightthickness=0)
        scrollbar = ttk.Scrollbar(fasori_frame, orient='vertical', command=self.fasori_canvas.yview)
        self.fasori_scrollable_frame = ttk.Frame(self.fasori_canvas)

        self.fasori_scrollable_frame.bind("<Configure>", lambda e: self.fasori_canvas.configure(scrollregion=self.fasori_canvas.bbox("all")))

        self.fasori_canvas.create_window((0, 0), window=self.fasori_scrollable_frame, anchor="nw")
        self.fasori_canvas.configure(yscrollcommand=scrollbar.set)

        self.fasori_canvas.pack(side='left', fill='both', expand=True)
        scrollbar.pack(side='right', fill='y')

    def update_fasori_count(self):
        num = self.num_fasori_var.get()
        current = len(self.fasori)
        if num > current:
            for i in range(current, num):
                color = self.colors[i % len(self.colors)]
                self.fasori.append({'amp': 10.0, 'phase': 0.0, 'color': color})
                self.create_fasore_entry(i)
                if hasattr(self, 'ax_sin'):
                    line, = self.ax_sin.plot([], [], color=color, linestyle='-', linewidth=1.5, alpha=0.8)
                    self.fasore_lines.append(line)
        elif num < current:
            for i in range(current - 1, num - 1, -1):
                self.fasori.pop()
                self.fasore_entries[i].destroy()
                self.fasore_entries.pop()
                if i < len(self.fasore_lines):
                    self.fasore_lines[i].remove()
                    self.fasore_lines.pop()
        self.update_plot()

    def create_fasore_entry(self, index):
        frame = ttk.Frame(self.fasori_scrollable_frame)
        frame.pack(fill='x', pady=5)
        ttk.Label(frame, text=f"Fasore {index+1}", foreground=self.fasori[index]['color'], font=('Arial', 10, 'bold')).pack(anchor='w')

        amp_frame = ttk.Frame(frame)
        amp_frame.pack(fill='x')
        ttk.Label(amp_frame, text="Amp:").pack(side='left')
        amp_var = tk.StringVar(value=str(self.fasori[index]['amp']))
        ttk.Entry(amp_frame, textvariable=amp_var, width=8).pack(side='right')
        amp_var.trace_add('write', lambda *args, idx=index, var=amp_var: self.update_fasore_value(idx, 'amp', var))

        phase_frame = ttk.Frame(frame)
        phase_frame.pack(fill='x')
        ttk.Label(phase_frame, text="Fase (gradi):").pack(side='left')
        phase_var = tk.StringVar(value=str(self.fasori[index]['phase']))
        ttk.Entry(phase_frame, textvariable=phase_var, width=8).pack(side='right')
        phase_var.trace_add('write', lambda *args, idx=index, var=phase_var: self.update_fasore_value(idx, 'phase', var))

        self.fasore_entries.append(frame)

    def update_fasore_value(self, index, key, var):
        try:
            value = float(var.get())
            self.fasori[index][key] = value
            self.update_plot()
        except ValueError:
            pass

    # ---------------- Plot ----------------
    def setup_plot(self):
        self.fig, (self.ax_sin, self.ax_fasori) = plt.subplots(1, 2, figsize=(12, 5))
        plt.tight_layout()
        plt.style.use('dark_background')
        self.fig.patch.set_facecolor('#2E3440')

        self.ax_sin.set_facecolor('#0F0F23')
        self.ax_sin.set_xlim(0, self.buffer_size)
        self.ax_sin.set_ylim(-self.max_amp, self.max_amp)
        self.ax_sin.axhline(0, color='#F38BA8', linewidth=1.5, alpha=0.7)
        self.ax_sin.axvline(self.buffer_size//2, color='#F38BA8', linewidth=1.5, alpha=0.7)
        self.ax_sin.grid(True, color='#313244', linestyle='--', alpha=0.3)
        self.ax_sin.set_title("📊 Oscilloscopio Fasori", color='white', fontsize=14, fontweight='bold')

        self.risultante_line, = self.ax_sin.plot([], [], color='#F38BA8', linewidth=3)

        self.ax_fasori.set_facecolor('#0F0F23')
        self.ax_fasori.set_xlim(-self.max_amp, self.max_amp)
        self.ax_fasori.set_ylim(-self.max_amp, self.max_amp)
        self.ax_fasori.axhline(0, color='#F38BA8', linewidth=1.5, alpha=0.7)
        self.ax_fasori.axvline(0, color='#F38BA8', linewidth=1.5, alpha=0.7)
        self.ax_fasori.grid(True, color='#313244', linestyle='--', alpha=0.3)
        self.ax_fasori.set_title("🔄 Diagramma Fasoriale", color='white', fontsize=14, fontweight='bold')
        self.ax_fasori.set_xlabel("Reale", color='white')
        self.ax_fasori.set_ylabel("Immaginario", color='white')

        self.canvas = FigureCanvasTkAgg(self.fig, master=self.graph_frame)
        self.canvas.get_tk_widget().pack(fill="both", expand=True)

        self.canvas.mpl_connect("button_press_event", self.on_press)
        self.canvas.mpl_connect("button_release_event", self.on_release)
        self.canvas.mpl_connect("motion_notify_event", self.on_motion)
        self.canvas.mpl_connect("scroll_event", self.on_scroll)

    # ---------------- Grafico ----------------
    def update_plot(self):
        self.ax_fasori.clear()
        self.ax_fasori.set_facecolor('#1E1E1E')
        self.ax_fasori.set_xlim(-self.max_amp, self.max_amp)
        self.ax_fasori.set_ylim(-self.max_amp, self.max_amp)
        self.ax_fasori.axhline(0, color='white', linewidth=1.5, alpha=0.7)
        self.ax_fasori.axvline(0, color='white', linewidth=1.5, alpha=0.7)
        self.ax_fasori.grid(True, color='gray', linestyle='--', alpha=0.3)
        self.ax_fasori.set_title("Diagramma Fasoriale", color='white', fontsize=14, fontweight='bold')
        self.ax_fasori.set_xlabel("Reale", color='white')
        self.ax_fasori.set_ylabel("Immaginario", color='white')

        total_real, total_imag = 0, 0
        for i, f in enumerate(self.fasori):
            amp = f['amp']
            phase_rad = np.radians(f['phase'])
            x = amp * np.cos(phase_rad)
            y = amp * np.sin(phase_rad)
            self.ax_fasori.arrow(0, 0, x, y, color=f['color'], head_width=2, head_length=3, length_includes_head=True, alpha=0.8, linewidth=2)
            self.ax_fasori.text(x*1.1, y*1.1, f'F{i+1}', color=f['color'], fontsize=10, fontweight='bold')
            total_real += x
            total_imag += y

        if self.fasori:
            self.ax_fasori.arrow(0,0,total_real,total_imag, color='#F38BA8', head_width=3, head_length=4, length_includes_head=True, linewidth=3, alpha=0.9)
            self.ax_fasori.text(total_real*1.1, total_imag*1.1, 'Risultante', color='#F38BA8', fontsize=12, fontweight='bold')

        self.canvas.draw()

    def aggiorna_grafico(self):
        if not self.animating:
            return
        try:
            freq = float(self.freq_var.get())
        except ValueError:
            freq = 1.0
        t = np.arange(self.buffer_size)/self.buffer_size
        fasori_total_y = np.zeros(self.buffer_size)
        for i, f in enumerate(self.fasori):
            component_y = f['amp']*np.sin(2*np.pi*freq*t + self.x_shift + np.radians(f['phase']))
            fasori_total_y += component_y
            self.fasore_lines[i].set_data(np.arange(self.buffer_size), component_y)
        self.risultante_line.set_data(np.arange(self.buffer_size), fasori_total_y)
        self.update_plot()
        self.canvas.draw()
        self.x_shift += 0.1
        self.root.after(20, self.aggiorna_grafico)

    # ---------------- Controllo ----------------
    def start_animation(self):
        if not self.animating:
            self.animating = True
            self.start_btn.config(state='disabled')
            self.stop_btn.config(state='normal')
            self.aggiorna_grafico()
    def stop_animation(self):
        self.animating = False
        self.start_btn.config(state='normal')
        self.stop_btn.config(state='disabled')

    # ---------------- Pan & Zoom ----------------
    def on_press(self, event):
        if event.button == 1:
            self.pan_start = event.x, event.y
    def on_release(self, event):
        self.pan_start = None
    def on_motion(self, event):
        if self.pan_start is None:
            return
        dx = event.x - self.pan_start[0]
        dy = event.y - self.pan_start[1]
        for ax in [self.ax_sin, self.ax_fasori]:
            xlim, ylim = ax.get_xlim(), ax.get_ylim()
            ax.set_xlim(xlim[0] - dx*(xlim[1]-xlim[0])/200, xlim[1] - dx*(xlim[1]-xlim[0])/200)
            ax.set_ylim(ylim[0] + dy*(ylim[1]-ylim[0])/200, ylim[1] + dy*(ylim[1]-ylim[0])/200)
        self.canvas.draw()
        self.pan_start = event.x, event.y
    def on_scroll(self, event):
        factor = 1.2 if event.button=='up' else 0.8
        for ax in [self.ax_sin,self.ax_fasori]:
            xlim, ylim = ax.get_xlim(), ax.get_ylim()
            xmid, ymid = (xlim[0]+xlim[1])/2,(ylim[0]+ylim[1])/2
            xrange, yrange = (xlim[1]-xlim[0])*factor/2, (ylim[1]-ylim[0])*factor/2
            ax.set_xlim(xmid-xrange,xmid+xrange)
            ax.set_ylim(ymid-yrange, ymid+yrange)
        self.canvas.draw()

# ---------------- Intro animata ----------------
def show_intro():
    intro = tk.Tk()
    intro.title("")
    intro.geometry("600x400")
    intro.configure(bg='#1E1E2E')
    intro.overrideredirect(True)
    intro.attributes("-topmost", True)

    screen_width, screen_height = intro.winfo_screenwidth(), intro.winfo_screenheight()
    x, y = (screen_width-600)//2, (screen_height-400)//2
    intro.geometry(f"600x400+{x}+{y}")

    tk.Label(intro, text="🔬 FasorLab", font=('Segoe UI',48,'bold'), fg='#89B4FA', bg='#1E1E2E').pack(expand=True)
    tk.Label(intro, text="Analizzatore Fasoriale Avanzato", font=('Segoe UI',18), fg='#ECEFF4', bg='#1E1E2E').pack(pady=10)

    progress_frame = tk.Frame(intro, bg='#1E1E2E')
    progress_frame.pack(pady=30, fill='x', padx=50)
    progress = tk.Canvas(progress_frame, height=20, bg='#2E3440', highlightthickness=0)
    progress.pack(fill='x')

    bar = progress.create_rectangle(0,0,0,20, fill='#89B4FA')

    def animate_bar(step=0):
        width = progress_frame.winfo_width()
        progress.coords(bar, 0,0,step/50*width,20)
        if step < 50:
            intro.after(50, lambda: animate_bar(step+1))
        else:
            intro.destroy()
            root = tk.Tk()
            app = SinusoideApp(root)
            root.mainloop()

    animate_bar()
    intro.mainloop()

if __name__=="__main__":
    show_intro()