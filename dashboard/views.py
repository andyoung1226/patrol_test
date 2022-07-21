from django.shortcuts import render
from django.contrib.auth import authenticate
from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import logout
from django.shortcuts import redirect
from django.contrib.auth.models import User
from django.contrib.auth import login
# Create your views here.

#def dashboard(request):
#    return render(request, 'dashboard/index.html', {})
def dashboard(request):

    if request.method == 'POST':
        id = request.POST.get('userid','')
        pw = request.POST.get('userpw', '')

        result = authenticate(username=id, password=pw)

        if result :
            print("로그인 성공!")
            login(request, result)
            return render(request, 'dashboard/index.html')

        else:
            print("실패")
            return render(request, 'dashboard/login.html')

    return render(request, 'dashboard/login.html')