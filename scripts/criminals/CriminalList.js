import CriminalComponent from "./CriminalComponent.js";
import { useCriminals } from "./CriminalProvider.js";

// console.log("****I am the Criminal List Module****");

const eventHub = document.querySelector(".container");
const contentElement = document.querySelector(".criminalsContainer")

const CriminalList = () => {
  
  const criminalCollection = useCriminals();
  // console.log(criminalCollection, "here they are");

  eventHub.addEventListener("crimeSelected", event => {
    const crime = event.detail.crime

    const matchingCriminals = criminalCollection.filter(
      (currentCriminal) => {
        if (currentCriminal.conviction===crime){
          return currentCriminal
        }
      }
    )
      // console.table(matchingCriminals)
      if (matchingCriminals.length > 0) {
        render (matchingCriminals)
      } else {
        render(criminalCollection)
      }
    }
)

  let render = criminalCollection => {
    contentElement.innerHTML = `${criminalCollection
      .map(currentCriminal => {
        return CriminalComponent(currentCriminal)
      })
      .join("")}`;
  };

  render(criminalCollection)
};

eventHub.addEventListener("click", clickEvent => {
  if (clickEvent.target.id.startsWith("associates--")){

    const [prefix, indexId] = clickEvent.target.id.split("--")

    const message = new CustomEvent("associateButtonClicked", {
      detail: {
        criminalId: indexId
      }
    })
    eventHub.dispatchEvent(message)
  }
}
)


export default CriminalList