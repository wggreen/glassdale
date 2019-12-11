const eventHub = document.querySelector("#appContainer")

const dialogEvents = () => {
    eventHub.addEventListener("click", clickEvent => {
        if(clickEvent.target.id === "note_form__close") {
            const dialogElement = clickEvent.target.parentNode
            dialogElement.close()
        }
    })
    
    eventHub.addEventListener("click", theEvent => {
        if(theEvent.target.classList.contains("button--note")) {
            const theDialog = document.querySelector(".noteFormContainer")
            theDialog.showModal()
        }
    })
}

export default dialogEvents
