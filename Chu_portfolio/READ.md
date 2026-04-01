nano README.md
```

Once nano opens, paste this entire content:
```
# 🚀 Portfolio — John Lloyd B. Chu

A personal developer portfolio built with Django, deployed on PythonAnywhere.

## Live Site
https://JohnLloydBChu.pythonanywhere.com

## Tech Stack
- Backend: Django (Python)
- Frontend: HTML, CSS, JavaScript
- Database: SQLite3
- Deployment: PythonAnywhere

## Project Structure
Chu_portfolio/
├── main/
│   ├── static/
│   │   ├── style.css
│   │   └── main.js
│   ├── templates/
│   │   └── index.html
│   ├── admin.py
│   ├── apps.py
│   ├── models.py
│   ├── tests.py
│   └── views.py
├── media/
├── portfolio_page/
│   ├── asgi.py
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
├── db.sqlite3
├── manage.py
├── requirements.txt
└── README.md

## Setup Instructions
1. Clone the repository
   git clone https://github.com/Rims-code317/Portfolio.git
   cd Portfolio

2. Create virtual environment
   python -m venv venv
   venv\Scripts\activate  (Windows)
   source venv/bin/activate  (Mac/Linux)

3. Install dependencies
   pip install -r requirements.txt

4. Apply migrations
   python manage.py migrate

5. Create superuser
   python manage.py createsuperuser

6. Run the server
   python manage.py runserver
   Visit http://127.0.0.1:8000

## Deployment on PythonAnywhere
1. Clone repo
   git clone https://github.com/Rims-code317/Portfolio.git ~/portfolio

2. Setup virtual environment
   mkvirtualenv myenv --python=python3.11
   workon myenv
   pip install -r ~/portfolio/requirements.txt

3. Collect static files
   cd ~/portfolio
   python manage.py collectstatic --noinput

4. Web Tab settings
   Source code: /home/JohnLloydBChu/portfolio
   Virtualenv: /home/JohnLloydBChu/.virtualenvs/myenv
   WSGI file: portfolio_page/wsgi.py
   Static URL /static/ -> /home/JohnLloydBChu/portfolio/staticfiles
   Media URL /media/ -> /home/JohnLloydBChu/portfolio/media

5. Click the green Reload button

## Updating the Live Site
cd ~/portfoliocd C:\Users\johnl\PycharmProjects\Chu_portfolio
git init
git add .
git commit -m "first commit"
git branch -M main
git push -u origin main
git pull origin main
python manage.py collectstatic --noinput
Then reload the web app.

## License
This project is for personal/portfolio use only.