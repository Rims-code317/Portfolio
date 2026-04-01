from django.shortcuts import render, redirect
from .models import Info, Skill, Project, Education, Contact


def home(request):
    info = Info.objects.first()
    skills = Skill.objects.all()
    projects = Project.objects.all()
    education = Education.objects.all()
    contact = Contact.objects.first()

    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        message = request.POST.get('message')
        Contact.objects.create(name=name, email=email, message=message)
        return redirect('home')

    return render(request, 'index.html', {
        'info': info,
        'skills': skills,
        'projects': projects,
        'education': education,
        'contact': contact,
    })