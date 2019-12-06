/*
 *   ConvictionSelect component that renders a select HTML element
 *   which lists all convictions in the Glassdale PD API
 */
import {useConvictions} from "./ConvictionProvider.js"

/*
    Which element in your HTML contains all components?
    That's your Event Hub. Get a reference to it here.
*/
const eventHub = document.querySelector("#appContainer")
const contentTarget = document.querySelector(".filters__crime")

const ConvictionSelect = () => {
    const convictions = useConvictions()

    /*
        On the Event Hub, listen for a "change" event. Remember to write
        an `if` condition to make sure that it was the `#crimeSelect`
        element that changed.

        When that event happens, dispatch a custom message to your Event
        Hub so that the criminal list can listen for it and change what
        it renders.
    */
   
   
   const render = (convictionCollection) => {
       contentTarget.innerHTML = `
       <select class="dropdown" id="crimeSelect">
       <option value="0">Please select a crime...</option>
       ${
           convictions.map(conviction => 
            `<option class="crime" value=${conviction.split(" ").join("-")}>${conviction}</option>`
            )
        }
        </select>
        `
    }

    render(convictions)

    eventHub.addEventListener("change", changeEvent => {
        if(changeEvent.target.classList.contains("dropdown")) {
            const selectedCrime = changeEvent.target.value.split("-").join(" ")
            console.log(selectedCrime)
 
            const message = new CustomEvent("crimeSelected", {
                detail: {
                    crimeId: selectedCrime
                }
            })
            eventHub.dispatchEvent(message)
        }
    })
}

export default ConvictionSelect