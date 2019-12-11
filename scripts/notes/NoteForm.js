import {saveNote} from "./NoteProvider.js"

export const NoteFormComponent = () => {

    const eventHub = document.querySelector("#appContainer")

    // Handle internal element click
    eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.classList.contains("saveNote")) {
            console.log(clickEvent.target.id)
            
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

            // Change API state and application state
            saveNote(newNote)
        }
    })}

    // rest of the code here