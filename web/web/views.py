from django.shortcuts import HttpResponse, render_to_response
import urllib3
import json


def index(name, age):
    return HttpResponse("Hello " + name + age)


def home(request):
    http = urllib3.PoolManager()
    html = http.request('GET',
    'http://www.adamretter.org.uk/spaceapps/space.xql?lat=50.375589&lng=-4.141631&format=json&nextClear=true')
    jsondata = json.loads(html.data)
    return render_to_response('index.htm', {'location': jsondata['location'],
        'event': jsondata['event'],
        'metOffice': jsondata['event']['weather']['metOffice'],
        'weather': jsondata['event']['weather'],
        'start': jsondata['event']['start'],
        'end': jsondata['event']['end']})


def home_data(request, match):
    vals = match.split('/')
    http = urllib3.PoolManager()
    URL = 'http://www.adamretter.org.uk/spaceapps/space.xql?lat='
    URL += vals[0]
    URL += '&lng='
    URL += vals[1]
    URL += '&format=json&nextClear=true'

    html = http.request('GET', URL)
    jsondata = json.loads(html.data)
    return render_to_response('index.htm', {'location': jsondata['location'],
        'weather': jsondata['event']['weather'],
        'metOffice': jsondata['event']['metOffice'],
        'start': jsondata['event']['start'],
        'end': jsondata['event']['end']})
