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
//ADD YOUR FIREBASE LINKS HERE
var username=localStorage.getItem("username");
document.getElementById("username").innerHTML="Welcome "+username;


function addRoom(){
room_name=document.getElementById("addinput").value;
console.log(room_name);
firebase.database().ref("/").child(room_name).update({
      purpose:"Adding New Room Name"
});
localStorage.setItem("roomname",room_name);
document.getElementById("addinput").value="";
window.location="kwitterpage.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room name= "+Room_names);
row="<div class='room_name' id="+Room_names+ " onclick='Redirect_Room(this.id)' >"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function Redirect_Room(name){
localStorage.setItem("room_name",name);
window.location="kwitterpage.html";
}


function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("roomname");
      window.location="index.html";
}