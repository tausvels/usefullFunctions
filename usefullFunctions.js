// ---- BINARY SEARCH FUNCTION ---------- //
function bsearch (arr,value){
  let start  = 0, end = arr.length -1, mid ;      
  while (start <= end){
      mid = Math.floor((start + end) / 2);     
      if (arr[mid] === value) {
        return arr[mid];
      } else if (arr[mid] < value) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }          
  }
  return `Value not found!` ;
}

// ----- SEPARATES AN ARRAY OF ITEMS WITH , ----- //
function arrFormatter (arr) {
  if (arr.length === 1) {
    return arr[0]
  } else {
    return arr.join(', ')
  }
};

// ---- SORTS AN ARRAY OF OBJECTS ACCORDING THEIR PROP VALUE 
//----- (DOES NOT WORK FOR BOOLEAN) --------------------- //
function arrSorterAscToDsc (arr, objProp) {
  const compare = (a, b) => {
    const objA = a[objProp];
    const objB = b[objProp]
  
    let comparison = 0;
    if (objA > objB) {
      comparison = 1;
    } else if (objA < objB){
      comparison = -1
    }
  
    return comparison;
  }
    return arr.sort(compare)
  }


module.exports = {
  bsearch,
  arrFormatter,
  arrSorterAscToDsc
}