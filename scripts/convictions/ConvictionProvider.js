// console.log("****Conviction Provider module code****")

let convictions = []

export const useConvictions = () => {
    return convictions
}

export const getConvictions = () => {
  
//   console.log("****I am going to get the data****")

    return fetch("http://criminals.glassdale.us/crimes", {
        method: "GET"
    })
        .then(response => response.json())
        .then(

            parsedConvictions => {
                // console.table(parsedConvictions)

               convictions = parsedConvictions.slice()

            }
        )
}