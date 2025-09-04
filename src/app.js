import "./styles/style.css";
import "./script/components/index.js";
import { animate, glide } from "motion";

const baseUrl = "https://notes-api.dicoding.dev/v2";

const getNotes = () => {
  showLoadingIndicator();
  Promise.all([
    fetch(`${baseUrl}/notes`).then((response) => response.json()),
    fetch(`${baseUrl}/notes/archived`).then((response) => response.json()),
  ])
    .then(([notesResponse, archivedNotesResponse]) => {
      hideLoadingIndicator();
      if (notesResponse.error || archivedNotesResponse.error) {
        showResponseMessage(
          notesResponse.message || archivedNotesResponse.message,
        );
      } else {
        renderNotes(notesResponse.data, archivedNotesResponse.data);
      }
    })
    .catch((error) => {
      hideLoadingIndicator();
      showResponseMessage(error);
    });
};

const addNote = (note) => {
  showLoadingIndicator();
  fetch(`${baseUrl}/notes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title: note.title, body: note.body }),
  })
    .then((response) => response.json())
    .then((responseJson) => {
      hideLoadingIndicator();
      if (responseJson.error) {
        showResponseMessage(responseJson.message);
      } else {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Catatan telah ditambahkan",
          showConfirmButton: false,
          timer: 1500,
        });
        getNotes();
      }
    })
    .catch((error) => {
      hideLoadingIndicator();
      showResponseMessage(error);
    });
};

const removeNote = (noteId) => {
  showLoadingIndicator();
  fetch(`${baseUrl}/notes/${noteId}`, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((responseJson) => {
      hideLoadingIndicator();
      if (responseJson.error) {
        showResponseMessage(responseJson.message);
      } else {
        Swal.fire({
          title: "Terhapus!",
          text: "Catatan Anda telah dihapus.",
          icon: "success",
        });
        getNotes();
      }
    })
    .catch((error) => {
      hideLoadingIndicator();
      showResponseMessage(error);
    });
};

const archiveNote = (noteId) => {
  showLoadingIndicator();
  fetch(`${baseUrl}/notes/${noteId}/archive`, {
    method: "POST",
  })
    .then((response) => response.json())
    .then((responseJson) => {
      hideLoadingIndicator();
      if (responseJson.error) {
        showResponseMessage(responseJson.message);
      } else {
        Swal.fire({
          title: "Tersimpan!",
          text: "Catatan Anda telah diarsipkan.",
          icon: "success",
        });
        getNotes();
      }
    })
    .catch((error) => {
      hideLoadingIndicator();
      showResponseMessage(error);
    });
};

const unarchiveNote = (noteId) => {
  showLoadingIndicator();
  fetch(`${baseUrl}/notes/${noteId}/unarchive`, {
    method: "POST",
  })
    .then((response) => response.json())
    .then((responseJson) => {
      hideLoadingIndicator();
      if (responseJson.error) {
        showResponseMessage(responseJson.message);
      } else {
        Swal.fire({
          title: "Dikembalikan!",
          text: "Catatan Anda telah dipulihkan.",
          icon: "success",
        });
        getNotes();
      }
    })
    .catch((error) => {
      hideLoadingIndicator();
      showResponseMessage(error);
    });
};

const renderNotes = (notes, archivedNotes) => {
  const notesSection = document.querySelector("#notes-section");
  const archivedSection = document.querySelector("#archived-section");

  notesSection.innerHTML = "<h2>Catatan</h2>";
  archivedSection.innerHTML = "<h2>Catatan Arsip</h2>";

  const renderNoteList = (container, noteList, isArchived) => {
    const noteItem = document.createElement("note-item");
    noteItem.note = noteList;
    container.appendChild(noteItem);

    const shadowRoot = noteItem.shadowRoot;
    const noteCards = shadowRoot.querySelectorAll(".card-note");
    noteCards.forEach((card) => {
      const deleteButton = card.querySelector(".button-delete");
      const archiveButton = card.querySelector(".button-archive");
      const unarchiveButton = card.querySelector(".button-unarchive");
      const noteId = deleteButton.dataset.id;

      deleteButton.addEventListener("click", () => removeNote(noteId));

      if (isArchived) {
        unarchiveButton.addEventListener("click", () => unarchiveNote(noteId));
      } else {
        archiveButton.addEventListener("click", () => archiveNote(noteId));
      }
    });
  };

  renderNoteList(notesSection, notes, false);
  renderNoteList(archivedSection, archivedNotes, true);
};

const showResponseMessage = (message = "Periksa koneksi internet Anda") => {
  Swal.fire({
    title: "Terjadi Kesalahan!",
    text: message,
    icon: "error",
  });
};

document.addEventListener("DOMContentLoaded", () => {
  const tabContainer = document.querySelector("#tab-container");
  const notesSection = document.querySelector("#notes-section");
  const archivedSection = document.querySelector("#archived-section");

  tabContainer.innerHTML = `
    <button id="tab-notes" class="tab-btn active">Catatan</button>
    <button id="tab-archived" class="tab-btn">Diarsipkan</button>
  `;

  const notesTab = document.querySelector("#tab-notes");
  const archivedTab = document.querySelector("#tab-archived");

  notesSection.style.display = "block";
  archivedSection.style.display = "none";

  notesTab.addEventListener("click", () => {
    notesSection.style.display = "block";
    archivedSection.style.display = "none";
    notesTab.classList.add("active");
    archivedTab.classList.remove("active");
  });

  archivedTab.addEventListener("click", () => {
    notesSection.style.display = "none";
    archivedSection.style.display = "block";
    archivedTab.classList.add("active");
    notesTab.classList.remove("active");
  });

  getNotes();

  const inputNoteElement = document.querySelector("note-input");
  inputNoteElement.addEventListener("note-added", (event) => {
    addNote(event.detail);
  });
});

const showLoadingIndicator = () => {
  const loadingIndicator = document.querySelector(".loadingIndicator");
  loadingIndicator.style.display = "flex";
};

const hideLoadingIndicator = () => {
  const loadingIndicator = document.querySelector(".loadingIndicator");
  loadingIndicator.style.display = "none";
};

// animasi dapat dihapus atau disesuaikan karena #itemNotes sudah tidak ada lagi
// animate("#itemNotes", { y: 0 }, { easing: glide({ velocity: -50 }) });
