from __future__ import unicode_literals

from django.db import models

# Create your models here.

class Catalogo(models.Model):
	nombre = models.CharField(max_length=32)
	valor = models.CharField(max_length=10)
	