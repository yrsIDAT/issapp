from django.shortcuts import HttpResponse, render_to_response


def index(name, age):
    return HttpResponse("Hello " + name + age)


def home(request):
    return render_to_response('index.htm')
