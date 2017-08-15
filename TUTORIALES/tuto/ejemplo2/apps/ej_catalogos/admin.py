from django.contrib import admin

import models

# Register your models here.

class CatalogosAdmin(admin.ModelAdmin):
	list_display = ('id', 'nombre', 'valor')

admin.site.register(models.Catalogo, CatalogosAdmin)