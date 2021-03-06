
import Card from './Card.js';
import FormValidator from './FormValidator.js';
import Section from './Section.js';
import PopupWithImage from './PopupWithImage.js';
import PopupWithForm from './PopupWithForm.js';
import UserInfo from './UserInfo.js';
import '../pages/index.css';

import {
    initialCards,
    enableValidation,
    profileName,
    profileJob,
    photoCardsContainer,
    popupProfileEdit,
    popupProfileEditBtn,
    popupProfileEditForm,
    popupProfileEditNameInput,
    popupProfileEditJobInput,
    popupAddCard,
    popupAddCardBtn,
    popupAddCardForm,
    templateCards,
    popUpCardsImg,
    popupAddCardNameInput,
    popupAddCardLinkInput
} from '../utils/constants.js';


function createCard(item, templateSelector) {
    const cards = new Card({data: item}, templateSelector, {
            handleCardClick:() => {
                popupImg.open(item);
            }
        }
    );

    return cards.createCard();
};

const section = new Section({items: initialCards, renderer: (item) => {
            const card = createCard(item, templateCards);
            
            section.addItem(card, 'append');
        }
    }, 
    photoCardsContainer
);


section.renderItems();


const addCard = () => {
        section.addItem(createCard({
                    name: popupAddCardNameInput.value,
                    link: popupAddCardLinkInput.value
                },
            templateCards
        ), 'prepend'
    );
};


const userInfo = new UserInfo({
        name: profileName,
        job: profileJob
    }
);

const editProfile = () => {
    userInfo.setUserInfo({
            nameinput: popupProfileEditNameInput,
            jobInput: popupProfileEditJobInput
        }
    );
};



popupProfileEditBtn.addEventListener("click", () => {
    const {name, job} = userInfo.getUserInfo();

    popupProfileEditNameInput.value = name
    popupProfileEditJobInput.value = job

    const popup = new PopupWithForm({
                formAction: editProfile
            },
        popupProfileEdit
    );

    popupProfileEditEnableValidation.hideFormErrors();

    popup.open();
});

popupAddCardBtn.addEventListener("click", () => {
    const popup = new PopupWithForm({
                formAction: addCard
            },
        popupAddCard
    );

    popupAddCardEnableValidation.hideFormErrors();

    popup.open();
});

const popupImg = new PopupWithImage(popUpCardsImg);

const popupProfileEditEnableValidation  = new FormValidator(enableValidation, popupProfileEditForm)
popupProfileEditEnableValidation.enableValidation();

const popupAddCardEnableValidation  = new FormValidator(enableValidation, popupAddCardForm)
popupAddCardEnableValidation.enableValidation();