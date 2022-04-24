//! Переменные относящие к попапу редактирования профиля
const profileEditBtn = document.querySelector('.profile__edit-btn'); // находим кнопку открытия попрапа профиля
const popUpProfileEdit = document.querySelector('.popup_type_profile-edit'); // находим попап редактирования профиля
const popUpProfileEditFormElement = popUpProfileEdit.querySelector('.popup__form'); // находим форму попапа профиля
const popUpProfileEditName = popUpProfileEdit.querySelector('.popup__input_value_name'); // находим инпут имени в попапе профиля
const popUpProfileEditJob = popUpProfileEdit.querySelector('.popup__input_value_job'); // находим инпут работы в попапе профиля
const popUpProfileEditCloseBtn = popUpProfileEdit.querySelector('.popup__close'); // находим кнопку закрытия попапа профиля
const profilName = document.getElementById('prof_name'); // находим имя профиля
const profilJob = document.getElementById('prof_job'); // находим работу профиля

//! Переменные относящиеся к попапу добавления фото-карточек
const addCardsBtn = document.querySelector('.profile__add-btn'); // находим кнопку добавления карточки
const popUpAddCards = document.querySelector('.popup_type_add-cards'); // находим попап добавления фото-карточек
const popUpAddCardsFormElement = popUpAddCards.querySelector('.popup__form'); // находим форму попапа
const popUpAddCardsEditName = popUpAddCards.querySelector('.popup__input_value_add-name'); // находим инпут имени новой карточки
const popUpAddCardsLink = popUpAddCards.querySelector('.popup__input_value_link'); // находим инпут ссылки на новое изображение карточки
const popUpAddCardsCloseBtn = popUpAddCards.querySelector('.popup__close'); // находим кнопку закрытия попапа

//! Переменные относящиеся к попапу изображения карточки
const cardsImg = document.querySelector('.photo-cards__img'); // находим изображение карточки
const cardsTitle = document.querySelector('.photo-cards__text');
const popUpCardsImg = document.querySelector('.popup_type_cards-img'); // находим попап для посмотра изображения
const popUpCardsImgSrc = popUpCardsImg.querySelector('.popup__img'); // находим изоборажение в попапе
const popUpCardsImgText = popUpCardsImg.querySelector('.popup__img-text'); // находим название карточки в попапе
const popUpCardsImgCloseBtn = popUpCardsImg.querySelector('.popup__close'); // находим кнопку закрытия попапа

//! Переменные теймплейтов фото-карточек
const photoCards = document.querySelector('.photo-cards'); // находим секцию фото-карточек
const photoTemplate = document.querySelector('#templateCards').content; // находим содержимое темплейта фото-карточки
const cardsLink = photoTemplate.querySelector('photo-cards__img'); // находим изображение карточки
const cardsName = photoTemplate.querySelector('photo-cards__text'); // находим название карточки

//! Нахожим оверлей попапа
const popupOverlay = document.querySelectorAll('.popup');

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
//функция открытия попапа
function openPopup(popup) {
    popup.classList.add('popup_opened');
};

//функция закрытия попапа
function closePopup(popup) {
    popup.classList.remove('popup_opened');
};

//функция отправки данных из инпутов попапа редактирования профиля
function handleProfileFormSubmit (evt) {
    evt.preventDefault(); // отменяем стандартную отправку формы.
    profilName.textContent = popUpProfileEditName.value; //заменяем значение данных профиля на велью инпутов попапа
    profilJob.textContent = popUpProfileEditJob.value;

    closePopup(popUpProfileEdit); // закрыаем попап
};

//! блоккарточек

//фунция создания карточек
function createCard(cardName, cardLink) {
    const cardElement = photoTemplate.querySelector('.photo-cards__content-wrapper').cloneNode(true); //клонируем содержимое тейплейта
    const cardImgElement = cardElement.querySelector('.photo-cards__img'); // находим картинку карточки
    cardImgElement.src = cardLink; // задём путь до картинки
    cardImgElement.alt = cardLink; // задём альтернативный текс для картинки
    cardElement.querySelector('.photo-cards__text').textContent = cardName; // задаём имя карточки
        
        //постановка лайка карточке
        cardElement.querySelector('.photo-cards__like-btn').addEventListener('click', (evt) => evt.target.classList.toggle('photo-cards__like-btn_active'));

        //открытие попапа с изображением карточки
        cardImgElement.addEventListener('click', function(){
            popUpCardsImgSrc.src = cardLink;
            popUpCardsImgSrc.alt = cardName;
            popUpCardsImgText.textContent = cardName;
            openPopup(popUpCardsImg);
        });

        //удаление карточки
        cardElement.querySelector('.photo-cards__delete-btn').addEventListener('click', () => cardElement.remove());

    return cardElement
}

    //добавление карточек на основе данных массива initialCards
    initialCards.forEach((card) => photoCards.append(createCard(card.name, card.link)));

    //функция добавления новой карточки
    function addCard(name, link) {
        photoCards.prepend(createCard(name, link)); // создаём карточку
        closePopup(popUpAddCards); // закрываем попап

        popUpAddCardsFormElement.reset(); // очищаем поля ввода
    };



//функция отправки данных из формы попапа фото-карточки
function handleAddCardsSubmit (evt){
    evt.preventDefault(); // отменяем стандартную отправку формы

    addCard(popUpAddCardsEditName.value, popUpAddCardsLink.value); // получаем данные о созданной карточке присваивя значения пути и имени из инпутов
};


//фукнция закрытия попапов по кнопке ESC
document.addEventListener('keydown', function (evt) {
    if (evt.key === 'Escape') {
        popupOverlay.forEach((popups) =>popups.classList.remove('popup_opened'))}
});

//Функция закрытия попапа по клику за пределами рабочей зоны попапа
document.addEventListener('click', function(evt){
    if (evt.target.classList.contains('popup_opened')){
        evt.target.classList.remove('popup_opened');
    }
});


//! обработчики событий для попапа редактирования профиля
popUpProfileEditFormElement.addEventListener('submit', handleProfileFormSubmit); //обработичик оправки данных из формы попапа редактирования профиля
profileEditBtn.addEventListener('click', () => {
    openPopup(popUpProfileEdit);
    popUpProfileEditName.value = profilName.textContent;
    popUpProfileEditJob.value = profilJob.textContent;
}); //обработичик открытия попапа редактирования профиля
popUpProfileEditCloseBtn.addEventListener('click', () => closePopup(popUpProfileEdit)); //обработичик закрытия попапа редактирования профиля

//! обработчики сотыбий для попапа добавления фото-карточек
popUpAddCardsFormElement.addEventListener('submit', handleAddCardsSubmit); //обработичик оправки данных из формы попапа
addCardsBtn.addEventListener('click', () => openPopup(popUpAddCards)); //обработичик открытия попапа
popUpAddCardsCloseBtn.addEventListener('click', () => closePopup(popUpAddCards)); //обработичик закрытия попапа 

//! обработчик собития для попапа изображений
popUpCardsImgCloseBtn.addEventListener('click', () => closePopup(popUpCardsImg)); //обработчик закрытия попапа

