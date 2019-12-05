/**
 *  FishListComponent which renders individual fish objects as HTML
 */

// Import `useFish` from the data provider module
import { useCriminals } from './CriminalProvider.js'
import CriminalComponent from './criminal.js'

const CriminalListComponent = () => {

    // Get a reference to the `<section class="fishList">` element
    const contentElement = document.querySelector(".criminalsContainer")
    const criminals = useCriminals()

    // Add to the existing HTML in the content element
    console.log("CriminalsList is working")
    contentElement.innerHTML += `
            ${
                criminals.map(criminal => CriminalComponent(criminal)).join("")
            }
    `
}

export default CriminalListComponent