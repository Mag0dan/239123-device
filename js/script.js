var link = document.querySelector(".write-us-btn");

var popup = document.querySelector(".modal-write-us");
var popup_close = popup.querySelector(".modal-close");

var form = popup.querySelector(".form-write-us");
var nickname = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=email]");
var letter = popup.querySelector("[name=letter]");

var map_link = document.querySelector(".map");
var map_modal = document.querySelector(".modal-map");
var map_close = map_modal.querySelector(".modal-close");

var storage_name = localStorage.getItem("name");
var storage_email = localStorage.getItem("email");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("modal-show");

  if (storage_name) {
    nickname.value = storage_name;
    if (storage_email) {
      email.value = storage_email;
      letter.focus();
    } else {
      email.focus();
    }
  } else {
    nickname.focus();
  }

});

popup_close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }

    if (map_modal.classList.contains("modal-show")) {
      map_modal.classList.remove("modal-show");
    }
  }
});

form.addEventListener("submit", function(event) {
  if (!nickname.value || !email.value || !letter.value) {
    event.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    localStorage.setItem("name", nickname.value);
    localStorage.setItem("email", email.value);
  }
});

map_link.addEventListener("click", function(event) {
  event.preventDefault();
  map_modal.classList.add("modal-show");
});

map_close.addEventListener("click", function(event) {
  event.preventDefault();
  map_modal.classList.remove("modal-show");
});
