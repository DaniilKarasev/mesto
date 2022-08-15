
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import '../pages/index.css';

import {
    initialCards,
    validationConfig,
    profileNameSelector,
    profileJobSelector,
    photoCardsContainerSelector,
    popupProfileEditSelector,
    popupProfileEditBtn,
    popupProfileEditForm,
    popupProfileEditNameInput,
    popupProfileEditJobInput,
    popupAddCardSelector,
    popupAddCardBtn,
    popupAddCardForm,
    templateCardsSelector,
    popUpCardsImgSelector,
    popupAddCardNameInput,
    popupAddCardLinkInput
} from '../utils/constants.js';


function createCard(item, templateSelector) {
    const card = new Card({data: item}, templateSelector, {
            handleCardClick:() => {
                popupImg.open(item);
            }
        }
    );
    
    return card.createCard();
};


const section = new Section({items: initialCards, renderer: (item) => {
            const card = createCard(item, templateCardsSelector);
            section.addItem(card, 'append');
        }
    }, 
    photoCardsContainerSelector
);


section.renderItems();


const addCard = (newCard) => {
        section.addItem(createCard({
                    name: newCard[popupAddCardNameInput.name],
                    link: newCard[popupAddCardLinkInput.name]
                },
            templateCardsSelector
        ), 'prepend'
    );
};


const userInfo = new UserInfo({
    userProfileNameSelector: profileNameSelector,
    userProfileJobSelector: profileJobSelector
    }
);


const editProfile = (formInputs) => {
    userInfo.setUserInfo({
            nameInput: formInputs[popupProfileEditNameInput.name],
            jobInput: formInputs[popupProfileEditJobInput.name]
        }
    );
};


function fillProfilePopupInputs() {
    const {name, job} = userInfo.getUserInfo();
    
    popupProfileEditNameInput.value = name
    popupProfileEditJobInput.value = job
}


const popupProfileEdit = new PopupWithForm({handleSubmit: editProfile}, popupProfileEditSelector);
popupProfileEdit.setEventListeners();

const popupProfileEditValidator  = new FormValidator(validationConfig, popupProfileEditForm)
popupProfileEditValidator.enableValidation();

popupProfileEditBtn.addEventListener("click", () => {
    fillProfilePopupInputs();

    popupProfileEditValidator.hideFormErrors();
    popupProfileEdit.open();
});


const popupAddCard = new PopupWithForm({handleSubmit: addCard}, popupAddCardSelector);
popupAddCard.setEventListeners();

const popupAddCardValidator  = new FormValidator(validationConfig, popupAddCardForm)
popupAddCardValidator.enableValidation();

popupAddCardBtn.addEventListener("click", () => {
    popupAddCardValidator.hideFormErrors();
    popupAddCard.open();
});


const popupImg = new PopupWithImage(popUpCardsImgSelector);
popupImg.setEventListeners();