export default class UserInfo {
	constructor({userProfileName, userProfileJob}) {
			this._profileName = document.querySelector(userProfileName);
			this._profileJob = document.querySelector(userProfileJob);
		};

	getUserInfo() {
		return {
			name: this._profileName.textContent,
			job: this._profileJob.textContent
		};
	};

	setUserInfo({nameinput, jobInput}) {
		this._profileName.textContent = nameinput.value;
		this._profileJob.textContent = jobInput.value;
	};
};