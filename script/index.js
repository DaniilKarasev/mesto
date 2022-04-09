//! Переменные относящие к попапу редактирования профиля
const profileEditBtn = document.querySelector('.profile__edit-btn'); // находим кнопку открытия попрапа профиля
const popUpProfileEdit = document.querySelector('.popup__profile-edit'); // находим попап редактирования профиля
const popUpProfileEditFormElement = popUpProfileEdit.querySelector('.popup__form'); // находим форму попапа профиля
const popUpProfileEditName = popUpProfileEdit.querySelector('.popup__input_value_name'); // находим инпут имени в попапе профиля
const popUpProfileEditJob = popUpProfileEdit.querySelector('.popup__input_value_job'); // находим инпут работы в попапе профиля
const popUpProfileEditCloseBtn = popUpProfileEdit.querySelector('.popup__close'); // находим кнопку закрытия попапа профиля
const profilName = document.getElementById('prof_name'); // находим имя профиля
const profilJob = document.getElementById('prof_job'); // находим работу профиля

//! Переменные относящиеся к попапу добавления фото-карточек
const addCardsBtn = document.querySelector('.profile__add-btn'); // находим кнопку добавления карточки
const popUpAddCards = document.querySelector('.popup__add-cards'); // находим попап добавления фото-карточек
const popUpAddCardsFormElement = popUpAddCards.querySelector('.popup__form'); // находим форму попапа
const popUpAddCardsEditName = popUpAddCards.querySelector('.popup__input_value_add-name'); // находим инпут имени новой карточки
const popUpAddCardsLink = popUpAddCards.querySelector('.popup__input_value_link'); // находим инпут ссылки на новое изображение карточки
const popUpAddCardsCloseBtn = popUpAddCards.querySelector('.popup__close'); // находим кнопку закрытия попапа

//! Переменные относящиеся к попапу изображения карточки
const cardsImg = document.querySelector('.photo-cards__img'); // находим изображение карточки
const popUpCardsImg = document.querySelector('.popup__cards-img'); // находим попап для посмотра изображения
const popUpCardsImgSrc = popUpCardsImg.querySelector('.popup__img'); // находим изоборажение в попапе
const popUpCardsImgText = popUpCardsImg.querySelector('.popup__img-text'); // находим название карточки в попапе
const popUpCardsImgCloseBtn = popUpCardsImg.querySelector('.popup__close'); // находим кнопку закрытия попапа

//! Переменные теймплейтов фото-карточек
const photoCards = document.querySelector('.photo-cards'); // находим секцию фото-карточек
const photoTemplate = document.querySelector('#templateCards').content; // находим содержимое темплейта фото-карточки
const cardsLink = photoTemplate.querySelector('photo-cards__img'); // находим изображение карточки
const cardsName = photoTemplate.querySelector('photo-cards__text'); // находим название карточки

//! массив с данными фото-карточек
const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },

    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },

    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },

    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },

    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
]; 


//! попап профиля
//функция открытия попапа редактирования профиля
function openPopUpProfileEdit() {
    popUpProfileEdit.classList.add('popup_opened'); // откываем попап
    popUpProfileEditName.value = profilName.textContent; //подставляем данные из прифиля в иптупы попапа
    popUpProfileEditJob.value = profilJob.textContent;
};

//функция закрытия попапа редактирования профиля
function closePopUpProfileEdit() {
    popUpProfileEdit.classList.remove('popup_opened');
};

//функция отправки данных из инпутов попапа редактирования профиля
function formSubmitHandler (evt) {
    evt.preventDefault(); // отменяем стандартную отправку формы.

    profilName.textContent = popUpProfileEditName.value; //заменяем значение данных профиля на велью инпутов попапа
    profilJob.textContent = popUpProfileEditJob.value;

    closePopUpProfileEdit(); // закрыаем попап
};

//! попап карточек
//создание 6-ти фото-карточкек  при загрузке страницы с данными массива
initialCards.forEach (function (element){
    const photoElement = photoTemplate.querySelector('.photo-cards__content-wrapper').cloneNode(true); // клонируем содержимое теймплейта карточки
    photoElement.querySelector('.photo-cards__img').src = element.link; // берём изобржение для карточки из массива
    photoElement.querySelector('.photo-cards__img').alt = element.name; // задаём альтернативны текст карточки равный имени карточки
    photoElement.querySelector('.photo-cards__text').textContent = element.name; // берём название карточки из массива

        //реализация постановки лайков для автоматически загруженных карточек
        photoElement.querySelector('.photo-cards__like-btn').addEventListener('click', function(evt){
            evt.target.classList.toggle('photo-cards__like-btn_active');
        });

        //реализация открытия попапа изображения для автоматически загруженных карточек
        photoElement.querySelector('.photo-cards__img').addEventListener('click', function(){
            const popUpCardsImg = document.querySelector('.popup__cards-img');
            popUpCardsImgSrc.src = photoElement.querySelector('.photo-cards__img').src;
            popUpCardsImgSrc.alt = photoElement.querySelector('.photo-cards__text').textContent;
            popUpCardsImgText.textContent = photoElement.querySelector('.photo-cards__text').textContent;
            popUpCardsImg.classList.add('popup_opened');
        });

        //реализация удаления автоматически загруженных карточек
        photoElement.querySelector('.photo-cards__delete-btn').addEventListener('click', function(){
            const deletedItem =  photoElement.closest('.photo-cards__content-wrapper');
            deletedItem.remove();
        });

    //добавление карточек
    photoCards.append(photoElement);
});

//функция добавления фото-карточки
function addCardsSubmitHandler (evt) {
    evt.preventDefault(); // отменяем стандартную отправку формы.

    const photoElement = photoTemplate.querySelector('.photo-cards__content-wrapper').cloneNode(true); // клонируем содержимое теймплейта карточки
    photoElement.querySelector('.photo-cards__text').textContent = popUpAddCardsEditName.value; // принимаем значение для названия из инпута попапа
    photoElement.querySelector('.photo-cards__img').src = popUpAddCardsLink.value; // принимаем значение для адреса изображения из инпута попапа
    photoElement.querySelector('.photo-cards__img').alt = popUpAddCardsEditName.value; // задаём альтернативны текст карточки равный значению из попапа названия карточки

    photoCards.prepend(photoElement); // добавляем карточку вначало секции

    //реализация постановки лайков для добавленных карточек
    photoElement.querySelector('.photo-cards__like-btn').addEventListener('click', function(evt){
        evt.target.classList.toggle('photo-cards__like-btn_active');
    })

    //реализация удаления добавленных карточек
    photoElement.querySelector('.photo-cards__delete-btn').addEventListener('click', function(){
        const deletedItem =  photoElement.closest('.photo-cards__content-wrapper');
        deletedItem.remove();
    });

    //реализация открытия попапа изображения для добавленных карточек
    photoElement.querySelector('.photo-cards__img').addEventListener('click', function(){
        const popUpCardsImg = document.querySelector('.popup__cards-img');
        popUpCardsImgSrc.src = photoElement.querySelector('.photo-cards__img').src;
        popUpCardsImgSrc.alt = photoElement.querySelector('.photo-cards__text').textContent;
        popUpCardsImgText.textContent = photoElement.querySelector('.photo-cards__text').textContent;
        popUpCardsImg.classList.add('popup_opened');
    });

    closePopUpAddCards(); // закрыаем попап
};


// функция открытия попапа редактирования карточек
function openPopUpAddCards() {
    popUpAddCards.classList.add('popup_opened');
};

// функция закрытия попапа добавления карточки
function closePopUpAddCards() {
    popUpAddCards.classList.remove('popup_opened');
};

// функция закрытия попапа изображения
function closePopUpCardsImg() {
    popUpCardsImg.classList.remove('popup_opened');
};


//! обработчики событий для попапа редактирования профиля
popUpProfileEditFormElement.addEventListener('submit', formSubmitHandler); //обработичик оправки данных из формы попапа редактирования профиля
profileEditBtn.addEventListener('click', openPopUpProfileEdit); //обработичик открытия попапа редактирования профиля
popUpProfileEditCloseBtn.addEventListener('click', closePopUpProfileEdit); //обработичик закрытия попапа редактирования профиля

//! обработчики сотыбий для попапа добавления фото-карточек
popUpAddCardsFormElement.addEventListener('submit', addCardsSubmitHandler); //обработичик оправки данных из формы попапа
addCardsBtn.addEventListener('click', openPopUpAddCards); //обработичик открытия попапа
popUpAddCardsCloseBtn.addEventListener('click', closePopUpAddCards); //обработичик закрытия попапа 

//! обработчик собития для попапа изображений
popUpCardsImgCloseBtn.addEventListener('click', closePopUpCardsImg); //обработчик закрытия попапа

