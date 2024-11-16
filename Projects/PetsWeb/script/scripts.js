function menuBurguer() {
    const menu = document.getElementById("menu-burguer");
    menu.classList.toggle("show");
    console.log("PEPE");
}
function desplegable() {
    if (document.getElementById("menu-desplegable").style.left == "0px") {

        document.getElementById("menu-desplegable").style.left = "-260px";
    } else {
        document.getElementById("menu-desplegable").style.left = "0px";
    }

};


function cambiarSkinColor(color) {
    var r = document.querySelector(':root');
    switch (color) {
        case 'azul':
            r.style.setProperty('--color-primario', '#3497db');
            r.style.setProperty('--color-secundario', '#0E4F7C');
            break;
        case 'rojo':

            r.style.setProperty('--color-primario', '#E26659');
            r.style.setProperty('--color-secundario', '#AA180F');
            break;
        case 'verde':

            r.style.setProperty('--color-primario', '#567E32');
            r.style.setProperty('--color-secundario', '#31B767');
            break;
        case 'marron':

            r.style.setProperty('--color-primario', '#8e6341');
            r.style.setProperty('--color-secundario', '#DEB35D');
            break;
        case 'original':

            r.style.setProperty('--color-primario', '#d35400');
            r.style.setProperty('--color-secundario', '#f29c12');
            break;


        default:

            break;
    }
};

function panelSelection(panel) {

    switch (panel) {
        case 1:
            document.getElementById("panel1").classList.remove("inactive");
            document.getElementById("panel1").classList.add("active");
            document.getElementById("arrow1").classList.add("panel-selected");
            document.getElementById("panel-selector1").classList.add("panel-selected");
            document.getElementById("panel2").classList.remove("active");
            document.getElementById("panel2").classList.add("inactive");
            document.getElementById("panel-selector2").classList.remove("panel-selected");
            document.getElementById("arrow2").classList.remove("panel-selected");
            document.getElementById("panel3").classList.remove("active");
            document.getElementById("panel3").classList.add("inactive");
            document.getElementById("panel-selector3").classList.remove("panel-selected");
            document.getElementById("arrow3").classList.remove("panel-selected");


            break;

        case 2:
            document.getElementById("panel1").classList.remove("active");
            document.getElementById("panel1").classList.add("inactive");
            document.getElementById("panel-selector1").classList.remove("panel-selected");
            document.getElementById("arrow1").classList.remove("panel-selected");

            document.getElementById("panel2").classList.remove("inactive");
            document.getElementById("panel2").classList.add("active");
            document.getElementById("panel-selector2").classList.add("panel-selected");
            document.getElementById("arrow2").classList.add("panel-selected");

            document.getElementById("panel3").classList.remove("active");
            document.getElementById("panel3").classList.add("inactive");
            document.getElementById("panel-selector3").classList.remove("panel-selected");
            document.getElementById("arrow3").classList.remove("panel-selected");

            break;
        case 3:
            document.getElementById("panel1").classList.remove("active");
            document.getElementById("panel1").classList.add("inactive");
            document.getElementById("panel-selector1").classList.remove("panel-selected");
            document.getElementById("arrow1").classList.remove("panel-selected");

            document.getElementById("panel2").classList.remove("active");
            document.getElementById("panel2").classList.add("inactive");
            document.getElementById("panel-selector2").classList.remove("panel-selected");
            document.getElementById("arrow2").classList.remove("panel-selected");

            document.getElementById("panel3").classList.remove("inactive");
            document.getElementById("panel3").classList.add("active");
            document.getElementById("panel-selector3").classList.add("panel-selected");
            document.getElementById("arrow3").classList.add("panel-selected");

            break;
        default:
            break;
    }
}
function FAQSelection(FAQ) {
    const faq1 = document.getElementById("FAQ1");
    const faq2 = document.getElementById("FAQ2");
    const faq3 = document.getElementById("FAQ3");
    const faq4 = document.getElementById("FAQ4");
    const faq5 = document.getElementById("FAQ5");
    switch (FAQ) {
        case 1:


            if (faq1.classList.contains("p-inactive")) {
                faq1.classList.replace("p-inactive", "p-active");
                faq2.classList.replace("p-active", "p-inactive");
                faq3.classList.replace("p-active", "p-inactive");
                faq4.classList.replace("p-active", "p-inactive");
                faq5.classList.replace("p-active", "p-inactive");

            }else if (faq1.classList.contains("p-active")) {
                faq1.classList.replace("p-active", "p-inactive");

            }

            break;

        case 2:
            if (faq2.classList.contains("p-inactive")) {
                faq2.classList.replace("p-inactive", "p-active");
                faq1.classList.replace("p-active", "p-inactive");
                faq3.classList.replace("p-active", "p-inactive");
                faq4.classList.replace("p-active", "p-inactive");
                faq5.classList.replace("p-active", "p-inactive");

            }else if (faq2.classList.contains("p-active")) {
                faq2.classList.replace("p-active", "p-inactive");

            }
            break;
        case 3:
            if (faq3.classList.contains("p-inactive")) {
                faq3.classList.replace("p-inactive", "p-active");
                faq2.classList.replace("p-active", "p-inactive");
                faq1.classList.replace("p-active", "p-inactive");
                faq4.classList.replace("p-active", "p-inactive");
                faq5.classList.replace("p-active", "p-inactive");

            }else if (faq3.classList.contains("p-active")) {
                faq3.classList.replace("p-active", "p-inactive");

            }

            break;
        case 4:
            if (faq4.classList.contains("p-inactive")) {
                faq4.classList.replace("p-inactive", "p-active");
                faq2.classList.replace("p-active", "p-inactive");
                faq3.classList.replace("p-active", "p-inactive");
                faq1.classList.replace("p-active", "p-inactive");
                faq5.classList.replace("p-active", "p-inactive");

            }else if (faq4.classList.contains("p-active")) {
                faq4.classList.replace("p-active", "p-inactive");

            }
            break;
        case 5:

        if (faq5.classList.contains("p-inactive")) {
            faq5.classList.replace("p-inactive", "p-active");
            faq2.classList.replace("p-active", "p-inactive");
            faq3.classList.replace("p-active", "p-inactive");
            faq4.classList.replace("p-active", "p-inactive");
            faq1.classList.replace("p-active", "p-inactive");

        }else if (faq5.classList.contains("p-active")) {
            faq5.classList.replace("p-active", "p-inactive");

        }

            break;
        default:
            break;
    }
}




const slides = document.querySelector('.slides');

const caja_bullets = document.querySelectorAll('.bullet');

const captions = document.querySelectorAll('.caption');

let indiceActual = 0;



function mostrarSlide(index) {
    slides.style.transform = `translateX(-${index * 100}%)`;
    caja_bullets.forEach(bullet => bullet.classList.remove('active'));
    caja_bullets[index].classList.add('active');
    captions.forEach(caption => caption.classList.remove('caption-active'));
    captions[index].classList.add("caption-active");
}


caja_bullets.forEach(bullet => {
    bullet.addEventListener('click', () => {
        indiceActual = bullet.getAttribute('posicion_slide');
        mostrarSlide(indiceActual);
    });
});



function nextSlide() {
    indiceActual = (indiceActual + 1) % caja_bullets.length;
    mostrarSlide(indiceActual);
}
setInterval(nextSlide, 5000);




const slidesOffer = document.querySelector('.slides-offer');

const slidesOffer1 = document.querySelectorAll('.slide-offer');

const caja_bullets_offers = document.querySelectorAll('.bulletOffer');

let indiceActualOffers = 0;


function mostrarSlideOffers(index) {
    slidesOffer.style.transform = `translateX(-${index * 100}%)`;

    slidesOffer1.forEach(slide => slide.classList.add('slide-inactive'));
    slidesOffer1[index].classList.remove('slide-inactive');
    
    caja_bullets_offers.forEach(bulletOffer => bulletOffer.classList.remove('active-offer'));
    caja_bullets_offers[index].classList.add('active-offer');
}


caja_bullets_offers.forEach(bulletOffer => {
    bulletOffer.addEventListener('click', () => {
        indiceActualOffers = bulletOffer.getAttribute('posicion_slide_offer');
        mostrarSlideOffers(indiceActualOffers);
    });
});



function nextSlideOffer() {
    indiceActualOffers = (indiceActualOffers + 1) % caja_bullets_offers.length;
    mostrarSlideOffers(indiceActualOffers);
}
setInterval(nextSlideOffer, 5000);



const slidesAdoption = document.querySelector('.adoption-slides');

const slidesAdoption1 = document.querySelectorAll('adoption-slide');

let indexAdoption = 0;

let size = 33;


function nextSlideAdoption() {
    if (indexAdoption < 3)  {
        indexAdoption++
        slidesAdoption.style.transform = `translateX(-${indexAdoption*size}%)`;
        document.getElementById("card".concat(indexAdoption)).style.opacity=0;
        document.getElementById("card".concat((indexAdoption)+3)).style.opacity=1;
        console.log(indexAdoption);

    }
}

function prevSlideAdoption() {
    if (indexAdoption > 0) {
        document.getElementById("card".concat(indexAdoption)).style.opacity=1;
        document.getElementById("card".concat(indexAdoption+3)).style.opacity=0;
        indexAdoption--
        console.log(indexAdoption);
        slidesAdoption.style.transform =`translateX(-${indexAdoption*size}%)`;
    }
    
}
