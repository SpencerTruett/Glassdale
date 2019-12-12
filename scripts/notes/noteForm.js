const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")

import { saveNote} from "./noteDataProvider.js"


const NoteFormComponent = () => {

    eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.id === "saveNote") {
            const newNote = {
                text: document.querySelector("#note-text").value,
                suspect: document.querySelector("#suspect-text").value,
                date: Date.now()
            }

            saveNote(newNote)
        }
    })
    eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.id === "showNotes") {
            const message = new CustomEvent("showNoteButtonClicked")
            eventHub.dispatchEvent(message)
          }
    })

    const render = () => {
        contentTarget.innerHTML = `
            <div>
                <div class="note__field">
                Note: <input type="text" id="note-text">
                </div>

                <div class="note__field">
                Suspect: <input type="text" id="suspect-text">
                </div>
            </div>
            <button id="saveNote">Save Note</button>
            <button id="showNote">Show All Notes</button>
        `
    }

    render()
}


export default NoteFormComponent

