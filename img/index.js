//navbar scroll
window.addEventListener("scroll", function(){
    let navbar = document.querySelector(".navbar");
    if(this.window.scrollY > 20){
        navbar.classList.add("scrolled");
    }else{
        navbar.classList.remove("scrolled");

    }
}
)