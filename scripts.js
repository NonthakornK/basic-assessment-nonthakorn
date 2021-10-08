let cartBtn = document.getElementById("cartBtn");
let cartModal = document.getElementById("cartModal");
let closeModal = document.getElementById("closeModal");
let nextCarousel = document.getElementById("carousel-next");
let prevCarousel = document.getElementById("carousel-prev");
let slides = document.getElementsByClassName("carousel-slides");
let currentslide = 0;
let modalNameList = [];
let list = document.getElementById("cartList")

cartBtn.addEventListener("click", function(){
    cartModal.style.display = "block";
});

closeModal.addEventListener("click", function(){
    cartModal.style.display = "none";
});

nextCarousel.addEventListener("click", function(){
    currentslide === 2 ? currentslide = 0 : currentslide += 1;
    changeSlide(currentslide);
});

prevCarousel.addEventListener("click", function(){
    currentslide === 0 ? currentslide = 2 : currentslide -= 1;
    changeSlide(currentslide);
});

function changeSlide(current) {
    Array.from(slides).forEach(slide => {
        slide.style.display = "none";
    });
    slides[current].style.display = "block";
}

document.body.addEventListener('click',yourHandler,false);

function yourHandler(e){
    e = e || window.event;
    var target = e.target || e.srcElement;
    if (target.className.match(/card-btn/))
    {
        let itemname = target.parentNode.parentNode.querySelector("span").innerHTML;
        modalNameList.push(itemname);
        let li = document.createElement("li");
        li.innerText = itemname;
        list.appendChild(li);
    }
}