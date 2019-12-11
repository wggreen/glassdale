import {useNotes} from "./NoteProvider.js"
import NoteHTML from "./Note.js"

const eventHub = document.querySelector("#appContainer")

export const NoteList = () => {
    const appStateNotes = useNotes()

    eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.id === "button_showNotes") {
            clearNotesButton()
            const clearTarget = document.querySelector(".show_button_notes_area")
            clearTarget.innerHTML = ""
            render(appStateNotes)
        }
    })

    eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.id === "button_notesClear") {
            // console.log(clickEvent.target.id)
            // debugger
            // console.log("clear notes triggered")
            // debugger
            clearNotes()
        }
    })

    const render = (notesCollection) => {
        const contentTarget = document.querySelector(".notes_area")
        contentTarget.innerHTML = ""
        let notesHTML = notesCollection.map(note => NoteHTML(note)).join(" ")
        contentTarget.innerHTML = `
            ${notesHTML}
        `
    }

    const clearNotes = () => {
        const documentTarget = document.querySelector(".clear_button_notes_area")
        const contentTarget = document.querySelector(".notes_area")
        const showTarget = document.querySelector(".show_button_notes_area")
        contentTarget.innerHTML = ""
        documentTarget.innerHTML = ""
        showTarget.innerHTML = `
        <button id="button_showNotes">Show notes</button>
        `
    }

    const clearNotesButton = () => {
        const contentTarget = document.querySelector(".clear_button_notes_area")
        contentTarget.innerHTML = `
            <br>
            <br>
            <button id="button_notesClear">Clear notes</button>
        `
    }
}