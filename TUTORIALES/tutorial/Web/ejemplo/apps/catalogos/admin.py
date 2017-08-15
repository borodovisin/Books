from django.contrib import admin

from . import models as cat_models

# Register your models here.

class CatalogoAdmin(admin.ModelAdmin):
    list_display = ('id', 'nombre', 'valor')

admin.site.register(cat_models.Catalogo, CatalogoAdmin)
