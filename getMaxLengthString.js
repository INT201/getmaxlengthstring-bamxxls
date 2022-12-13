const { template } = require('@babel/core')

function getMaxLengthString(arrayOfString) {
  if(!arrayOfString) return undefined

  let maxLength = 0
  let maxString = []

  // 1.. 
  for(let word of arrayOfString){   //วนหา maxLength
    if(word.length > maxLength){
      maxLength = word.length       // assign maxLength
    }
  }
  
  // 2...
  for(let word of arrayOfString){   // วนหา word ที่ match maxLength
    if(word.length === maxLength){
      maxString.push(word)          // เพิ่ม word เข้า array
    }
  }
  
  return maxString
}
module.exports = getMaxLengthString
