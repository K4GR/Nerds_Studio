var link = document.querySelector(".studio-adress-button");
var popup = document.querySelector(".modal-window");
var close = document.querySelector(".modal-window-close");
var myname = document.querySelector("[name=send-name]");
var myemail = document.querySelector("[name=send-email]");
var myletter = document.querySelector("[name=send-letter]");
var form = popup.querySelector("form");


link.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.add("modal-show");
	myname.focus();
});

close.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.remove("modal-show");
	popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
	if (!myname.value) {
		evt.preventDefault();
		popup.classList.remove("modal-error");
		popup.offsetWidth = popup.offsetWidth;
		popup.classList.add("modal-error");
		console.log("Нужно заполнить поле: Ваше имя");
	} else {
		if (!myemail.value) {
			evt.preventDefault();
			popup.classList.remove("modal-error");
			popup.offsetWidth = popup.offsetWidth;
			popup.classList.add("modal-error");
			console.log("Нужно заполнить поле: Ваше e-mail");
		} else {
			if (!myletter.value) {
				evt.preventDefault();
				popup.classList.remove("modal-error");
				popup.offsetWidth = popup.offsetWidth;
				popup.classList.add("modal-error");
				console.log("Нужно заполнить все поля ввода");
				}
				}
			}
		});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		evt.preventDefault();
		if (popup.classList.contains("modal-show")) {
			popup.classList.remove("modal-show");
			popup.classList.remove("modal-error");
		}
	}
});
