import {getCriminals} from "./criminals/CriminalProvider.js"
import {getConvictions} from "./convictions/ConvictionProvider.js"
import CriminalListComponent from "./criminals/CriminalsList.js"
import ConvictionSelect from "./convictions/ConvictionSelect.js"

getCriminals().then(() => CriminalListComponent())
getConvictions().then(() => ConvictionSelect())
