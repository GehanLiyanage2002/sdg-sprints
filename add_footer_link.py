import re

with open(r'D:\MyProjects\sdg-sprints\src\components\Footer.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

new_link = '<Link to="/guidelines" className="hover:text-rose-600 transition-colors">Guidelines & Templates</Link>\n              '
content = content.replace('<Link to="/program" className="hover:text-rose-600 transition-colors">Program Structure</Link>', '<Link to="/program" className="hover:text-rose-600 transition-colors">Program Structure</Link>\n              ' + new_link)

with open(r'D:\MyProjects\sdg-sprints\src\components\Footer.jsx', 'w', encoding='utf-8') as f:
    f.write(content)
