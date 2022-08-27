
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import Api from "../components/Api.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";
import '../pages/index.css';

import {
    validationConfig,
    photoCardsContainerSelector,
    popupProfileEditNameInput,
    popupProfileEditJobInput,
    profileNameSelector,
    profileJobSelector,
    popupProfileEditBtn,
    profileAvatarSelector,
    popupAvatarEditBtn,
    popupAddCardBtn,
    popupAddCardForm,
    popupProfileEditForm,
    popupAvatarEditForm,
} from '../utils/constants.js';



const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-49',
    headers: {
        authorization: '66d7b16a-6642-4dde-a21c-44094fb413b5',
        'Content-Type': 'application/json'
    }
});


let userId

api.getAllNeededData()
    .then(([cards, userData]) => {
        userId = userData._id;
    
        userInfo.setUserInfo(userData);
        section.renderItems(cards);
    })
    .catch((err) => console.log(err));



    const section = new Section({renderer: (item) => {
        const newCard = addCard(item);
        section.addItem(newCard, 'append');
    }
}, photoCardsContainerSelector);

const addCard = (item) => {
    const card = new Card({data: item, api, userId, openPopupWithDelete: () => {
            popupDeleteCard.setSubmitAction(_ => {
            popupDeleteCard.renderLoadingWhileDeleting(true);
            api.removeCard(item._id)
                .then(_ => {
                    card.handleDeleteImage();
                    popupDeleteCard.close();
                })
                .catch((err) => console.log(err))
                .finally(_ => popupDeleteCard.renderLoadingWhileDeleting(false))
            })
            popupDeleteCard.open();
        },
        handleCardClick: () => {
            popupImg.open(item);
        },
        likeHandleClick: () => {
            if(!card._likeBtn.classList.contains("photo-cards__like-btn_active")){
                api.like(item._id)
                    .then(res => card.handleLikeCard(res.likes))
                    .catch((err) => console.log(err))
            } else {
                api.dislike(item._id)
                    .then(res => card.handleLikeCard(res.likes))
                    .catch((err) => console.log(err))
            } 
        },
    }, '#templateCards');

    return card.createCard();
};


const popupDeleteCard = new PopupWithConfirmation({
    popupSelector: ".popup_type_delete-card",
});
popupDeleteCard.setEventListeners();


const popupImg = new PopupWithImage('.popup_type_cards-img');
popupImg.setEventListeners()



const userInfo = new UserInfo({
    userProfileNameSelector: profileNameSelector,
    userProfileJobSelector: profileJobSelector,
    userProfileAvatar: profileAvatarSelector
});

const setInfo = () => {
    const userItems = userInfo.getUserInfo();
    popupProfileEditNameInput.value = userItems.profileName;
    popupProfileEditJobInput.value = userItems.profileJob;
}



const popupProfileEdit = new PopupWithForm({
    popupSelector: '.popup_type_profile-edit',
    handleSubmitForm: (data) => {
        popupProfileEdit.renderLoading(true);
        api.setUserInfo(data)
            .then((data) => {
                userInfo.setUserInfo(data);
                popupProfileEdit.close();
            })
            .catch((err) => console.log(err))
            .finally(_ => popupProfileEdit.renderLoading(false))
    }
});

popupProfileEdit.setEventListeners();
popupProfileEditBtn.addEventListener("click", () => {
    setInfo();
    popupProfileEditValidator .hideFormErrors();
    popupProfileEdit.open();
});

const popupProfileEditValidator  = new FormValidator(validationConfig, popupProfileEditForm);
popupProfileEditValidator .enableValidation();



const popupAvatarEdit = new PopupWithForm({
    popupSelector: ".popup_type_profile-edit-avatar",
    handleSubmitForm: (data) => {
        popupAvatarEdit.renderLoading(true);
        api.handleUserAvatar(data)
            .then((data) => {
                userInfo.setUserAvatar(data);
                popupAvatarEdit.close();
            })
            .catch((err) => console.log(err))
            .finally(_ => popupAvatarEdit.renderLoading(false))
    }
});

popupAvatarEdit.setEventListeners();
popupAvatarEditBtn.addEventListener("click", function () {
    popupAvatarEditValidator.hideFormErrors();
    popupAvatarEdit.open();
})

const popupAvatarEditValidator = new FormValidator(validationConfig, popupAvatarEditForm);
popupAvatarEditValidator.enableValidation();



const popupAddCard = new PopupWithForm({
    popupSelector: ".popup_type_add-cards",
    handleSubmitForm: (data) => {
        popupAddCard.renderLoading(true);
        const cardObj = {};
        cardObj.name = data.popUpEditCardName;
        cardObj.link = data.popUpEditCardLink;
        api.updateCards(cardObj.name, cardObj.link)
            .then((res) => {
                const card = addCard(res);
                section.addItem(card, 'prepend');
                popupAddCard.close();
            })
            .catch((err) => console.log(err))
            .finally(_ => popupAddCard.renderLoading(false))
    }
});

popupAddCard.setEventListeners();
popupAddCardBtn.addEventListener("click", function () {
    popupAddCardValidator.hideFormErrors();
    popupAddCard.open();
});

const popupAddCardValidator  = new FormValidator(validationConfig, popupAddCardForm);
popupAddCardValidator.enableValidation();