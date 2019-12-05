const CriminalComponent = (criminal) => {
    const jailStart = new Date(criminal.incarceration.start).getFullYear()
    const jailEnd = new Date(criminal.incarceration.end).getFullYear()
    const jailTerm = jailEnd - jailStart
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
        </section>
    `
}

export default CriminalComponent