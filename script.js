async function getAllData() {
  let response = await fetch('Day7.txt')
  let data = await response.text()
  return data
}

function getIndividualDefinitions(data) {
  let colourDefinitions = data.split(".\n")
  return colourDefinitions
}

function separateOutsideInside(array){
  let twoParts = array.map(definition => definition.replaceAll(" bags contain ",":"))
  let array2 = twoParts.map(definition => definition.replaceAll(" bags",""))
  let array3 = array2.map(definition => definition.replaceAll(" bag",""))
  let rules = array3.map(definition => definition.split(":"))
  let colourRules = rules.map(rule => [rule[0], rule[1].split(", ")])

  function repeatOut (array) {
    let expandedArray = []
     array.forEach(item => {
       let n = parseInt(item.charAt(0))
       let justColour = item.slice(2)
       for (j=0; j < n; j++) {
          expandedArray.push(justColour)
         }
       }
     )
     
   
    return(expandedArray)
  }
  //HERE WE HAVE NEWCOLOUR RULES
  let newColourRules = colourRules.map(rule => [rule[0], repeatOut(rule[1])])
  //******
    Array.prototype.multiIndexOf = function (value) {
    var result;
    this.some(function iter(path) {
        return function (a, i) {
            if (a === value) {
                result = path.concat(i);                        
                return true;
            };
            return Array.isArray(a) && a.some(iter(path.concat(i)));
        }
    }([]));
    return result;
    }

   function findIndex(colour){
    return colourRules.multiIndexOf(colour)[0]
  }

  let bagOfBags = ["shiny gold"] 
  let newBagsToOpen = []

  function countMoreBags(colour) {
    newBagsToOpen = [...newColourRules[colourRules.multiIndexOf(colour)[0]][1]]
    //console.log(newBagsToOpen)
    bagOfBags = [...bagOfBags, ...newBagsToOpen]
    return newBagsToOpen
  }
  
  countMoreBags("shiny gold")
  newBagsToOpen.forEach(bag => countMoreBags(bag))
  countMoreBags("dim green")
  countMoreBags("dim green")
  countMoreBags("dim green")
  countMoreBags("shiny lavender")
  countMoreBags(countMoreBags("shiny lavender"))
  // countMoreBags("shiny lavender")
  // countMoreBags("shiny lavender")
  // countMoreBags("shiny lavender")
  // countMoreBags("posh olive")
  // countMoreBags("posh olive")
  // countMoreBags("posh olive")
  // countMoreBags("dull crimson")
  //newBagsToOpen.forEach(bag => countMoreBags(bag))
  //newBagsToOpen.forEach(bag => countMoreBags(bag))
 



 

  //console.log(newColourRules[280])
  
  






 

 

  // function addMoreBags(colour) {
  //   let index = findIndex(colour)
  //   let bagOfBags = [...bagOfBags, colour, ...newBags]
  //   console.log(bagOfBags)
  //   return bagOfBags 
  // }



  

  // let bagsOfBags = ["shiny gold"]

  // let newBags = newColourRules[217][1]

  // bagsOfBags = [...bagsOfBags, ...newBags]

  
  


  // function addMoreBags(array){
  //   let newerBags = array.forEach(item => bagsOfBags.push(item))
  //   // let newBags= newColourRules[newBagIndex][1]
  //   // //bagsOfBags.push(colour)
  //   // //bagsOfBags = [... bagsOfBags, ...newColourRules[newBag][1]]
  //   console.log(newerBags)
  //    return newerBags
  // }
  
 



  //console.log(colourRules.multiIndexOf("shiny gold"))
  
  
  //How to find item where a[0][0] = "shiny gold"
  console.log(newBagsToOpen)
  //console.log(addMoreBags())
  //console.log(newBagIndex)
  //console.log(newColourRules)
  //return newColourRules
}

 getAllData().then(getIndividualDefinitions).then(separateOutsideInside)

// function separateOutsideInside(array){
//   let twoParts = array.map(definition => definition.replaceAll(" bags contain ",":"))
//   let array2 = twoParts.map(definition => definition.replaceAll(" bags",""))
//   let array3 = array2.map(definition => definition.replaceAll(" bag",""))
//   let array4 = array3.map(definition => definition.replaceAll("1 ",""))
//   let array5 = array4.map(definition => definition.replaceAll("2 ",""))
//   let array6 = array5.map(definition => definition.replaceAll("3 ",""))
//   let array7 = array6.map(definition => definition.replaceAll("4 ",""))
//   let array8 = array7.map(definition => definition.replaceAll("5 ",""))
//   let rules = array8.map(definition => definition.split(":"))
//   let colourRules = rules.map(rule => [rule[0], rule[1].split(", ")])
  
//   let possibleBags = colourRules.filter(rule => rule[1].includes("shiny gold")).map(colour => colour[0])

//   function addNewColours(array){
//     array.forEach(colour => {
//       if (possibleBags.includes(colour)===false){
//         possibleBags.push(colour)
//       }
//     })
      
//   }

//   function getMoreColours (colour) {
//     let newColours = colourRules.filter(rule => rule[1].includes(colour)).map(def => def[0])
//     addNewColours(newColours)
    
    
//   } 

// //IDEALLY WRITE A LOOP FOR THIS
//   possibleBags.forEach(getMoreColours)
//   possibleBags.forEach(getMoreColours)
//   possibleBags.forEach(getMoreColours)
//   possibleBags.forEach(getMoreColours)
//   possibleBags.forEach(getMoreColours)
//   possibleBags.forEach(getMoreColours)
//   possibleBags.forEach(getMoreColours)
//   possibleBags.forEach(getMoreColours)

//   console.log(possibleBags.length)
//   //console.log(moreColours)
//   return possibleBags
// }


// colourRules = [bag colour, [contentColour1, contentColour2, contentColour3 etc.]]




//  getAllData().then(getIndividualDefinitions).then(separateOutsideInside)
