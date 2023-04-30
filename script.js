let click = document.getElementById('click')
let box = document.getElementById('menu_bar')
let cross = document.getElementById('cross')
let dropdown_1 = document.getElementById('dropdown_1')
let dropdown_1_1 = document.getElementById('dropdown_1_1')
let dropdown_2 = document.getElementById('dropdown_2')
let dropdown_1_2 = document.getElementById('dropdown_1_2')
let dropdown_3 = document.getElementById('dropdown_3')
let dropdown_1_3 = document.getElementById('dropdown_1_3')
let desc = document.getElementById('desc')
let descr = document.getElementById('descr')
let desc_1 = document.getElementById('desc_1')
let desc_2 = document.getElementById('desc_2')
let desc_3= document.getElementById('desc_3')
let desc_4 = document.getElementById('desc_4')
let desc_5 = document.getElementById('desc_5')
let desc_6 = document.getElementById('desc_6')
let display_img_2 = document.getElementById('display_img_2')
let display_img_2_2 = document.getElementById('display_img_2_2')
let search_click = document.getElementById('search_click')
let searchbar_click = document.getElementById('searchbar_click')

  click.onclick = function () {
    box.style.display = 'block'
}
cross.onclick = function () {
    box.style.display = 'none'
}

var index = 0;
    var slides = document.querySelectorAll(".slides");
    var dot = document.querySelectorAll(".dot");

    function changeSlide() {

        if (index < 0) {
            index = slides.length - 1;
        }

        if (index > slides.length - 1) {
            index = 0;
        }

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
            dot[i].classList.remove("active");
        }

        slides[index].style.display = "block";
        dot[index].classList.add("active");

        index++;

        setTimeout(changeSlide, 3000);

    }

    changeSlide();
  

desc_1.onmouseover = function () {
    desc.style.display = 'block'
}
desc_1.onmouseout = function () {
    desc.style.display = 'none'
}
desc_2.onmouseover = function () {
    descr.style.display = 'block'
}
desc_2.onmouseout = function () {
    descr.style.display = 'none'
}
desc_3.onmouseout = function () {
    desc.style.display = 'none'
}
desc_3.onmouseover = function () {
    desc.style.display = 'block'
}
desc_4.onmouseout = function () {
    descr.style.display = 'none'
}
desc_4.onmouseover = function () {
    descr.style.display = 'block'
}


dropdown_1.onclick = function () {
    if (dropdown_1_1.style.display == 'none') {
        dropdown_1_1.style.display = 'block'
    }
    else {
        dropdown_1_1.style.display = 'none'
    }
}
dropdown_2.onclick = function () {
    if (dropdown_1_2.style.display == 'none') {
        dropdown_1_2.style.display = 'block'
    }
    else {
        dropdown_1_2.style.display = 'none'
    }
}
dropdown_3.onclick = function () {
    if (dropdown_1_3.style.display == 'none') {
        dropdown_1_3.style.display = 'block'
    }
    else {
        dropdown_1_3.style.display = 'none'
    }
}