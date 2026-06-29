from django.contrib import admin
from .models import CarMake, CarModel


# Mostrar los modelos dentro de cada fabricante
class CarModelInline(admin.TabularInline):
    model = CarModel
    extra = 1


# Administración de CarModel
@admin.register(CarModel)
class CarModelAdmin(admin.ModelAdmin):
    list_display = ("name", "car_make", "type", "year", "created_at")
    list_filter = ("car_make", "type", "year")
    search_fields = ("name", "car_make__name")
    ordering = ("car_make", "year")


# Administración de CarMake
@admin.register(CarMake)
class CarMakeAdmin(admin.ModelAdmin):
    list_display = ("name", "description", "created_at")
    search_fields = ("name",)
    ordering = ("name",)
    inlines = [CarModelInline]
