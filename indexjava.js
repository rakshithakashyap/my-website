













const filter=document.querySelector('#filter-btn').children;
const items=document.querySelector(".proto-gallery").children

for(let i=0; i<filter.length; i++){
    filter[i].addEventListener("click", function(){
        for(let j=0; j<filter.length; j++){
            filter[j].classList.remove("active")
        }
        this.classList.add("active");
        const target = this.getAttribute('data-target')
       
        for(let k=0; k<items.length; k++){
            items[k].style.display="none";
            
            if(target==items[k].getAttribute("data-id"))
            {
                items[k].style.display="block";
            }
        if(target=="all"){
            items[k].style.display="block";
        }
    }
    })
}
/*
clearInterval(timer)
timer= setInterval(autoPlay,5000);
autoSlide=element.id;
currentSlide=element.id;
changeSlide(currentSlide)
function changeSlide(currentSlide){
    controlButtons = document.querySelector(".slide-controls")
}

for(let i=0; i<controlButtons.length;i++){
    controlButtons[i].classList.remove("active")
}
controlButtons[currentSlide].classList.add("active")
sliderContainer.style.marginLeft=-(containerWidth*currentSlide) + "px";
}
function autoPlay(){
    if(autoSlide==slideDots-1)
    {autoSlide=0;}
    else{
        autoSlide++;
    }
    changeSlide(autoSlide)
}*/




//let timer = setInterval(autoPlay,5000);
//window.onload = load()


//lightroooooooooooookm

const closeLightbox=document.querySelector(".close-lightbox");
const lightbox=document.querySelector(".lightbox");
const lightboximage =lightbox.querySelector("img");

lightbox.addEventListener("click",function(){
    if(event.target!=lightboximage){
        lightbox.classList.remove("show");
        lightbox.classList.add("hide");
    }
})

closeLightbox.addEventListener("click",function(){
    lightbox.classList.remove("show");
    lightbox.classList.add("hide");
    
})

const gallery=document.querySelector(".proto-gallery");
const galleryitem=gallery.querySelectorAll(".item");

galleryitem.forEach(function(element){
    element.querySelector(".fa-plus").addEventListener("click",function(){
        lightbox.classList.remove("hide");
        lightbox.classList.add("show");
        lightboximage.src=element.querySelector("img").getAttribute("src")
    })
})


//header fix
window.onscroll=function(){
    const docScrollTop=document.documentElement.scrollTop;

    if(window.innerWidth>991){
        if(docScrollTop>100){
            document.querySelector("header").classList.add("fixed")
        }
    else{
        document.querySelector("header").classList.remove("fixed")
    }}
}

//active to live bar during scroll
const navbar = document.querySelector(".navbar");
a = navbar.querySelectorAll("a");

a.forEach(function(element){
    element.addEventListener("click",function(){
        for(let i=0;i<a.length; i++){
            a[i].classList.remove("active");
        }
        this.classList.add("active")
        document.querySelector(".navbar").classList.toggle("show");
    })
})

const hamburger = document.querySelector(".ham-burger");
hamburger.addEventListener("click",function(){
    document.querySelector(".navbar").classList.toggle("show");
})
