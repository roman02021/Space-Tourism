class Header extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <header class="menu">
          <div class="menu__logo-container">
            <a href="index.html">
              <img class="menu__logo" src="../assets/shared/logo.svg">
            </a>
          </div>        
          <button class="hamburger js-hamburger">
            <span class="hamburger__line"></span>
            <span class="hamburger__line"></span>
            <span class="hamburger__line"></span>
          </button>
          <nav class="menu__container js-menu-container">
            <div class="menu__list-container js-list-container">
            <ul class="menu__list js-menu-items-container">
              <div class="close-container">
                <button class="hamburger-close js-hamburger-close">
                </button>
              </div>
              <li class="menu__item"><a href="index.html" class="menu__link"><span class="menu__count">00</span><span class="menu__text">Home</span></a></li>
              <li class="menu__item"><a href="destination.html" class="menu__link"><span class="menu__count">01</span><span class="menu__text">Destination</span></a></li>
              <li class="menu__item"><a href="crew.html" class="menu__link"><span class="menu__count">02</span><span class="menu__text">Crew</span></a></li>
              <li class="menu__item"><a href="technology.html" class="menu__link"><span class="menu__count">03</span><span class="menu__text">Technology</span></a></li>
            </ul>
            </div>
          </nav>
        </header>
      `;
    }
  }

customElements.define('c-header', Header);