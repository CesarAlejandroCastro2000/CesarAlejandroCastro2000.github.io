class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        Copyright &copy; 2021 Castro Reyes Cesar Alejandro
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
