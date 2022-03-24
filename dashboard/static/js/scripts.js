var ros = new ROSLIB.Ros();
// rosbridge websocket server와의 연결을 생성합니다.
ros.connect('ws://0.0.0.0:9090');
 
///////////////////ros 상태 관련 구문///////////////////
// ros와의 연결 상태에 따라 상단 액션바의 색깔이 녹색, 회색, 빨간색으로 변동됩니다.
 
// 이상이 생길 경우 다음 구문이 실행됩니다.
ros.on('error', function (error) {
  console.log(error);
});
 
// 정상 연결
ros.on('connection', function () {
  console.log('Connection made!');
  document.getElementById("status").innerHTML = "Connected";
});
 
// 연결 닫힘
ros.on('close', function () {
  console.log('Connection closed.');
});

var test_topic = new ROSLIB.Topic({
  ros : ros,
  name : '/test_topic',
  messageType : 'geometry_msgs/Twist'
});

var cmd_vel = new ROSLIB.Topic({
  ros : ros,
  name : '/cmd_vel',
  messageType : 'geometry_msgs/Twist'
});

  cmd_vel.subscribe(function(message) {
    //console.log('Received message on' + listener.name + ':' + message.data.angular.z);
    console.log(message.angular.z)
    //document.getElementById("msg").innerHTML = JSON.stringify(message);
    cmd_vel.unsubscribe();
   });
var twist = new ROSLIB.Message({
  linear : {
    x : 0.1,
    y : 0.2,
    z : 0.3
  },
  angular : {
    x : -0.1,
    y : -0.2,
    z : -0.3
  }
});

function init() {
  var ros = new ROSLIB.Ros({
         url : 'ws://localhost:9090'
     });

   // Create the main viewer.
    var viewer = new ROS2D.Viewer({
     divID : 'map',
      width : 640,
     height : 480
    });
    
    // Setup the map client.  
    var gridClient = new ROS2D.OccupancyGridClient({
      ros : ros,
      rootObject : viewer.scene
      });
   // Scale the canvas to fit to the map
     gridClient.on('change', function(){
      console.log(gridClient.currentGrid.width, gridClient.currentGrid.height)
      viewer.scaleToDimensions(gridClient.currentGrid.width/2, gridClient.currentGrid.height/2);
      viewer.shift(-5, -5);
      //viewer.shift(gridClient.currentImage.pose.position.x, gridClient.currentImage.pose.position.y);
     });
   } 