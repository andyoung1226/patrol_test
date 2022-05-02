# patrol monitering system

## 1. Pakage Download
```
git clone https://github.com/andyoung1226/patrol_test
```

## 2. Django Install
```
pip -m python3 install django
```

## 3. rosbridge address setup
```
roscd rosbridge_server/launch
"your editor" rosbrdige_websocket.launch
port = "9090"
address = "192.168.38.100"
```

## 4. Django server run
```
cd ~/your pkg download route/patrol_test
python3 manage.py runserver 192.168.38.100:9000

And GO to '192.168.38.100:9000'
Welcome to the Patrol Monitering System
```
