let popUp = document.querySelector('.popup');
let closeBtn = document.querySelector('.popup__close');
let editBtn = document.querySelector('.profile__edit-btn');
let profilName = document.getElementById('prof_name');
let profilJob = document.getElementById('prof_job');
let formElement = document.querySelector('.popup__form');
let popUpName = document.querySelector('.popup__input_value_name');
let popUpJob = document.querySelector('.popup__input_value_job');


function openPopUp() {
    popUp.classList.add('popup_opened')

    popUpName.value = profilName.textContent;
    popUpJob.value = profilJob.textContent;
};

function closePopUp() {
    popUp.classList.remove('popup_opened')
};

function formSubmitHandler (evt) {
    evt.preventDefault();

    profilName.textContent = popUpName.value;
    profilJob.textContent = popUpJob.value;

    closePopUp()
};

formElement.addEventListener('submit', formSubmitHandler);
editBtn.addEventListener('click', openPopUp);
closeBtn.addEventListener('click', closePopUp);


