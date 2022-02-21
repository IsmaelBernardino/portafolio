const card_btn = document.querySelectorAll('.card__btn');
const card_btn_back = document.querySelectorAll('.card__btn--back');
const card_info = document.querySelectorAll('.card__info');
const card_img = document.querySelectorAll('.card__img');

for (let i = 0; i < card_btn.length; i++) {
    card_btn[i].addEventListener("click",function(){
        card_info[i].style.opacity = "1";
        card_img[i].style.opacity = "0";
        card_btn[i].style.display = "none";
        card_btn_back[i].style.display = "flex"
    });
}

for (let j = 0; j < card_btn_back.length; j++) {
    card_btn_back[j].addEventListener("click", function(){
        card_info[j].style.opacity = "0";
        card_img[j].style.opacity = "1";
        card_btn[j].style.display = "flex";
        card_btn_back[j].style.display = "none"
    });
}