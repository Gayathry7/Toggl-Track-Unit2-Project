var toggl__chatbox = document.querySelector(".chatbox__btn")
toggl__chatbox.addEventListener("click", showChatbox)

function showChatbox() {
    document.querySelector(".chatbox__unreveal").classList.toggle("chatbox__reveal")
    if (document.querySelector(".chatbox__icon").src == "http://127.0.0.1:5501/chatbox/chat_icon.svg") {
        document.querySelector(".chatbox__icon").src = "../IMAGES/down_arrow.svg"
    } else {
        document.querySelector(".chatbox__icon").src = "../IMAGES/chat_icon.svg"
    }
}

var scrollUp__btn = document.querySelector(".scrollUp__btn")

window.onscroll = yScroll

function yScroll() {
    if (window.scrollY > window.innerHeight / 6) {
        scrollUp__btn.classList.add("scrollUp__btn__reveal")
    } else {
        scrollUp__btn.classList.remove("scrollUp__btn__reveal")
    }
}

scrollUp__btn.addEventListener("click", moveTop)

function moveTop() {
    window.scrollTo({ top: 0, behavior: "smooth" })
}