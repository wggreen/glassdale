import {getCriminals} from "./criminals/CriminalProvider.js"
import {getConvictions} from "./convictions/ConvictionProvider.js"
import CriminalListComponent from "./criminals/CriminalsList.js"
import ConvictionSelect from "./convictions/ConvictionSelect.js"
import CriminalSelect from "./criminals/CriminalSelect.js"
import initializeDetailButtonEvents from "./notes/dialogs.js"
import dialogEvents from "./notes/dialogs.js"
import {NoteFormComponent} from "./notes/NoteForm.js"
import { getNotes } from "./notes/NoteProvider.js"
import {NoteList} from "./notes/NotesList.js"

getCriminals()
    .then(() => CriminalSelect())
    .then(() => CriminalListComponent())
    .then(initializeDetailButtonEvents())
getConvictions()
    .then(() => ConvictionSelect())
    .then(dialogEvents())
    .then(NoteFormComponent())
getNotes()
    .then(() => NoteList())