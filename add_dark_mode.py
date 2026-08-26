import os
import re

dir_paths = [
    r"D:\MyProjects\sdg-sprints\src\pages",
    r"D:\MyProjects\sdg-sprints\src\components",
    r"D:\MyProjects\sdg-sprints\src"
]

replacements = {
    # Text colors
    r'\btext-slate-900\b': 'text-slate-900 dark:text-white',
    r'\btext-slate-600\b': 'text-slate-600 dark:text-rose-100/70',
    r'\btext-slate-700\b': 'text-slate-700 dark:text-rose-100/80',
    r'\btext-slate-500\b': 'text-slate-500 dark:text-rose-200/70',
    r'\btext-rose-600\b': 'text-rose-600 dark:text-rose-400',
    r'\bhover:text-rose-600\b': 'hover:text-rose-600 dark:hover:text-rose-400',
    r'\bgroup-hover:text-rose-600\b': 'group-hover:text-rose-600 dark:group-hover:text-rose-400',
    
    # Backgrounds
    r'\bbg-slate-50\b': 'bg-slate-50 dark:bg-[#24050b]',
    r'\bbg-white\b': 'bg-white dark:bg-white/5',
    r'\bbg-white/80\b': 'bg-white/80 dark:bg-[#3a0a14]/80',
    r'\bhover:bg-slate-50\b': 'hover:bg-slate-50 dark:hover:bg-white/10',
    r'\bhover:bg-slate-100\b': 'hover:bg-slate-100 dark:hover:bg-white/20',
    r'\bhover:bg-slate-200\b': 'hover:bg-slate-200 dark:hover:bg-white/20',
    
    # Overlays
    r'\bbg-slate-900/40\b': 'bg-slate-900/40 dark:bg-black/70',
    
    # Borders
    r'\bborder-slate-200\b': 'border-slate-200 dark:border-white/10',
    r'\bborder-slate-100\b': 'border-slate-100 dark:border-white/5',
    
    # Glows
    r'\bbg-rose-200/40\b': 'bg-rose-200/40 dark:bg-red-600/10',
    r'\bbg-rose-200/50\b': 'bg-rose-200/50 dark:bg-red-600/20',
    
    # Gradients
    r'\bbg-gradient-to-r from-rose-50 to-white\b': 'bg-gradient-to-r from-rose-50 to-white dark:from-rose-950/80 dark:to-[#24050b]/80',
    r'\bbg-gradient-to-t from-slate-900/50\b': 'bg-gradient-to-t from-slate-900/50 dark:from-[#24050b]',
}

for d in dir_paths:
    if not os.path.isdir(d): continue
    for f in os.listdir(d):
        if f.endswith('.jsx'):
            file_path = os.path.join(d, f)
            with open(file_path, 'r', encoding='utf-8') as file:
                content = file.read()
                
            new_content = content
            for pattern, repl in replacements.items():
                new_content = re.sub(pattern, repl, new_content)
                
            if new_content != content:
                with open(file_path, 'w', encoding='utf-8') as file:
                    file.write(new_content)
                print(f"Updated {f}")
