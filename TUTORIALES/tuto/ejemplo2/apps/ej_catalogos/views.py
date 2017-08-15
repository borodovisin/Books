from django.shortcuts import render_to_response

import models
# Create your views here.

def inicio(request):
	return render_to_response('home.html', {})

def ver_catalogos(request):
	catalogos = models.Catalogo.objects.all()
	return render_to_response('catalogos.html', {'catalogos': catalogos})