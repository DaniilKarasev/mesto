export default class UserInfo {
	constructor({userProfileName, userProfileJob}) {
			this._profileNameElement = document.querySelector(userProfileName);
			this._profileJobElement = document.querySelector(userProfileJob);
		};

	getUserInfo() {
		return {
			name: this._profileNameElement.textContent,
			job: this._profileJobElement.textContent
		};
	};

	setUserInfo({nameInput, jobInput}) {
		this._profileNameElement.textContent = nameInput.value;
		this._profileJobElement.textContent = jobInput.value;
	};
};