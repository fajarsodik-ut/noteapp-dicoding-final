class headerBar extends HTMLElement {
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

            nav {
                display: flex;
                width: 100%;
                background-color: var(--secondary-bg);
                justify-content: center;
                align-items: center;
                padding: 20px;
                box-shadow: 0 2px 4px var(--shadow-color);
                border-bottom: 1px solid var(--border-color);
            }
            
            nav .logo h1 {
                color: var(--text-primary);
                font-size: 1.5rem;
                font-weight: 700;
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
        <nav>
            <div class="logo">
                <h1>AplikasiCatatan</h1>
            </div>
        </nav>
    `;
  }
}

customElements.define("header-bar", headerBar);
