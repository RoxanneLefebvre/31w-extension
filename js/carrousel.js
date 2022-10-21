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
    let btn_fleche_gauche = document.querySelector(".btn_fleche--gauche");
    let btn_fleche_droite = document.querySelector(".btn_fleche--droite");




/**
* boucle pour parcourir les images de la galerie
*/

for(const elmImg of _elGalerieImg) {
    console.log(elmImg.getAttribute('src'));
    
    ajouter_img_carrousel(elmImg)
    ajouter_radio_carrousel();
    ajouter_fleche_carrousel();
    /** ecouteur sur les images de la galerie */
    elmImg.addEventListener('mousedown', function(){

        _elCarrousel__figure.children[this.dataset.index].classList.add("carrousel__figure__img--activer");
        _elCarrousel.classList.add("carrousel--ouvrir");

        _elCarrousel__form.children[this.dataset.index].checked = true;
        dernierIndex= this.dataset.index;

    });
}

function ajouter_img_carrousel(elmImg){
    //elmImg represent une image de la galerie
    elmImg.dataset.index = index;
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

        if(dernierIndex != -1){
            _elCarrousel__figure.children[dernierIndex].classList.remove("carrousel__figure__img--activer");

        }
        _elCarrousel__figure.children[this.dataset.index].classList.add("carrousel__figure__img--activer");
        dernierIndex = this.dataset.index;





        
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

function ajouter_fleche_carrousel(){

    btn_fleche_droite.addEventListener('click', function(){
        console.log("hello droit");
        
        console.log(_elCarrousel__figure);

          
        })
};


btn_fleche_gauche.addEventListener('click', function(){
    console.log("hello gauche");

})

})();