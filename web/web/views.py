from django.shortcuts import HttpResponse, render_to_response
import urllib3
import json
import time


def index(name, age):
    return HttpResponse("Hello " + name + age)


def home(request):
    http = urllib3.PoolManager()
    html = http.request('GET',
    'http://api.uhaapi.com/passes?satid=25544&lat=27.950575&lng=-82.45717760000002')
    jsondata = json.loads(html.data)
    for a_result in jsondata['results']:
        a_result['start']['time'] = time.ctime(a_result['start']['time'])
        a_result['end']['time'] = time.ctime(a_result['end']['time'])
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
    for a_result in jsondata['results']:
        a_result['start']['time'] = time.ctime(a_result['start']['time'])
        a_result['end']['time'] = time.ctime(a_result['end']['time'])

    return render_to_response('index.htm', {'data': jsondata})
