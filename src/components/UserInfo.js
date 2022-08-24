export default class UserInfo {
	constructor({userProfileNameSelector, userProfileJobSelector, userProfileAvatar}) {
		this._profileNameElement = userProfileNameSelector;
		this._profileJobElement = userProfileJobSelector;
		this._profileAvatarElement = userProfileAvatar;
	};

	getUserInfo() {
		this._userData = {
            profileName: this._profileNameElement.textContent,
            profileJob: this._profileJobElement.textContent,
        }
        return this._userData;
	};

	setUserAvatar(data) {
        this._profileAvatarElement.src = data.avatar;
    }

	setUserInfo(data) {
		this._profileNameElement.textContent = data.name;
		this._profileJobElement.textContent = data.about;
		this.setUserAvatar(data);
	};
};