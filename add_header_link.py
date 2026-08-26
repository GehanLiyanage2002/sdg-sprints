import re

with open(r'D:\MyProjects\sdg-sprints\src\components\Header.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Desktop link
desktop_link = '<Link to="/guidelines" className="hover:text-rose-600 transition-colors">Guidelines</Link>\n          '
content = content.replace('<Link to="/past-sessions" className="hover:text-rose-600 transition-colors">Past Sessions</Link>', '<Link to="/past-sessions" className="hover:text-rose-600 transition-colors">Past Sessions</Link>\n          ' + desktop_link)

# Mobile link
mobile_link = '<Link to="/guidelines" onClick={closeMobileMenu} className="hover:text-rose-600 transition-colors block py-3 border-b border-neutral-100">Guidelines</Link>\n            '
content = content.replace('<Link to="/past-sessions" onClick={closeMobileMenu} className="hover:text-rose-600 transition-colors block py-3 border-b border-neutral-100">Past Sessions</Link>', '<Link to="/past-sessions" onClick={closeMobileMenu} className="hover:text-rose-600 transition-colors block py-3 border-b border-neutral-100">Past Sessions</Link>\n            ' + mobile_link)

with open(r'D:\MyProjects\sdg-sprints\src\components\Header.jsx', 'w', encoding='utf-8') as f:
    f.write(content)
