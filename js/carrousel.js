(function(){
    
    console.log("carrousel");


let _elBtn_modal = document.querySelector(".btn_modal");
let _elBtn_close = document.querySelector(".btn_close");
let _elCarrousel = document.querySelector(".carrousel");
_elBtn_modal.addEventListener('click', function(){
    _elCarrousel.classList.add("carrousel--ouvrir");
    


})

_elBtn_close.addEventListener('click', function(){
    _elCarrousel.classList.remove("carrousel--ouvrir");

});

})();