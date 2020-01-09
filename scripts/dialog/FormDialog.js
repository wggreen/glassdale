import { useCriminals } from "../criminals/CriminalProvider.js"

const eventHub = document.querySelector("#appContainer")

const NoteFormDialogComponent = () => {

    eventHub.addEventListener("noteButtonClicked", event => {
        const criminals = useCriminals()

        const foundCriminal = criminals.find(
            (singleCriminal) => {
                return singleCriminal.id === parseInt(event.detail.criminalId, 10)
            }
        )

        const noteFormHTML = (criminal) => {
                return `
                    <button class="button--close" id="note_form__close">[x]</button>
                    <div class="form_inputs">
                        <label for="note-text">Enter your note:</label>
                        <input type="text" id="note_text-${criminal.id}" size=35></input>
                    </div> 

                    <br>

                     <div class ="form_info">
                        <span class="note_template_text">Criminal: ${criminal.name}</span>

                        <br>

                        <span class="note_template_text">Today's date: ${new Date().toLocaleDateString()}</span>
                    </div>
                    <button class="saveNote" id="saveNote_${criminal.name.split(" ").join("-")}_${criminal.id}">Save Note</button>
                `
            }
        

        document.querySelector(".note_form").innerHTML = noteFormHTML(foundCriminal)

        document.querySelector(".note_form").showModal()

    }
    
    )

    eventHub.addEventListener("click", theEvent => {
        if (theEvent.target.classList.contains("button--close")) {
            const theDialog = document.querySelector(".note_form")
            theDialog.close()
        }
    })


    eventHub.addEventListener("closeFormDialog", event => {
        const theDialog = document.querySelector(".note_form")
        theDialog.close()

    
    })
}

export default NoteFormDialogComponent