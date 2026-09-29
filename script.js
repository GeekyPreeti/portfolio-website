function copyEmail(){
     navigator.clipboard.writeText("preetijaiswal06@gmail.com");
     alert("Email copied to clipboard!");
    //alert("Button clicked!");
}

function toggleDarkMode(){
    document.body.classList.toggle("dark-mode");
    var btn = document.getElementById("modeBtn");
    if(document.body.classList.contains("dark-mode")){
           btn.innerHTML = "☀️ Light";
    }
    else{
        btn.innerHTML = "🌙 Dark";
    }
}

window.onscroll = function(){
    var btn = document.getElementById("scrollTopBtn");
    if(document.body.scrollTop > 300 || document.documentElement.scrollTop > 300){
        btn.style.display = "block";
    }else{
        btn.style.display = " none";
    }
};
function scrollToTop(){
     window.scrollTo({top: 0, behavior: "smooth"});
}