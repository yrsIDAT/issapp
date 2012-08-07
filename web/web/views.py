from django.shortcuts import HttpResponse


def index(name, age):
    return HttpResponse("Hello " + name + age)


def home(request):
    return index("Owen. ", "(16 Years Old)")
