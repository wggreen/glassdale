let notes = []

export const saveNote = note => {    
    fetch('http://localhost:8000/notes', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(note)
    })
    .then(getNotes)
}

export const getNotes = () => {
    return fetch("http://localhost:8000/notes")
        .then(response => response.json())
        .then((noteArray) => {
            notes = noteArray.slice()
        })
}

export const useNotes = () => {
    return notes
}