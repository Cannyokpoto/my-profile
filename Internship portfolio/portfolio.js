

//SLIDE SHOW

let slideIndex = 0;
showSlides();

function showSlides(){
    let i;
    let pnt = document.getElementsByClassName("pnt");
    let dots = document.getElementsByClassName("dot")
    for (i = 0; i < pnt.length; i++){
        pnt[i].style.display = "none";
    }
    slideIndex++;
    if(slideIndex > pnt.length){
        slideIndex = 1
    }

    pnt[slideIndex-1].style.display = "flex";
    

    for (i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "");
    }

    
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 5000);
}