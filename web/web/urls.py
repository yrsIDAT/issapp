from django.conf.urls import patterns, url

# Uncomment the next two lines to enable the admin:
# from django.contrib import admin
# admin.autodiscover()
urlpatterns = patterns('',
    #  Home url
    url(r'^$', 'web.views.home',),
    url(r'^(?P<sat_id>\d+)/(?P<lat_id>\d+)/(?P<long_id>\d+)/$', 'web.views.home_data')
)
