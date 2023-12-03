function addUser(){
    the_name=document.getElementById("user_name").value;
    localStorage.setItem("the_name", the_name);
    window.location="kwitter_room.html";
}