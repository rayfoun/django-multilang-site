from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from .models import Article

# Create your views here.

def articles(request):
    myarticles = Article.objects.all().values()
    template = loader.get_template('all_articles.html')
    context = {
        'myarticles': myarticles,
    }
    return HttpResponse(template.render(context, request))
