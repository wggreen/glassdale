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
            <button class="button--note" id="note_form--${criminal.id}">Enter a note</button>
            
            <div class="alibi_button">
                <button id="associates--${criminal.id}">Associate Alibis</button>
            </div>
            <dialog class="note_form" id="note--entry">

            </dialog>
        </section>
    `
}

export default CriminalComponent