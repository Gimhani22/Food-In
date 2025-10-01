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
const menuBtn = document.getElementById('menu_btn');
const navItems = document.querySelector('.nav_items');

menuBtn.addEventListener('click', () => {
    navItems.classList.toggle('show');
});
