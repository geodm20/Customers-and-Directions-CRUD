from rest_framework import viewsets
from .models import Customer, Location
from .serializer import CustomerSerializer, LocationSerializer

# Create your views here
class CustomerView(viewsets.ModelViewSet):
    serializer_class = CustomerSerializer
    queryset = Customer.objects.all()

class LocationView(viewsets.ModelViewSet):
    serializer_class = LocationSerializer
    queryset = Location.objects.all()
