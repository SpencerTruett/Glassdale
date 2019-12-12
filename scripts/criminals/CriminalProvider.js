// console.log("****Criminal Provider module code****")

let criminals = []

export const useCriminals = () => {
    return criminals
}

export const getCriminals = () => {
  
//   console.log("****I am going to get the data****")

    return fetch("http://criminals.glassdale.us/criminals")
        .then(response => response.json())
        .then(

            parsedCriminals => {
                // console.table(parsedCriminals)

                // console.log("****I have the data****")
                criminals = parsedCriminals.slice()

            }
        )
}

