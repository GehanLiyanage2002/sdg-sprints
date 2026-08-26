import re
import json

with open('data_dump.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

sdgs_array = data['sdgs']
problems = data['problems']

with open(r'D:\MyProjects\sdg-sprints\src\components\Goals.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace sdgs array
new_content = re.sub(
    r'const sdgs = \[[\s\S]*?\];',
    lambda m: 'const sdgs = ' + json.dumps(sdgs_array, indent=4) + ';',
    content
)

# Replace problems array
new_content = re.sub(
    r'const problems = \[[\s\S]*?\];',
    lambda m: 'const problems = ' + json.dumps(problems, indent=4) + ';',
    new_content
)

with open(r'D:\MyProjects\sdg-sprints\src\components\Goals.jsx', 'w', encoding='utf-8') as f:
    f.write(new_content)
    
print("Goals.jsx updated successfully!")
