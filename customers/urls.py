from django.urls import path, include
from rest_framework import routers
from customers import views
from rest_framework.documentation import include_docs_urls

# API
router = routers.DefaultRouter()
router.register(r'customers', views.CustomerView, 'customers')
router.register(r'locations', views.LocationView, 'locations')

urlpatterns = [
    path("", include(router.urls)),
    path('docs/', include_docs_urls(title='Customers API'))
]