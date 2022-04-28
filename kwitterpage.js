var firebaseConfig = {
    apiKey: "AIzaSyCHRQGSzfvkYUtdaMBC5e2QF1L-RGqI4xA",
    authDomain: "kwitter-b5efd.firebaseapp.com",
    databaseURL: "https://kwitter-b5efd-default-rtdb.firebaseio.com",
    projectId: "kwitter-b5efd",
    storageBucket: "kwitter-b5efd.appspot.com",
    messagingSenderId: "753713252820",
    appId: "1:753713252820:web:fea668b5fafa8a40202e41"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 var username=localStorage.getItem("username");
 var roomname=localStorage.getItem("roomname");
document.getElementById("username").innerHTML="Welcome "+username;
function logout(){
    localStorage.removeItem("username");
    localStorage.removeItem("roomname");
    window.location="index.html";
}
 function send(){
     msg=document.getElementById("msg").value;
     firebase.database().ref(roomname).push({
         name:username,
         message:msg,
         like:0
     });
     document.getElementById("msg").value="";
 }
 function getData(){
firebase.database().ref("/"+roomname).on("value",function(snapshot){document.getElementById("output").innerHTML="";
snapshot.forEach(function(childSnapshot){
    childKey=childSnapshot.key;
    childData=childSnapshot.val();
    if(childKey!="purpose"){
        firebase_msg_id=childKey;
        msgdata=childData;
    name1=msgdata["name"];
    msg1=msgdata["message"];
    like1=msgdata["like"];

    chatname="<h3>"+name1+"<img src='tick.png' width=30px></h3>";
    chatmsg="<h3 class='msg'>"+msg1+"</h3>";
    chatlike="<button class='btn btn-warning' id="+firebase_msg_id+" value="+like1+" onclick='uplike(this.id)'>";
    like_tag='<span class="glyphicon glyphicon-thumbs-up">Like: '+like1+'</span></button><hr>';

    row=chatname+chatmsg+chatlike+like_tag;
    document.getElementById("output").innerHTML+=row;
    }
    
});
});
 }
getData();

function uplike (msgid){

likes=document.getElementById(msgid).value;
updatedlikes=Number(likes)+1

firebase.database().ref(roomname).child(msgid).update({
    like:updatedlikes
});
}
