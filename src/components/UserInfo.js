export default class UserInfo {
	constructor({name, job}) {
			this._profileName = document.querySelector(name);
			this._profileJob = document.querySelector(job);
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