//for-header
let h1=document.querySelector("header h1");
let h2=document.querySelector("header h2");
let forFlipkartItems=document.querySelector(".flipkart");
let forGrocery=document.querySelector(".grocery");

h1.addEventListener("click",() => {
    forFlipkartItems.style.display="block";
    forGrocery.style.display="none";
    h1.style.color="white";
    h1.style.backgroundColor="rgb(69, 69, 209)";
    h2.style.color="black";
    h2.style.backgroundColor="#e5e5e5";
});
h2.addEventListener("click",() => {
    forFlipkartItems.style.display="none";
    forGrocery.style.display="block";
    h2.style.color="white";
    h2.style.backgroundColor="green";
    h1.style.color="black";
    h1.style.backgroundColor="#e5e5e5";

});


//for-slider
let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}
let refreshInterval = setInterval(()=> {next.click()}, 3000);
function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px';
    // 
    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 3000);
    
}

dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active = key;
         reloadSlider();
    })
})
window.onresize = function(event) {
    reloadSlider();
};