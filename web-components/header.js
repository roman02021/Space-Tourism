class Header extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <header class="menu">
          <div class="menu__logo-container">
            <a href="index.html">
              <img class="menu__logo" src="../assets/shared/logo.svg">
            </a>
          </div>        
          <div class="menu__line-through"></div>
          <nav class="menu__container">
            <ul class="menu__list">
              <li class="menu__item"><a href="index.html" class="menu__link"><span class="menu__count">00</span><span class="menu__text">Home</span></a></li>
              <li class="menu__item"><a href="destination.html" class="menu__link"><span class="menu__count">01</span><span class="menu__text">Destination</span></a></li>
              <li class="menu__item"><a href="crew.html" class="menu__link"><span class="menu__count">02</span><span class="menu__text">Crew</span></a></li>
              <li class="menu__item"><a href="technology.html" class="menu__link"><span class="menu__count">03</span><span class="menu__text">Technology</span></a></li>
            </ul>
          </nav>
        </header>
      `;
    }
  }

customElements.define('c-header', Header);