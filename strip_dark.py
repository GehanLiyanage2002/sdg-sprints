import re

files_to_process = [
    r"D:\MyProjects\sdg-sprints\src\components\Header.jsx",
    r"D:\MyProjects\sdg-sprints\src\components\Footer.jsx"
]

for file_path in files_to_process:
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Remove all dark: classes, ensuring we don't leave double spaces
    new_content = re.sub(r'\bdark:[a-zA-Z0-9_/-]+', '', content)
    new_content = re.sub(r'\s+', ' ', new_content) # This would mess up newlines!
    
    # Better regex to just remove the dark: classes and their preceding or trailing space
    new_content = re.sub(r'\s*dark:[a-zA-Z0-9_/-[\]#]+', '', content)
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f"Removed dark mode classes from {file_path}")
