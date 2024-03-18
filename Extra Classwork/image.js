const images = document.querySelectorAll("img");
let i = 0;
setInterval(function (){
    if (i == 0) {
        images[i].style.display = "block";
    }
    else if (i == 1 || i == 2) {
        images[i-1].style.display = 'none';
        images [1].style.display = 'block';
    }
    else {
        images[i-1].style.display = 'none';
        images [
            0].style.display = 'block';
        i = 0;
    }
    i++;

}, 2000);