const CriminalComponent = (criminal) => {
  // console.log("****I am the Criminal Component****")
  return `
      <div class="criminal">
        <div>Name: ${criminal.name}</div>
        <div>Age: ${criminal.age}</div> 
        <div>Conviction: ${criminal.conviction}</div>
        <div>Term Start: ${new Date(criminal.incarceration.start).toLocaleDateString('en-US')}</div>
        <div>Term End: ${new Date(criminal.incarceration.end).toLocaleDateString('en-US')}</div>
        <button id="associates--${criminal.id}">Associate Alibis</button>
      </div>
  `
}

export default CriminalComponent