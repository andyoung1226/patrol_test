import rospy
from geometry_msgs.msg import PoseWithCovarianceStamped, Pose

def callback(data):
    pose = Pose()
    pose = data.pose.pose
    pub.publish(pose)
def listener():
    rospy.Subscriber("/amcl_pose", PoseWithCovarianceStamped, callback)
if __name__=="__main__":
    rospy.init_node('amcl_to_pose', anonymous=True)
    pub = rospy.Publisher('/robot_pose', Pose, queue_size=100)
    listener()
    rospy.spin()
