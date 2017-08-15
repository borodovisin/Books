from django.conf.urls import include,url
import views

urlpatterns = [
    url(r'^ver/', views.ver_catalogos),
	url(r'^inicio/', views.inicio),
]