from django.db import models

class Info(models.Model):
    name = models.CharField(max_length=100)
    title = models.CharField(max_length=100)
    bio = models.TextField()
    profile_image = models.ImageField(upload_to='profile/', blank=True)

class Skill(models.Model):
    name = models.CharField(max_length=100)
    percentage = models.IntegerField()

class Project(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    tools = models.TextField()

class Education(models.Model):
    degree = models.CharField(max_length=100)
    school = models.CharField(max_length=100)
    year = models.CharField(max_length=50)

class Contact(models.Model):
    name = models.CharField(max_length=100, blank=True)
    email = models.EmailField()
    github = models.URLField(blank=True)
    facebook = models.URLField(blank=True)
    message = models.TextField(blank=True)

