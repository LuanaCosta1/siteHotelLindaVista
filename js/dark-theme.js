var icon = document.getElementById("darkIcon")

icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains('dark-theme')){
        icon.className = "fas fa-sun";
    }
    else{
        icon.className = "fas fa-moon";
    }
}
