let notes = []

export const useNote = () => {
  return notes
}

export const saveNote = note => {
  return fetch('http://localhost:8088/notes', {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(note)
  })
  .then(getNotes)
}

export const getNotes = () => {
  
    return fetch("http://localhost:8088/notes", {
        method: "GET"
    })
        .then(response => response.json())
        .then(
            parsedNotes => {
              notes = parsedNotes.slice()
            }
        )
}