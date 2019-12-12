/*
 *   ConvictionSelect component that renders a select HTML element
 *   which lists all convictions in the Glassdale PD API
 */
import {useCriminals} from "./CriminalProvider.js"

/*
    Which element in your HTML contains all components?
    That's your Event Hub. Get a reference to it here.
*/
const eventHub = document.querySelector("#appContainer")
const contentTarget = document.querySelector(".filters__criminals")

const CriminalSelect = () => {
    const criminals = useCriminals()

    /*
        On the Event Hub, listen for a "change" event. Remember to write
        an `if` condition to make sure that it was the `#crimeSelect`
        element that changed.

        When that event happens, dispatch a custom message to your Event
        Hub so that the criminal list can listen for it and change what
        it renders.
    */
   
   
   const render = (criminalCollection) => {
       contentTarget.innerHTML = `
       <select class="criminal_dropdown" id="criminalSelect">
       <option value="0">Please select a criminal...</option>
       ${
           criminals.map(criminal => 
            `<option class="criminal" value=${criminal.name.split(" ").join("-")}>${criminal.name}</option>`
            )
        }
        </select>
        `
    }

    render(criminals)

    eventHub.addEventListener("change", changeEvent => {
        if(changeEvent.target.classList.contains("criminal_dropdown")) {
            const selectedCriminal = changeEvent.target.value.split("-").join(" ")
 
            const message = new CustomEvent("criminalSelected", {
                detail: {
                    criminalId: selectedCriminal
                }
            })
            eventHub.dispatchEvent(message)
        }
    })
}

export default CriminalSelect