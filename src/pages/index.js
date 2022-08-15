
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
                popupImg.setEventListeners();
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


const addCard = () => {
        section.addItem(createCard({
                    name: popupAddCardNameInput.value,
                    link: popupAddCardLinkInput.value
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

const editProfile = () => {
    userInfo.setUserInfo({
            nameInput: popupProfileEditNameInput,
            jobInput: popupProfileEditJobInput
        }
    );
};

function fillProfilePopupInputs() {
    const {name, job} = userInfo.getUserInfo();

    popupProfileEditNameInput.value = name
    popupProfileEditJobInput.value = job
}

popupProfileEditBtn.addEventListener("click", () => {
    fillProfilePopupInputs();
    popupProfileEditEnableValidation.hideFormErrors();

    const popup = new PopupWithForm({handleSubmit: editProfile},
        popupProfileEditSelector
    );

    popup.setEventListeners();
    popup.open();
});

popupAddCardBtn.addEventListener("click", () => {
    popupAddCardEnableValidation.hideFormErrors();

    const popup = new PopupWithForm({
                handleSubmit: addCard
            },
        popupAddCardSelector
    );

    popup.setEventListeners();
    popup.open();
});

const popupImg = new PopupWithImage(popUpCardsImgSelector);

const popupProfileEditEnableValidation  = new FormValidator(validationConfig, popupProfileEditForm)
popupProfileEditEnableValidation.enableValidation();

const popupAddCardEnableValidation  = new FormValidator(validationConfig, popupAddCardForm)
popupAddCardEnableValidation.enableValidation();