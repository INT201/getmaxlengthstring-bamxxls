const { template } = require('@babel/core')

function getMaxLengthString(arrayOfString) {
  if(!arrayOfString){
    return undefined
  }

  let maxLength = arrayOfString[0].length
  const maxString = []

  arrayOfString.forEach((eachString) => {
    if(eachString.length > maxLength) maxLength = eachString.length
  })

  arrayOfString.forEach((eachString) => {
    if(eachString.length === maxLength) maxString.push(eachString)
  })

  return maxString
}

module.exports = getMaxLengthString
