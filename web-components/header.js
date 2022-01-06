class Header extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <nav>            
         {*Header code goes here *}         
        </nav>
      `;
    }
  }

customElements.define('header', Header);