import isWebp from "./modules/webp.js"
import burgerFunc from './modules/burger.js'
import fixedMenuFunc from './modules/fixedMenu.js'

isWebp()

burgerFunc()

fixedMenuFunc()

if (document.querySelector(".welcome-text__hide")) {
  function hideText() {
    const text = document.querySelectorAll(".welcome-text__hide")
    const hide = document.querySelector(".welcome__hide")

    hide.addEventListener("click", () => {
      text.forEach(elem => {
        if (!elem.classList.contains("welcome-text__hide--hidden")) {
          elem.classList.add("welcome-text__hide--hidden");
          hide.textContent = "Скрыть"

        } else {
          elem.classList.remove('welcome-text__hide--hidden');
          hide.textContent = "Раскрыть"
        }
      });
    })
  }

  hideText();
}

function modalFunc() {
  const modals = document.querySelectorAll(".modal")
  const btns = document.querySelectorAll(".specialists-item__btn")
  const closes = document.querySelectorAll(".modal__close")

  function modal(activeIndex) {
    modals.forEach((modal, index) => {
      modal.classList.remove("modal--active")


      if (activeIndex === index) {
        modal.classList.add("modal--active")
        document.body.classList.add("locked")
      }

      modal.addEventListener("click", (e) => {
        if (e.target.classList.contains("modal")) {
          modal.classList.remove("modal--active")
          document.body.classList.remove("locked")
        }
      })
    })
  }

  function btn() {
    btns.forEach((btn, index) => {
      btn.addEventListener("click", (event) => {
        const e = event.currentTarget

        if (e) {
          modal(index)
        }
      })
    })
  }

  btn();

  closes.forEach((close, index) => {
    close.addEventListener("click", () => {
      modals.forEach(modal => {
        modal.classList.remove("modal--active")
        document.body.classList.remove("locked")
      })
    })
  })

}

modalFunc();