(function(){
    
    console.log("carrousel");
    /**
     * init de variable
     */
    let index = 0;
    let dernierIndex = -1;


/**
* les elements du carrousel
*/
    let _elCarrousel = document.querySelector(".carrousel");
    let _elBtn_modal = document.querySelector(".btn_modal");
    let _elBtn_close = document.querySelector(".btn_close");
    let _elCarrousel__figure = document.querySelector(".carrousel__figure");
    let _elCarrousel__form = document.querySelector(".carrousel__form");
    let _elGalerie = document.querySelector(".galerie");
    let _elGalerieImg = document.querySelectorAll(".galerie figure img");




/**
* boucle pour parcourir les images de la galerie
*/

for(const elmImg of _elGalerieImg) {
    console.log(elmImg.getAttribute('src'));
    ajouter_img_carrousel(elmImg)
    ajouter_radio_carrousel()
}

function ajouter_img_carrousel(elmImg){
    //elmImg represent une image de la galerie
    let _elCarrousel__figure__img = document.createElement("img");
    _elCarrousel__figure__img.setAttribute('src', elmImg.getAttribute("src"));
    _elCarrousel__figure__img.classList.add('carrousel__figure__img');
    _elCarrousel__figure.appendChild(_elCarrousel__figure__img)
    _elCarrousel__figure__img.dataset.index = index;
    //index++;
}

function ajouter_radio_carrousel(){
    let _elCarrousel__form__radio = document.createElement('input');
    _elCarrousel__form__radio.setAttribute('name', 'carrousel__form__radio');
    _elCarrousel__form__radio.setAttribute('class', 'carrousel__form__radio');
    _elCarrousel__form__radio.setAttribute('type', 'radio');
    _elCarrousel__form__radio.dataset.index = index;
    index++;
    _elCarrousel__form.appendChild(_elCarrousel__form__radio);

    _elCarrousel__form__radio.addEventListener('click', function(){
        console.log(this.dataset.index);
        _elCarrousel__figure.children[this.dataset.index].classList.add("carrousel__figure__img--activer");
        //_elCarrousel__figure.children[this.dataset.index].classList.add('.carrousel__figure__img--activer');
        console.log(_elCarrousel__figure);
    })
}

/**
 * code pour ouvrir et fermer le modal
 */
_elBtn_modal.addEventListener('click', function(){
    _elCarrousel.classList.add("carrousel--ouvrir");

})

_elBtn_close.addEventListener('click', function(){
    _elCarrousel.classList.remove("carrousel--ouvrir");

});




})();