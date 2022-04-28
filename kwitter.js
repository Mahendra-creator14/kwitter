function login()
{
    playername=document.getElementById("userinput").value;
    localStorage.setItem("username",playername);
    window.location="kwitter_room.html";
}