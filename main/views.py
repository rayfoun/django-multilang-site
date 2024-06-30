from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from django.utils.translation import gettext as _
from django.utils.translation import get_language
from .models import Article

# Create your views here.

def articles(request):
    #current_language = get_language()
    myarticles = Article.objects.all().values()
    template = loader.get_template('all_articles.html')
    context = {
        'myarticles': myarticles,
        #'current_language': current_language,
    }
    return HttpResponse(template.render(context, request))
