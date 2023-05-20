var firebaseConfig = {
    apiKey: "AIzaSyAOrS049aue6HZr4VGi4G_N_Pd8Oc0H608",
    authDomain: "kwitter-366b7.firebaseapp.com",
    projectId: "kwitter-366b7",
    storageBucket: "kwitter-366b7.appspot.com",
    messagingSenderId: "554468036819",
    appId: "1:554468036819:web:8a16cad31fb885d1b10426"
  };
//Enlaces de Firebase

var user_name = localStorage.getItem("user_name");
var room_name = localStorage.getItem("room_name");

function send()
{
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });
}