
//ADD YOUR FIREBASE LINKS HERE

// Your web app's Firebase configuration
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyC7KosyqsNrPSMss5Z_yj1KIGmsW7P-Im8",
      authDomain: "kwitter-a63f4.firebaseapp.com",
      databaseURL: "https://kwitter-a63f4-default-rtdb.firebaseio.com",
      projectId: "kwitter-a63f4",
      storageBucket: "kwitter-a63f4.appspot.com",
      messagingSenderId: "83388107675",
      appId: "1:83388107675:web:143bebf852433c6f032f3e"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome  "+user_name+"!";

function AddRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
          purpose:"adding Room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
      
 }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room name - "+Room_names);
 
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",room);
      window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}