import re

files_to_process = [
    r"D:\MyProjects\sdg-sprints\src\components\Header.jsx",
    r"D:\MyProjects\sdg-sprints\src\components\Footer.jsx"
]

for file_path in files_to_process:
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Safely remove all dark: classes (like dark:bg-white/5, dark:hover:text-rose-400, etc.)
    new_content = re.sub(r'\s*dark:[a-zA-Z0-9_\-\/\[\]#:]+', '', content)
    
    # Clean up any leftover double spaces inside classNames
    new_content = re.sub(r'className="([^"]+)"', lambda m: f'className="{re.sub(r" +", " ", m.group(1)).strip()}"', new_content)
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f"Cleaned {file_path}")
