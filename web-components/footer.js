class Footer extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `    
        <footer>            
          {*footer code goes here *}         
        </footer>     
      `;
    }
  }

  customElements.define('footer', Footer);