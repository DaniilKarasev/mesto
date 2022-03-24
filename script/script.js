let pop_up = document.querySelector('.popup');
let close_btn = document.querySelector('.popup__close');
let save_btn = document.querySelector('.popup__save');
let edit_btn = document.querySelector('.profile__edit-btn');
let profilname = document.getElementById('prof_name');
let profiljob = document.getElementById('prof_job');
let formElement = document.querySelector('.popup__form');
let popup_name = document.querySelector('.popup__name');
let popup_job = document.querySelector('.popup__job');
let like_btn = document.querySelectorAll('.photo-cards__like-btn');

function popup() {
    pop_up.classList.toggle('popup_opened')
};

edit_btn.addEventListener('click', popup);
close_btn.addEventListener('click', popup);

function formSubmitHandler (evt) {
    evt.preventDefault();

    profilname.textContent = popup_name.value;
    profiljob.textContent = popup_job.value;
};

formElement.addEventListener('submit', formSubmitHandler);
save_btn.addEventListener('click', popup);

popup_name.value = profilname.textContent;
popup_job.value = profiljob.textContent;

like_btn.forEach (like_btn => {
    like_btn.addEventListener('click', function (){
        like_btn.classList.toggle('photo-cards__like-btn_active')
    });
});


