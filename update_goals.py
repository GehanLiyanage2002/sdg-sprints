import re
import json

raw_text = """
SDG 1: No Poverty
1.1 Poor Targeting of Welfare Programs and Estate Poverty
Weak targeting mechanisms and exclusion errors in welfare programs result in many vulnerable households, especially in estate regions—being left out of benefits. This deepens multidimensional poverty, affecting income, education, housing, and health simultaneously.

1.2 Informal Workers Trapped in Poverty Cycles by Economic Shocks
A large share of workers rely on informal employment without job security, insurance, or pensions. This makes them highly susceptible to economic shocks, trapping families in recurring poverty cycles.

1.3 High Cost of Living Reduces Income for the Poor
Inflation and currency depreciation reduce real purchasing power, disproportionately affecting low-income households and pushing near-poor populations below the poverty line.

SDG 2: Zero Hunger
2.1 Food Shortages and Poor Nutrition due to Farming Setbacks
Policy disruptions and rising input costs have reduced agricultural output, increasing food prices and limiting access to adequate nutrition, especially for children.

2.2 Uneven Food Distribution and Nutritional Gaps
Inefficient logistics, storage limitations, and high transportation costs lead to uneven food distribution, creating disparities in access to nutritious food across regions.

2.3 Climate Change Threatens Food Production
Frequent droughts and floods disrupt farming cycles, reduce yields, and increase uncertainty in food production, undermining national food security.

SDG 3: Good Health and Well-Being
3.1 Staff Migration, Drug Shortages, and Rise of Non-Communicable Diseases (NCDs)
The migration of healthcare professionals, combined with shortages of essential medicines, weakens service delivery while non-communicable diseases continue to rise.

3.2 Mental Health Crisis with Limited Funding for Care
Economic stress and social instability have increased mental health issues, but limited funding, infrastructure, and stigma restrict access to care.

3.3 Late Disease Detection due to Poor Preventive Care
Insufficient screening and awareness programs result in late diagnosis of diseases, increasing both treatment costs and mortality rates.

SDG 4: Quality Education
4.1 Lack of Rural Internet Access and Outdated Vocational Skills
Limited internet access and outdated vocational training programs prevent students from acquiring skills aligned with modern labor market demands.

4.2 Uneven Learning Recovery and Post-Pandemic Gaps
Disruptions to schooling and unequal access to remote learning have caused significant learning losses, especially among disadvantaged students.

SDG 6: Clean Water and Sanitation
6.1 Aging Water Systems, Scarcity, and Poor Plantation Sanitation
Aging infrastructure, contaminated groundwater, and inadequate sanitation facilities limit access to safe and dignified water services.

6.2 Flooding and Contamination from Poor Wastewater Management
Poor drainage systems and unregulated wastewater disposal increase flood risks and contaminate urban water sources.

SDG 7: Affordable and Clean Energy
7.1 Unstable Energy Costs due to Reliance on Imported Fuel
Dependence on imported fuels exposes the country to global price fluctuations, resulting in unstable energy costs and affordability issues.

7.2 Unequal and Unreliable Energy Access in Remote Areas
Although electrification is widespread, reliable and consistent energy access remains limited in remote areas.

7.3 Slow Adoption of Renewables due to Policy Barriers
Policy uncertainty and bureaucratic delays discourage investment in renewable energy, slowing the transition to sustainable energy systems.

SDG 9: Industry, Innovation, and Infrastructure
9.1 Economic Crisis Hinders Industrial Growth and Infrastructure Investment
Economic instability has reduced investment in industry and infrastructure, limiting growth and competitiveness.

9.2 Lack of Funds Stalls Innovation and Growth for Small Businesses
High borrowing costs and limited access to capital restrict the ability of SMEs to innovate and expand.

9.3 Rural Digital Divide Limits Economic Participation
Limited broadband access in rural areas prevents businesses and communities from participating in the digital economy.

SDG 10: Reduced Inequalities
10.1 Economic Shocks Widen the Income Gap and Exclude Marginalized Groups
Economic shocks have widened income gaps and disproportionately affected marginalized groups, increasing inequality.

10.2 Digital Divide Creates Unequal Economic Opportunities
Lack of digital access and skills excludes vulnerable populations from emerging economic opportunities.

SDG 11: Sustainable Cities and Communities
11.1 Unplanned Urban Growth, Housing Shortages, and Failed Waste Management
Unplanned urban growth and inadequate waste systems create environmental hazards and reduce living standards.

11.2 Traffic Congestion and Pollution from Inefficient Urban Transport
Traffic congestion and reliance on private vehicles increase emissions and reduce urban efficiency.

SDG 12: Responsible Consumption and Production
12.1 Poor Management of Plastic Waste and Lack of Recycling
Poor enforcement and lack of recycling infrastructure result in large volumes of unmanaged plastic waste.

12.2 Wasteful Consumption and Inefficient Resource Use
Limited awareness and weak policies encourage wasteful consumption patterns and inefficient resource use.

SDG 13: Climate Action
13.1 Limited Capacity to Adapt to Climate Change
Limited financial and institutional capacity restricts the implementation of effective climate adaptation strategies.

13.2 Poor Early Warning Systems for Disasters
Inadequate early warning systems and preparedness measures increase vulnerability to extreme weather events.

SDG 14: Life Below Water
14.1 Overfishing, Pollution, and Reef Damage Threaten Marine Life
Overfishing, pollution, and coral damage reduce fish stocks and threaten coastal livelihoods.

14.2 Poor Enforcement Leads to Illegal Fishing
Insufficient monitoring and enforcement enable unsustainable fishing practices.

14.3 Coastlines and Habitats Lost to Erosion and Development
Climate change and development pressures are degrading coastal ecosystems and natural protective barriers.

SDG 15: Life on Land
15.1 Forest Loss and Decline of Wildlife in Critical Ecosystems
Forest clearing and environmental stressors reduce biodiversity and ecosystem resilience.

15.2 Conflicts Between People and Wildlife Due to Habitat Loss
Expansion of human activities into natural habitats increases conflicts and disrupts ecosystems.

15.3 Poor Enforcement Allows Illegal Logging
Poor enforcement allows unsustainable exploitation of forest resources.

SDG 17: Partnerships for the Goals
17.1 Lack of Coordination and Funding for SDG Implementation
Lack of coordination and funding constraints weaken effective SDG implementation.

17.2 Limited Data for Tracking Progress on SDGs
Limited data integration reduces the ability to track progress and make informed decisions.

17.3 Limited Involvement of the Private Sector in SDGs
Insufficient incentives and unclear frameworks limit private sector participation in SDG initiatives.
"""

sdgs_full = {
    1: 'No Poverty',
    2: 'Zero Hunger',
    3: 'Good Health and Well-Being',
    4: 'Quality Education',
    5: 'Gender Equality',
    6: 'Clean Water and Sanitation',
    7: 'Affordable and Clean Energy',
    8: 'Decent Work and Economic Growth',
    9: 'Industry, Innovation and Infrastructure',
    10: 'Reduced Inequalities',
    11: 'Sustainable Cities and Communities',
    12: 'Responsible Consumption and Production',
    13: 'Climate Action',
    14: 'Life Below Water',
    15: 'Life on Land',
    16: 'Peace, Justice and Strong Institutions',
    17: 'Partnerships for the Goals'
}

tags_map = {
    '1.1': 'Welfare / Targeting',
    '1.2': 'Job Security',
    '1.3': 'Cost of Living',
    '2.1': 'Agri Supply',
    '2.2': 'Logistics',
    '2.3': 'Climate Resilience',
    '3.1': 'Healthcare Delivery',
    '3.2': 'Mental Health',
    '3.3': 'Early Detection',
    '4.1': 'Digital Access',
    '4.2': 'Learning Recovery',
    '6.1': 'Infrastructure',
    '6.2': 'Wastewater',
    '7.1': 'Energy Import',
    '7.2': 'Remote Access',
    '7.3': 'Renewables',
    '9.1': 'Investment',
    '9.2': 'SME Funding',
    '9.3': 'Digital Divide',
    '10.1': 'Income Gap',
    '10.2': 'Digital Inclusion',
    '11.1': 'Urban Planning',
    '11.2': 'Transport',
    '12.1': 'Recycling',
    '12.2': 'Resource Use',
    '13.1': 'Adaptation',
    '13.2': 'Early Warning',
    '14.1': 'Marine Life',
    '14.2': 'Enforcement',
    '14.3': 'Erosion',
    '15.1': 'Conservation',
    '15.2': 'Human-Wildlife',
    '15.3': 'Anti-Logging',
    '17.1': 'Coordination',
    '17.2': 'Data Tracking',
    '17.3': 'Private Sector'
}

problems = []
current_sdg = None

lines = raw_text.strip().split('\n')
i = 0
while i < len(lines):
    line = lines[i].strip()
    if not line:
        i += 1
        continue
    
    sdg_match = re.match(r'^SDG\s+(\d+):', line)
    if sdg_match:
        current_sdg = int(sdg_match.group(1))
        i += 1
        continue
        
    code_match = re.match(r'^(\d+\.\d+)\s+(.+)', line)
    if code_match and current_sdg:
        code = code_match.group(1)
        title = code_match.group(2)
        
        # Read next line as desc
        i += 1
        desc = ""
        while i < len(lines) and lines[i].strip() and not re.match(r'^(\d+\.\d+|SDG\s+\d+:)', lines[i]):
            desc += lines[i].strip() + " "
            i += 1
            
        problems.append({
            'sdg': f'SDG {current_sdg}',
            'code': code,
            'title': title.strip(),
            'desc': desc.strip(),
            'tag': tags_map.get(code, 'Challenge')
        })
        continue
        
    i += 1

sdg_ids_used = sorted(list(set([int(p['sdg'].split(' ')[1]) for p in problems])))

sdgs_array = []
for sid in sdg_ids_used:
    sdgs_array.append({
        'id': sid,
        'title': sdgs_full[sid],
        'desc': f'Focus on addressing key challenges in {sdgs_full[sid]}.'
    })

print("SDGs Array Length:", len(sdgs_array))
print("Problems Length:", len(problems))

with open('data_dump.json', 'w') as f:
    json.dump({'sdgs': sdgs_array, 'problems': problems}, f, indent=2)

with open(r'D:\MyProjects\sdg-sprints\src\components\Goals.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace sdgs array
new_content = re.sub(
    r'const sdgs = \[[\s\S]*?\];',
    'const sdgs = ' + json.dumps(sdgs_array, indent=4) + ';',
    content
)

# Replace problems array
new_content = re.sub(
    r'const problems = \[[\s\S]*?\];',
    'const problems = ' + json.dumps(problems, indent=4) + ';',
    new_content
)

with open(r'D:\MyProjects\sdg-sprints\src\components\Goals.jsx', 'w', encoding='utf-8') as f:
    f.write(new_content)
