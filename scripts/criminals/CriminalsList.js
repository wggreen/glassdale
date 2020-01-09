import { useCriminals,getCriminalsByOfficer } from './CriminalProvider.js'
import CriminalComponent from './criminal.js'


const eventHub = document.querySelector("#appContainer")

const CriminalList = () => {
    // Load the application state to be used by this component
    const appStateCriminals = useCriminals()

    // // What should happen when detective selects a crime?
    // eventHub.addEventListener("crimeSelected", event => {
    //     const crime = event.detail.crimeId
    //     // You remembered to add the id of the crime to the event detail, right?
    //         /*
    //             Filter the criminals application state down to the people that committed the crime
    //         */
    //         const matchingCriminals = appStateCriminals.filter(currentCriminal => 
    //             currentCriminal.conviction === crime) 

    //         if(matchingCriminals.length === 0) {
    //             render(appStateCriminals)
    //         } else {
    //             render(matchingCriminals)
    //         }
    // })

    // eventHub.addEventListener("criminalSelected", event => {
    //     const criminalFilter = event.detail.criminalId
    //     // You remembered to add the id of the criminal to the event detail, right?
    //         /*
    //             Filter the criminals application state down to the pcriminal selected in the dropdown menu
    //         */
    //         const filteredCriminals = appStateCriminals.filter(currentCriminal => 
    //             currentCriminal.name === criminalFilter) 

    //         if (filteredCriminals.length === 0) {
    //             render(appStateCriminals)
    //         } else {
    //             render(filteredCriminals)
    //         }        
    // })

    eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.id.startsWith("associates--")) {

            const [prefix, id] = clickEvent.target.id.split("--")
            

            const message = new CustomEvent("associateButtonClicked", {
                detail: {
                    criminalId: id
                }
            })
            eventHub.dispatchEvent(message)
        }
    })

    eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.id.startsWith("note_form--")) {

            const [prefix, id] = clickEvent.target.id.split("--")
            

            const message = new CustomEvent("noteButtonClicked", {
                detail: {
                    criminalId: id
                }
            })
            eventHub.dispatchEvent(message)
        }
    })

    eventHub.addEventListener("click", clickEvent => {
        if(clickEvent.target.classList.contains("show_criminals")) {
            const clearTarget = document.querySelector(".witness_button")
            clearTarget.innerHTML = ""
            ShowWitnessesButton()
            const witnessTarget = document.querySelector(".witnessesContainer")
            witnessTarget.innerHTML = ""
            const criminalTarget = document.querySelector(".criminalsContainer")
            criminalTarget.innerHTML = ""
            render(appStateCriminals)
        }
    })

    // eventHub.addEventListener('officerSelected', event => {
    //     if ("officerName" in event.detail) {
    //         if (event.detail.officerName === "0") {
    //             render(appStateCriminals)
    //         } else {
    //             const filteredCriminals = getCriminalsByOfficer(event.detail.officerName)
    //             render(filteredCriminals)
    //         }
    //     }
    // })

    eventHub.addEventListener("filterClicked", event => {
        const crimeName = event.detail.crime
        const officerName = event.detail.officer

        const filteredCriminals = appStateCriminals.filter(
            (individualCriminal) => {
                if (individualCriminal.conviction === crimeName) {
                    return individualCriminal
                }
            }
        )
        .filter(criminal => {
            if (criminal.arrestingOfficer === officerName) {
                return criminal
            }
        })

        render(filteredCriminals)
    })


    const ShowWitnessesButton = () => {
        const clearTarget = document.querySelector(".witness_button")
        clearTarget.innerHTML = ""
        clearTarget.innerHTML = `
            <button class="button--witness">Show witnesses</button>
        `
    }

    const render = criminalCollection => {
        const contentTarget = document.querySelector(".criminalsContainer")
        contentTarget.innerHTML = ""
        let criminalHTML = criminalCollection.map(criminal => CriminalComponent(criminal)).join(" ")
        contentTarget.innerHTML = `
            ${criminalHTML}
        `
    } 

    render(appStateCriminals)
}

export default CriminalList