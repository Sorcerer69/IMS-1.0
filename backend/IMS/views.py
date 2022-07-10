
from urllib import request
from django.shortcuts import render, redirect
from django.contrib.auth. models import User, auth
from django.contrib import messages
from django.views import View

import IMS

# Create your views here.


def login(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']

        user = auth.authenticate(username=username, password=password)

        if user is not None:
            auth.login(request, user)
            print("user logged in")
            return redirect('dashboard')
        else:
            print("user does not exists")
            return redirect('/')
    else:
        return render(request, 'login.html')


def dashboard(request):
    return render(request, 'index.html', {'title': 'Dashboard - IMS'})


def products(request):
    return render(request, '../products.html', {'title': 'Products - IMS'})


def logout(request):
    auth.logout(request)
    return redirect('/')
