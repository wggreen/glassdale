const WitnessComponent = (witness) => {
    
    return `
        <section class="witness">
            <header class="witness_name">
                <h3 class="witness_name__text">
                    ${witness.name}
                </h3>
            </header>
            <div class="witness_statement">
                <p class="witness_statement__text">
                    Witness statement: <br>${witness.statements}
                </p>
            </div>
        </section>
    `
}

export default WitnessComponent