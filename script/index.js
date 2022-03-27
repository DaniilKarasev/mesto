let popUp = document.querySelector('.popup');
let closeBtn = document.querySelector('.popup__close');
let editBtn = document.querySelector('.profile__edit-btn');
let profilName = document.getElementById('prof_name');
let profilJob = document.getElementById('prof_job');
let formElement = document.querySelector('.popup__form');
let popUpName = document.querySelector('.popup__input_value_name');
let popUpJob = document.querySelector('.popup__input_value_job');


function popup() {
    popUp.classList.toggle('popup_opened')

    popUpName.value = profilName.textContent;
    popUpJob.value = profilJob.textContent;
};

function formSubmitHandler (evt) {
    evt.preventDefault();

    profilName.textContent = popUpName.value;
    profilJob.textContent = popUpJob.value;

    popup()
};

formElement.addEventListener('submit', formSubmitHandler);
editBtn.addEventListener('click', popup);
closeBtn.addEventListener('click', popup);


