from rest_framework import serializers
from .models import Customer, Location

class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        # fields = ['id', 'name', 'email']
        fields = '__all__'

class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Location
        # fields = ['id', 'customer', 'location']
        fields = '__all__'