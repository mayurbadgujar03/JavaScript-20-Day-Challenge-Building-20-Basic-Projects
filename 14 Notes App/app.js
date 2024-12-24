document.addEventListener('DOMContentLoaded', () => {
    const noteForm = document.getElementById("note-form");
    const noteTitle = document.getElementById("note-title");
    const noteContent = document.getElementById("note-content");
    const notesList = document.getElementById("notes-list");
    const clearAll = document.getElementById("clear-all");

    loadList();

    noteForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const title = noteTitle.value.trim();
        const content = noteContent.value.trim();

        if (title && content) {
            let note = { title, content };
            let notes = JSON.parse(localStorage.getItem("notes")) || [];
            notes.push(note);
            localStorage.setItem("notes", JSON.stringify(notes));
            loadList();
            noteTitle.value = "";
            noteContent.value = "";
        }
    });

    function loadList() {
        let notes = JSON.parse(localStorage.getItem("notes")) || [];

        notesList.innerHTML = notes.map((note, index) => {
            return `
            <li class="note" data-index="${index}">
                <div class="note-header">
                    <span>${note.title}</span>
                    <button class="close-btn" onclick="deleteNote(${index})">×</button>
                </div>
                <div class="note-content">${note.content}</div>
            </li>
            `;
        }).join('');
    }

    window.deleteNote = function(index){
        let notes = JSON.parse(localStorage.getItem("notes")) || [];
        notes.splice(index, 1);
        localStorage.setItem("notes", JSON.stringify(notes));
        loadList();
    }

    clearAll.addEventListener('click', () => {
        let notes = JSON.parse(localStorage.getItem("notes")) || [];
        localStorage.removeItem("notes");
        loadList();
    })
})