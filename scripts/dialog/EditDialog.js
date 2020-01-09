import { useNotes } from "../notes/NoteProvider.js"
import { useCriminals } from "../criminals/CriminalProvider.js"

const eventHub = document.querySelector("#appContainer")

const EditFormDialogComponent = () => {

    eventHub.addEventListener("editButtonClicked", event => {
        const notes = useNotes()
        const criminals = useCriminals()

        const foundNote = notes.find(
            (singleNote) => {
                return singleNote.id === parseInt(event.detail.noteId, 10)
            }
        )

        const foundCriminal = criminals.find(
            (singleCriminal) => {
                return singleCriminal.name === foundNote.suspect
            }
        )



        const editFormHTML = (note, criminal) => {
                return `
                    <button class="button--close" id="note_form__close">[x]</button>
                    <div class="form_inputs">
                        <label for="note-text">Enter your note:</label>
                        <input type="text" id="note_text-${criminal.id}" value="Original note: ${note.text}" size=35></input>
                    </div> 

                    <br>

                     <div class ="form_info">
                        <span class="note_template_text">Criminal: ${criminal.name}</span>

                        <br>

                        <span class="note_template_text">Today's date: ${new Date().toLocaleDateString()}</span>
                    </div>
                    <button class="save_edit" id="editNote_${criminal.name.split(" ").join("-")}_${criminal.id}_${note.id}">Save edit</button>
                `
            }
        

        document.querySelector(".note_form").innerHTML = editFormHTML(foundNote, foundCriminal)

        document.querySelector(".note_form").showModal()

    }
    
    )

    eventHub.addEventListener("closeEditDialog", event => {
            const theDialog = document.querySelector(".note_form")
            theDialog.close()

            const message = new CustomEvent("noteEdited", {
                detail: {
                    editStatus: "edited"
                }
            })

            eventHub.dispatchEvent(message)
        
    })

}

export default EditFormDialogComponent