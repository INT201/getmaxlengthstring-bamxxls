const { template } = require('@babel/core')

function getMaxLengthString(arrayOfString) {
  if(arrayOfString === null || arrayOfString === undefined){
    return undefined
  }

  let max = 0
  for (let i = 0; i < arrayOfString.length ; i++){
    if(arrayOfString[i].length > max){
      max = arrayOfString[i].length;
    }
  }
  return arrayOfString.filter(arrayOfString => arrayOfString.length === max);
}
module.exports = getMaxLengthString