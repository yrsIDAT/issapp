from django.shortcuts import HttpResponse, render_to_response
import urllib3
import json


def index(name, age):
    return HttpResponse("Hello " + name + age)


def home(request):
    http = urllib3.PoolManager()
    html = http.request('GET',
    'http://api.uhaapi.com/passes?satid=25544&lat=27.950575&lng=-82.45717760000002')
    jsondata = json.loads(html.data)
    return render_to_response('index.htm', {'data': jsondata})
