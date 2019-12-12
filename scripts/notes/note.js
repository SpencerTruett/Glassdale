const NotesComponent = (notes) => {

  return `
      <div>
        <div>Note: ${notes.note}</div>
        <div>Suspect: ${notes.suspect}</div> 
        <div>Date: ${notes.date}</div>
      </div>
  `
}

export default NotesComponent