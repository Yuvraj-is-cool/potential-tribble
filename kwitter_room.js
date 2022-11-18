const firebaseConfig = {
      apiKey: "AIzaSyD_D3mNvKWF_p-Yp1FfTBJ21vvG-QCA5Vk",
      authDomain: "kwitter-bc337.firebaseapp.com",
      databaseURL: "https://kwitter-bc337-default-rtdb.firebaseio.com",
      projectId: "kwitter-bc337",
      storageBucket: "kwitter-bc337.appspot.com",
      messagingSenderId: "780209859701",
      appId: "1:780209859701:web:db20fcbcb292bdd6bcdc3c"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome "+ user_name+"!" ;
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log(Room_names);
row="<div class='room_name' id="+Room_names+"onclick='redirectroomname(this.id)'>"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;

      //End code
      });});}
getData();
function addroom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}
function redirectroomname(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
      
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
      
}