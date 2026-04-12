import re

# Read the file
with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Define image URLs for each project  
images = {
    'Airbnb Performance': 'https://raw.githubusercontent.com/madhumalavika/airbnb-performance-dashboard/main/Global%20Airbnb%20Performance%20Overview_Dashboard1.png',
    'Cricket Analytics': 'https://raw.githubusercontent.com/madhumalavika/cricket-data-analysis/main/Cricket%20Data%20Analysis_Batting_Dashboard1.PNG',
    'HR Analytics': 'https://raw.githubusercontent.com/madhumalavika/hr-analytics-dashboard/main/Employee_Presence_Analysis-HR-Analytics%20Dashboard.PNG',
    'Mental Health Analytics': 'https://raw.githubusercontent.com/madhumalavika/panic-attack-study/main/Snowflake-Power%20BI%20Panic%20Attack%20Study_Dashboard1.PNG'
}

# Pattern to find each project and insert images after the header
for title, url in images.items():
    # Find the project header for each title and insert image
    pattern = rf'(<div class="project-title">{re.escape(title)}</div>.*?<div class="project-icon">.*?</div>\s*</div>)(\s*<div class="project-body">)'
    replacement = rf'''\1
                    <div style="height: 200px; background: linear-gradient(135deg, #dbeafe, #bae6fd); overflow: hidden; display: flex; align-items: center; justify-content: center;">
                        <img src="{url}" alt="{title} Dashboard" style="width: 100%; height: 100%; object-fit: cover;" />
                    </div>\2'''
    
    content = re.sub(pattern, replacement, content, flags=re.DOTALL)

# Write back
with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("Images added successfully to all projects!")
