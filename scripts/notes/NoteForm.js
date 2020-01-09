import {saveNote, editNote} from "./NoteProvider.js"

export const NoteFormComponent = () => {

    const eventHub = document.querySelector("#appContainer")

    // Handle internal element click
    eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.classList.contains("saveNote")) {
            
            let suspectName = clickEvent.target.id.split("_")[1].split("-").join(" ")
            let suspectID = clickEvent.target.id.split("_")[2]
            let noteText = document.getElementById(`note_text-${suspectID}`).value
            let today = new Date().toLocaleDateString()

            // Make a new object representation of a note
            const newNote = {
                text: noteText,
                date: today,
                suspect: suspectName
            }

            const closeMessage = new CustomEvent("closeFormDialog", {
                detail: {
                    closeFormDialog: "do it"
                }
            })

            // Change API state and application state
            saveNote(newNote).then(
                () => eventHub.dispatchEvent(closeMessage)
            )
        }
    })
    eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.classList.contains("save_edit")) {

            let suspectName = clickEvent.target.id.split("_")[1].split("-").join(" ")
            let suspectID = clickEvent.target.id.split("_")[2]
            let noteID = clickEvent.target.id.split("_")[3]
            let noteText = document.getElementById(`note_text-${suspectID}`).value
            let today = new Date().toLocaleDateString()

            const newNote = {
                text: noteText,
                date: today,
                suspect: suspectName,
                id: noteID 
            }

            const message = new CustomEvent("closeEditDialog", {
                detail: {
                    closeEditDialog: "do it"
                }
            })

            editNote(newNote)
            .then(() => eventHub.dispatchEvent(message))

        }
    })
}