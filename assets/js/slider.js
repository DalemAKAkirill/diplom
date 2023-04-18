let sliderLine = document.getElementById('sliderLine')
let slide = document.getElementById('slide');
let count = 0;

console.log(sliderLine.offsetWidth);

function slideShow(){
    if(count == slide.offsetWidth*4){
        count = 0;
    }
    sliderLine.style.right = count + "px";
    count += slide.offsetWidth;
    setTimeout(slideShow, 3000);
}

slideShow();