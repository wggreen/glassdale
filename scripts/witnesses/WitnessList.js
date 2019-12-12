import { useWitnesses } from './WitnessProvider.js'
import WitnessComponent from './Witness.js'
import CriminalList from '../criminals/CriminalsList.js'


const eventHub = document.querySelector("#appContainer")

const WitnessList = () => {
    // Load the application state to be used by this component
    const appStateWitnesses = useWitnesses()

    const render = WitnessCollection => {
        const contentTarget = document.querySelector(".witnessesContainer")
        contentTarget.innerHTML = ""
        const criminalTarget = document.querySelector(".criminalsContainer")
        criminalTarget.innerHTML = ""
        ShowCriminalsButton()
        let witnessHTML = WitnessCollection.map(witness => WitnessComponent(witness)).join(" ")
        contentTarget.innerHTML = `
            ${witnessHTML}
        `
    } 

    const ShowCriminalsButton = () => {
        const clearTarget = document.querySelector(".witness_button")
        clearTarget.innerHTML = ""
        clearTarget.innerHTML = `
            <button class="show_criminals">Show criminals</button>
        `
    }

    eventHub.addEventListener("click", clickEvent => {
        if(clickEvent.target.classList.contains("button--witness")) {
            render(appStateWitnesses)
        }
    })

}

export default WitnessList