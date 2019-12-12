import OfficerComponent from "./OfficerComponent.js";
import { useOfficers } from "./OfficerProvider.js";

console.log("****I am the Officer List Module****");

const eventHub = document.querySelector(".container");
const contentElement = document.querySelector(".officerssContainer")

const OfficerList = () => {
  
  const officerCollection = useOfficers();
  console.log(officerCollection, "here they are");

  eventHub.addEventListener("officerSelected", event => {
    const officer = event.detail.officer

    const matchingOfficers = officerCollection.filter(
      (currentOfficer) => {
        if (currentOfficer.conviction===officer){
          return currentOfficer
        }
      }
    )
      console.table(matchingOfficers)
      if (matchingOfficers.length > 0) {
        render (matchingOfficers)
      } else {
        render(officerCollection)
      }
    }
)

  let render = officerCollection => {
    contentElement.innerHTML = `${officerCollection
      .map(currentOfficer => {
        return OfficerComponent(currentOfficer)
      })
      .join("")}`;
  };

  render(officerCollection)
};

export default OfficerList