from django.shortcuts import HttpResponse, render_to_response
import urllib3
import json
import datetime


def index(name, age):
    return HttpResponse("Hello " + name + age)


def home(request):
    http = urllib3.PoolManager()
    html = http.request('GET',
    'http://api.uhaapi.com/passes?satid=25544&lat=27.950575&lng=-82.45717760000002')
    jsondata = json.loads(html.data)
    for result in jsondata['results']:
        print result['start']['time']
    return render_to_response('index.htm', {'data': jsondata})


def home_data(request, match):
    vals = match.split('/')
    http = urllib3.PoolManager()
    URL = 'http://api.uhaapi.com/passes?satid='
    URL += vals[0]
    URL += '&lat='
    URL += vals[1]
    URL += '&lng='
    URL += vals[2]

    html = http.request('GET', URL)
    jsondata = json.loads(html.data)
    return render_to_response('index.htm', {'data': jsondata})
