class notesInput extends HTMLElement {
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

    .wrapper {
      display: flex;
      justify-content: center;
      padding-top: 80px; /* Space for fixed header */
      margin-bottom: 3em;
    }
  
    .form-wrapper {
      background-color: var(--secondary-bg);
      border-radius: 12px;
      box-shadow: 0 4px 12px var(--shadow-color);
      border: 1px solid var(--border-color);
      padding: 2em;
      width: 100%;
      max-width: 600px;
      transition: box-shadow 0.3s ease;
    }

    .form-wrapper:focus-within {
      box-shadow: 0 6px 20px var(--shadow-color);
    }
  
    .form-wrapper h1 {
      text-align: center;
      margin-bottom: 1.5em;
      font-weight: 700;
      color: var(--text-primary);
    }

    .form-group {
      display: flex;
      flex-direction: column;
      gap: 1.5em;
    }

    input, textarea {
      width: 100%;
      padding: 12px 15px;
      border-radius: 8px;
      border: 1px solid var(--border-color);
      background-color: #f8f9fa;
      color: var(--text-primary);
      font-size: 1rem;
      transition: border-color 0.3s, box-shadow 0.3s;
    }

    input:focus, textarea:focus {
      outline: none;
      border-color: var(--accent-color);
      box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.2);
    }
  
    textarea {
      resize: vertical;
      min-height: 120px;
    }
  
    .btn-submit {
      color: white;
      font-weight: 600;
      font-size: 1.1rem;
      background-color: var(--accent-color);
      padding: 12px 20px;
      border-radius: 8px;
      border: none;
      cursor: pointer;
      transition: background-color 0.3s, transform 0.2s;
    }

    .btn-submit:hover {
      background-color: #0056b3;
      transform: translateY(-2px);
    }

    .btn-submit:active {
      transform: translateY(0);
    }

    @media screen and (max-width: 768px) {
      .wrapper {
        padding-top: 100px;
      }
      .form-wrapper {
        width: 90%;
      }
    }
    `;
  }

  _emptyContent() {
    this._shadowRoot.innerHTML = "";
  }

  connectedCallback() {
    this.render();
    this._shadowRoot
      .querySelector("#form")
      .addEventListener("submit", this._handleSubmit.bind(this));
  }

  _handleSubmit(event) {
    event.preventDefault();

    const titleInput = this._shadowRoot.querySelector("#title");
    const descriptionInput = this._shadowRoot.querySelector("#description");

    if (
      titleInput.value.trim() === "" ||
      descriptionInput.value.trim() === ""
    ) {
      alert("Judul dan deskripsi tidak boleh kosong.");
      return;
    }

    const newNote = {
      title: titleInput.value,
      body: descriptionInput.value,
    };

    this.dispatchEvent(new CustomEvent("note-added", { detail: newNote }));

    titleInput.value = "";
    descriptionInput.value = "";
  }

  render() {
    this._emptyContent();
    this._updateStyle();

    this._shadowRoot.appendChild(this._style);
    this._shadowRoot.innerHTML += `
        <div class="wrapper">
            <div class="form-wrapper">
                <form class="form" id="form">
                    <h1>Buat Catatan Baru</h1>
                    <div class="form-group">
                        <input type="text" id="title" name="title" placeholder="Judul Catatan" required>
                        <textarea name="description" id="description" placeholder="Apa yang ada di pikiranmu?" required></textarea>
                        <button type="submit" name="submit" class="btn-submit">Tambah Catatan</button>
                    </div>
                </form>
            </div>
        </div>
        `;
  }
}

customElements.define("note-input", notesInput);
