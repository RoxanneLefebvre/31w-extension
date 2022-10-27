(function(){
        
     /**
      * init de variable
      */
     let index = 0;
     indexFleche = 0;
     let dernierIndex = -1;


    /**
    * les elements du carrousel
    */
        let _elCarrousel = document.querySelector(".carrousel");
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
        
        ajouter_img_carrousel(elmImg)
        ajouter_radio_carrousel();
        
        /** ecouteur sur les images de la galerie */
        elmImg.addEventListener('mousedown', function(){

            _elCarrousel__figure.children[this.dataset.index].classList.add("carrousel__figure__img--activer");
            _elCarrousel.classList.add("carrousel--ouvrir");

            _elCarrousel__form.children[this.dataset.index].checked = true;
            dernierIndex= this.dataset.index;

        });

    }

    /**
     * ajoute les bouton radio dans le carrousel
     * @param {img} elmImg - chaque img du carrousel
     * @param {number} index - index de l'image 
     */
    function ajouter_img_carrousel(elmImg){
        elmImg.dataset.index = index;
        let _elCarrousel__figure__img = document.createElement("img");
        _elCarrousel__figure__img.setAttribute('src', elmImg.getAttribute("src"));
        _elCarrousel__figure__img.classList.add('carrousel__figure__img');
        _elCarrousel__figure.appendChild(_elCarrousel__figure__img)
        _elCarrousel__figure__img.dataset.index = index;

    }
    /**
     * ajoute les bouton radio dans le carrousel
     * @param {number} index - index de l'image
     * @param {number} dernierIndex - index de l'image d'avant quon enleve la classe activer
     */
    function ajouter_radio_carrousel(){
        let _elCarrousel__form__radio = document.createElement('input');
        _elCarrousel__form__radio.setAttribute('name', 'carrousel__form__radio');
        _elCarrousel__form__radio.setAttribute('class', 'carrousel__form__radio');
        _elCarrousel__form__radio.setAttribute('type', 'radio');
        _elCarrousel__form__radio.dataset.index = index;
        index++;
        _elCarrousel__form.appendChild(_elCarrousel__form__radio);

        _elCarrousel__form__radio.addEventListener('click', function(){

            if(dernierIndex != -1){
                _elCarrousel__figure.children[dernierIndex].classList.remove("carrousel__figure__img--activer");
            }

            _elCarrousel__figure.children[this.dataset.index].classList.add("carrousel__figure__img--activer");
            dernierIndex = this.dataset.index;
        })
    }

    /**
     * code fermer le modal
     */

    _elBtn_close.addEventListener('click', function(){
        _elCarrousel.classList.remove("carrousel--ouvrir");

    });


    /**
     * event listener sur le bouton droit pour faire derouler le carrousel
     * @param {arrayInput[]} -tableau contenant les boutons radio 
     * @param {number} indexFleche - index de l'image
     * @param {number} dernierIndex - index de l'image d'avant quon enleve la classe activer
     * */
    btn_fleche_droite.addEventListener('click', function(){
            
        let arrayInput = document.querySelectorAll('[name="carrousel__form__radio"]');

        indexFleche++;
        btn_fleche_droite.dataset.indexFleche = indexFleche;


        if(dernierIndex != -1){
                _elCarrousel__figure.children[dernierIndex].classList.remove("carrousel__figure__img--activer");
        }
            
        if(this.dataset.indexFleche < _elCarrousel__figure.children.length){
            arrayInput[this.dataset.indexFleche].checked=true;
            
            _elCarrousel__figure.children[this.dataset.indexFleche].classList.add("carrousel__figure__img--activer");
            dernierIndex = this.dataset.indexFleche;
        
            
        }else {
            this.dataset.indexFleche = 0;
            indexFleche = 0;
            _elCarrousel__figure.children[this.dataset.indexFleche].classList.add("carrousel__figure__img--activer");
            arrayInput[this.dataset.indexFleche].checked=true;
        }

        
    })

    /**
     * event listener sur le bouton gauche pour faire derouler le carrousel
     * @param {arrayInput[]} -tableau contenant les boutons radio 
     * @param {number} indexFleche - index de l'image
     * @param {number} dernierIndex - index de l'image d'avant quon enleve la classe activer
     * */
    btn_fleche_gauche.addEventListener('click', function(){
        let arrayInput = document.querySelectorAll('[name="carrousel__form__radio"]');
        
        btn_fleche_gauche.dataset.indexFleche = indexFleche-1;
        console.log(indexFleche);
        
        
        if(dernierIndex != -1){
            _elCarrousel__figure.children[dernierIndex].classList.remove("carrousel__figure__img--activer");
        }
        
        if ((this.dataset.indexFleche < _elCarrousel__figure.children.length) &&(this.dataset.indexFleche !=-1)){
            arrayInput[this.dataset.indexFleche].checked=true;
            
            _elCarrousel__figure.children[this.dataset.indexFleche].classList.add("carrousel__figure__img--activer");
            
            dernierIndex = this.dataset.indexFleche;
            indexFleche--;

        }else {   
            this.dataset.indexFleche = _elCarrousel__figure.children.length-1;
            indexFleche = _elCarrousel__figure.children.length-1;
            
            _elCarrousel__figure.children[this.dataset.indexFleche].classList.add("carrousel__figure__img--activer");
            dernierIndex = this.dataset.indexFleche;
            arrayInput[this.dataset.indexFleche].checked=true;
        }
            

    })

})();