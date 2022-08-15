export default class UserInfo {
	constructor({userProfileNameSelector, userProfileJobSelector}) {
		this._profileNameElement = document.querySelector(userProfileNameSelector);
		this._profileJobElement = document.querySelector(userProfileJobSelector);
	};

	getUserInfo() {
		return {
			name: this._profileNameElement.textContent,
			job: this._profileJobElement.textContent
		};
	};

	setUserInfo({nameInput, jobInput}) {
		this._profileNameElement.textContent = nameInput;
		this._profileJobElement.textContent = jobInput;
	};
};