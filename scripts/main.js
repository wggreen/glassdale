import {getCriminals} from "./criminals/CriminalProvider.js"
import {getConvictions} from "./convictions/ConvictionProvider.js"
import CriminalListComponent from "./criminals/CriminalsList.js"
import ConvictionSelect from "./convictions/ConvictionSelect.js"
import CriminalSelect from "./criminals/CriminalSelect.js"
import NoteFormDialogComponent from "./dialog/FormDialog.js"
import {NoteFormComponent} from "./notes/NoteForm.js"
import { getNotes } from "./notes/NoteProvider.js"
import {NoteList} from "./notes/NotesList.js"
import AssociateDialogComponent from "./dialog/AssociateDialog.js"

getCriminals()
    .then(() => CriminalSelect())
    .then(() => CriminalListComponent())
getConvictions()
    .then(() => ConvictionSelect())
    .then(NoteFormDialogComponent())
    .then(NoteFormComponent())
    .then(AssociateDialogComponent())
getNotes()
    .then(() => NoteList())