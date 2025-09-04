class notesItem extends HTMLElement {
  _shadowRoot = null;
  _style = null;
  _note = {
    id: null,
    title: null,
    body: null,
    createdAt: null,
  };

  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._style = document.createElement("style");
  }

  _emptyContent() {
    this._shadowRoot.innerHTML = "";
  }

  set note(value) {
    this._note = value;

    this.render();
  }

  get note() {
    return this._note;
  }

  _updateStyle() {
    this._style.textContent = `
        :host {
          display: block;
        }

        .grid-container {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 1.5em;
            padding: 1em 0;
        }
        
        .card-note {
            background-color: var(--card-bg);
            border: 1px solid var(--border-color);
            border-radius: 12px;
            box-shadow: 0 4px 15px var(--shadow-color);
            padding: 1.5em;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            transition: transform 0.3s, box-shadow 0.3s;
        }

        .card-note:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 25px var(--shadow-color);
        }

        .card-note h4 {
            font-size: 1.25rem;
            font-weight: 600;
            margin-bottom: 0.5em;
            color: var(--text-primary);
        }

        .card-note .date {
          font-size: 0.75rem;
          color: var(--text-secondary);
          margin-bottom: 1em;
        }
        
        .card-note .desc {
            font-size: 0.95rem;
            line-height: 1.6;
            color: var(--text-secondary);
            flex-grow: 1;
            margin-bottom: 1.5em;
        }

        .note-actions {
            display: flex;
            gap: 0.5em;
            margin-top: auto;
        }

        .note-actions button {
            color: white;
            border: none;
            border-radius: 6px;
            padding: 8px 12px;
            cursor: pointer;
            font-weight: 500;
            font-size: 0.8rem;
            transition: background-color 0.3s, transform 0.2s;
        }

        .note-actions button:hover {
            transform: translateY(-2px);
        }

        .button-delete {
            background-color: var(--danger-color);
        }
        .button-delete:hover {
            background-color: #c93c27;
        }

        .button-archive {
            background-color: var(--success-color);
        }
        .button-archive:hover {
            background-color: #4a9d4a;
        }

        .button-unarchive {
            background-color: var(--warning-color);
        }
        .button-unarchive:hover {
            background-color: #d49b3e;
        }
    `;
  }

  render() {
    this._emptyContent();
    this._updateStyle();

    this._shadowRoot.appendChild(this._style);
    this._shadowRoot.innerHTML += `
      <div class="grid-container">
        ${
          this._note && this._note.length > 0
            ? this._note
                .map(
                  (note) => `
            <div class="card-note">
              <div>
                <h4>${note.title}</h4>
                <p class="date">${new Date(note.createdAt).toLocaleDateString(
                  "id-ID",
                  {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  },
                )}</p>
                <p class="desc">${note.body}</p>
              </div>
              <div class="note-actions">
                  <button class="button-delete" type="button" data-id="${
                    note.id
                  }" >Hapus</button>
                  ${
                    note.archived
                      ? `<button class="button-unarchive" type="button" data-id="${note.id}">Pulihkan</button>`
                      : `<button class="button-archive" type="button" data-id="${note.id}">Arsip</button>`
                  }
              </div>
            </div>
            `,
                )
                .join("")
            : `<p class="no-notes">Tidak ada catatan yang tersedia di bagian ini.</p>`
        }
      </div>
    `;
  }
}

customElements.define("note-item", notesItem);
