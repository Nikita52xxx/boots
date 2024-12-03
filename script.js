let profile = document.getElementById("header-info__right_persArea");
let profile_card = document.querySelector(".profile-card");
let product_card_closed = document.getElementById("product-card-closed");
let body = document.body;

profile.addEventListener('click', function(){
    profile_card.classList.toggle("show");
    body.classList.toggle("black-back");
})

product_card_closed.addEventListener('click', function(){
    profile_card.classList.toggle("show");
    body.classList.toggle("black-back");
})



let favorites_img = document.getElementById("header-info__right_favorites");
let favorites_active = document.querySelector(".profile-favorites");
let favorites_card_close = document.getElementById("favorites-card-close");

favorites_img.addEventListener('click', function() {
    favorites_active.classList.toggle("show");
    body.classList.toggle("black-back");
    
})

favorites_card_close.addEventListener('click', function() {
    favorites_active.classList.toggle("show");
    body.classList.toggle("black-back");
})




let card_all = document.querySelectorAll(".card-container__all-cards");
let selected_product = [];
let favorites = document.querySelectorAll(".card-container__price-active");
let favorites_add = document.querySelector(".header-info__right_favorites-active");
let quantity = 0;


for (let i of card_all) {
    let like = i.querySelector(".card-container__price-active");
    let h4 = i.querySelector(".card-container__all-cards_bottom h4")
    let h3 = i.querySelector(".card-container__price h3")

    like.addEventListener('click', function() {
        if (like.style.filter != "invert(0.5) sepia(1) saturate(100) hue-rotate(0deg)"){
            like.style.filter = "invert(0.5) sepia(1) saturate(100) hue-rotate(0deg)";
            quantity++;
            favorites_add.textContent = quantity;

            selected_product.push(h4.textContent, h3.textContent);
            console.log(selected_product)

        } else{
            like.style.filter = "grayscale(100%)";
            quantity--;
            favorites_add.textContent = quantity;

            selected_product = selected_product.filter(item => item != h4.textContent && item != h3.textContent);
            console.log(selected_product);
            
        }

        if (quantity>0) {
            favorites_add.style.display = "block";
        } else{
            favorites_add.style.display = "none";
        }



    })
}






