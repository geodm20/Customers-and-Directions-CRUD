from django.db import models

# Create your models here.
class Customer(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()
    def __str__(self):
        return self.name
    
class Location(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    location = models.CharField(max_length=255)
    def __str__(self):
        return self.location