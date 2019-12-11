import { useCriminals } from './CriminalProvider.js'
import CriminalComponent from './criminal.js'


const eventHub = document.querySelector("#appContainer")

const CriminalList = () => {
    // Load the application state to be used by this component
    const appStateCriminals = useCriminals()

    // What should happen when detective selects a crime?
    eventHub.addEventListener("crimeSelected", event => {
        const crime = event.detail.crimeId
        // You remembered to add the id of the crime to the event detail, right?
            /*
                Filter the criminals application state down to the people that committed the crime
            */
            const matchingCriminals = appStateCriminals.filter(currentCriminal => 
                currentCriminal.conviction === crime) 

            if(matchingCriminals.length === 0) {
                console.log("matchingCriminals.length = 0")
                render(appStateCriminals)
            } else {
                render(matchingCriminals)
            }
    })

    eventHub.addEventListener("criminalSelected", event => {
        const criminalFilter = event.detail.criminalId
        // You remembered to add the id of the criminal to the event detail, right?
            /*
                Filter the criminals application state down to the pcriminal selected in the dropdown menu
            */
            const filteredCriminals = appStateCriminals.filter(currentCriminal => 
                currentCriminal.name === criminalFilter) 

            if (filteredCriminals.length === 0) {
                render(appStateCriminals)
            } else {
                render(filteredCriminals)
            }        
    })

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