class footerBar extends HTMLElement {
  _shadowRoot = null;
  _style = null;

  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._style = document.createElement("style");
  }

  _updateStyle() {
    this._style.textContent = `
            :host {
                display: block;
            }

            footer {
                padding: 2em 0;
                text-align: center;
                background-color: var(--secondary-bg);
                color: var(--text-secondary);
                font-size: 0.9rem;
                border-top: 1px solid var(--border-color);
            }
        `;
  }

  _emptyContent() {
    this._shadowRoot.innerHTML = "";
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this._emptyContent();
    this._updateStyle();

    this._shadowRoot.appendChild(this._style);
    this._shadowRoot.innerHTML += `
        <footer>
            <p>&copy; 2025 Fajar Sodik. All rights reserved.</p>
        </footer>
    `;
  }
}

customElements.define("footer-bar", footerBar);
