const CriminalComponent = (criminal) => {
    const jailStart = new Date(criminal.incarceration.start).getFullYear()
    const jailEnd = new Date(criminal.incarceration.end).getFullYear()
    const jailTerm = jailEnd - jailStart
    const isKiller = () => {
        if(criminal.conviction === "manslaughter" || criminal.conviction === "murder") {
            return true
        }
    }
    return `
        <section class="criminal">
            <header class="crim_name">
                <h3>${criminal.name}</h3>
            </header>
            <div class ="crim_info">
                <span>
                    Age: ${criminal.age}
                </span>
                <span>
                    Crime: ${criminal.conviction}
                </span>
                <span>
                    Term start: ${new Date(criminal.incarceration.start).toLocaleDateString('en-US')}
                </span>
                <span>
                    Term end: ${new Date(criminal.incarceration.end).toLocaleDateString('en-US')}
                </span>
                <span>
                    In jail for: ${jailTerm} years
                </span>
            </div>
            <button class="button--note" id=${criminal.id}>Enter a note</button>
            <dialog class="noteFormContainer" id="note--entry">
                <div class="form_inputs">
                    <label for="note-text">Enter your note:</label>
                    <input type="text" id="note_text-${criminal.id}" size=35></input>
                </div> 

                    <br>

                <div class ="form_info">
                    <span class="note_template_text">Criminal: ${criminal.name}</span>

                    <br>

                    <span class="note_template_text">Today's date: ${new Date().toLocaleDateString()}</span>
                </div>

                    <br>

                    <button class="saveNote" id="saveNote_${criminal.name.split(" ").join("-")}_${criminal.id}">Save Note</button>

                    <br>
                    <br>

                    <button class="button--close" id="note_form__close">Close note form</button>
            </dialog>
        </section>
    `
}

export default CriminalComponent