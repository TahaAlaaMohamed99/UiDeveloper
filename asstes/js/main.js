/*scroll top*/ 
var btn = $('#scrollTop');
$(Window).scroll(function(){
    if ($(window).scrollTop() > 100){
        btn.addClass('show')
}else{
    btn.removeClass('show')
}
});
btn.on('click' , function(e){
    e.preventDefault();
    $('html,body').animate({scrollTop:0},'200');
});
const optionMenu = document.querySelector(".select-menu"),
       selectBtn = optionMenu.querySelector(".select-btn"),
       options = optionMenu.querySelectorAll(".option"),
       sBtn_text = optionMenu.querySelector(".sBtn-text");

selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));       

options.forEach(option =>{
    option.addEventListener("click", ()=>{
        let selectedOption = option.querySelector(".option-text").innerText;
        sBtn_text.innerText = selectedOption;

        optionMenu.classList.remove("active");
    })
})
/*responsev main*/ 
const navBar = document.querySelector("main"),
menuBtns = document.querySelectorAll(".menu-toggle");
menuBtns.forEach((menuBtn) => {
menuBtn.addEventListener("click", () => {
  navBar.classList.toggle("open");
});
});
overlay.addEventListener("click", () => {
navBar.classList.remove("open");
});

