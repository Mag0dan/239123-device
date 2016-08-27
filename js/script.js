var link = document.querySelector(".write-us-btn");

var popup = document.querySelector(".modal-write-us");
var close = popup.querySelector(".modal-close");

var form = popup.querySelector("form-write-us");
var name = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=email]");

// var storage = localStorage.getItem("name");

var chart = document.querySelector(".contacts img");
var map = document.querySelector(".modal-map");
var close_map = map.querySelector(".modal-close");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("modal-show");

  if (storage) {
    name.value = storage;
    email.focus();
  } else {
    name.focus();
  }

});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal-show");
  //popup.classList.remove("modal-error");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
    if (map.classList.contains("modal-show")) {
      map.classList.remove("modal-show");
    }
  }
});

chart.addEventListener("click", function(event) {
  event.preventDefault();
  map.classList.add("modal-show");
});

close_map.addEventListener("click", function() {
  event.preventDefault();
  map.classList.remove("modal-show");
})



// form.addEventListener("submit", function(event) {
//   if (!login.value || !password.value) {
//     event.preventDefault();
//     popup.classList.remove("modal-error");
//     popup.offsetWidth = popup.offsetWidth;
//     popup.classList.add("modal-error");
//   } else {
//     localStorage.setItem("login", login.value);
//   }
// });
