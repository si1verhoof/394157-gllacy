var link = document.querySelector(".feedback");
var feedbackModal = document.querySelector(".feedback-form");
var feedbackClose = feedbackModal.querySelector(".feedback-close");
var login = feedbackModal.querySelector("[name=feedback-name]");
var form = feedbackModal.querySelector("form");
var password = feedbackModal.querySelector("[type=password]");
var storage = localStorage.getItem("login");

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  feedbackModal.classList.add("feedback-form-visible");
  if (storage) {
    login.value = strage;
    password.focus();
  } else {
    login.focus;
  }
});

feedbackClose.addEventListener("click", function() {
  feedbackModal.classList.remove("feedback-form-visible");
  feedbackModal.classList.remove("feedback-form-submit-erro");
});

form.addEventListener("submit", function(evt) {
  if (!login.value || !password.value) {
    evt.preventDefault();
    feedbackModal.classList.add("feedback-form-submit-error");
  } else {
    localStorage.setItem("login", login.value);
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (feedbackModal.classLost.contains("feedback-form-visible")) {
      feedbackModal.classList.remove("feedback-form-visible");
    }
  }
});