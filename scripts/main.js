import {getCriminals} from "./criminals/CriminalProvider.js"
import {getConvictions} from "./convictions/ConvictionProvider.js"
import {getWitnesses} from "./witnesses/WitnessProvider.js"
import CriminalListComponent from "./criminals/CriminalsList.js"
import ConvictionSelect from "./convictions/ConvictionSelect.js"
import CriminalSelect from "./criminals/CriminalSelect.js"
import NoteFormDialogComponent from "./dialog/FormDialog.js"
import {NoteFormComponent} from "./notes/NoteForm.js"
import { getNotes } from "./notes/NoteProvider.js"
import {NoteList} from "./notes/NotesList.js"
import AssociateDialogComponent from "./dialog/AssociateDialog.js"
import WitnessList from "./witnesses/WitnessList.js"
import EditFormDialogComponent from "./dialog/EditDialog.js"
import OfficerSelect from "./officers/OfficerSelect.js"
import { getOfficers } from "./officers/OfficerProvider.js"
import FilterButton from "./filter/Filter.js"

getCriminals()
    .then(() => CriminalSelect())
    .then(() => CriminalListComponent())
    .then(() => NoteFormComponent())
    .then(() => NoteFormDialogComponent())
    .then(() => AssociateDialogComponent())
    .then(() => EditFormDialogComponent())
    .then(() => FilterButton())
getOfficers()
    .then(() => OfficerSelect())
getConvictions()
    .then(() => ConvictionSelect())
getNotes()
    .then(() => NoteList())
getWitnesses()
    .then(() => WitnessList())