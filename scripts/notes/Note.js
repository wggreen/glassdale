const NoteHTML = (note) => {
    return `
        <section class="note_component">
            <div class="note__header">
                <h3 class="note_name">
                    ${note.suspect}
                </h3>
                <span>
                    ${note.date}
                <span>
            </div>
            <div class="note__text">
                <span>${note.text}</span>
            </div>
            <div class="note_buttons">
                <button class="note_button_delete" id="deleteNote--${note.id}">Delete note</button>
                <button class="note_button_edit" id="editNote--${note.id}">Edit note</button>
            </div>
        </section>
    `
}

export default NoteHTML