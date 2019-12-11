const NoteHTML = (note) => {
    return `
        <section class="note_component">
            <div class="note__header">
                <h3>
                    ${note.suspect}
                </h3>
                <span>
                    ${note.date}
                <span>
            </div>
            <div class="note__text">
                <span>${note.text}</span>
            </div>
        </section>
    `
}

export default NoteHTML