import { useCriminals } from "../criminals/CriminalProvider.js"

const eventHub = document.querySelector("#appContainer")
const contentTarget = document.querySelector(".note_form")

const NoteFormDialogComponent = () => {

    eventHub.addEventListener("noteButtonClicked", event => {
        const criminals = useCriminals()

        const foundCriminal = criminals.find(
            (singleCriminal) => {
                return singleCriminal.id === parseInt(event.detail.criminalId, 10)
            }
        )

        // console.log(foundCriminal)
        // debugger

        // const criminalID = foundCriminal.id
        // console.log(criminalID)
        // debugger

        // const criminalName = foundCriminal.name
        // const today = new Date().toLocaleDateString()
        // const criminalNameDash = foundCriminal.name.split(" ").join("-")

        const noteFormHTML = (criminal) => {
                return `
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

                    <br>

                    <button class="saveNote" id="saveNote_${criminal.name.split(" ").join("-")}_${criminal.id}">Save Note</button>

                    <br>
                    <br>

                    <button class="button--close" id="note_form__close">Close note form</button>
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

}

export default NoteFormDialogComponent


/* <dialog class="note_form" id="note--entry">
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

                    <br>

                    <button class="saveNote" id="saveNote_${criminal.name.split(" ").join("-")}_${criminal.id}">Save Note</button>

                    <br>
                    <br>

                    <button class="button--close" id="note_form__close">Close note form</button>
            </dialog> */