// import NotesComponent from "./notes.js";
import { useNote } from "./noteDataProvider.js";

const eventHub = document.querySelector(".container");
const contentElement = document.querySelector(".notesListContainer");

const noteList = () => {
  // const appStateNotes = NotesComponent()

  eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "showNote") {
      // call useNote assign to var pass to render
      const allNotes = useNote();
      render(allNotes);
    }
  });
  const render = allOfTheNotes => {
    contentElement.innerHTML = `${allOfTheNotes
      .map(notes => {
        return `
            <div>
              <div class="note__field">
                ${notes.text}
              </div>
              <div class="note__field">
                ${notes.suspect}
              </div>
              <div>
                ${notes.date}
              </div>
            </div>
          `;
      })
      .join("")}`;
  };

};

export default noteList;
