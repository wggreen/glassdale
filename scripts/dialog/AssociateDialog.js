import { useCriminals } from "../criminals/CriminalProvider.js"

const eventHub = document.querySelector("#appContainer")
const contentTarget = document.querySelector(".alibiContainer")

const AssociateDialogComponent = () => {

    eventHub.addEventListener("associateButtonClicked", event => {
        const criminals = useCriminals()

        const foundCriminal = criminals.find(
            (singleCriminal) => {
                return singleCriminal.id === parseInt(event.detail.criminalId, 10)
            }
        )

        const alibisHTML = foundCriminal.known_associates.map(
            (singleAssociate) => {
                return `
                    <div>
                        ${singleAssociate.name}: ${singleAssociate.alibi}
                    </div>
                `
            }
        ).join("")

        document.querySelector(".alibi__text").innerHTML = alibisHTML

        document.querySelector(".alibies").showModal()

    })

    const render = () => {
        contentTarget.innerHTML = `
            <dialog class="alibies">
                <div class="alibi__text"></div>
                <button class="closeDialog">Close dialog</button>
            </dialog>
        `
    }

    eventHub.addEventListener("click", theEvent => {
        if (theEvent.target.classList.contains("closeDialog")) {
            const theDialog = document.querySelector(".alibies")
            theDialog.close()
        }
    })

    render()

}

export default AssociateDialogComponent