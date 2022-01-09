class Footer extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `    
        <footer class="footer">            
            Developed by Roman Zemaník
        </footer>     
      `;
    }
  }

  customElements.define('c-footer', Footer);