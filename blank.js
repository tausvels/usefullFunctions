const input = 121;

const isPalindrome = (x) => {
  let revNum = 0;
  let number = x;
  while (number > 0) {
    revNum = (revNum * 10) + (number % 10);
    number = Math.floor(number / 10);
  }
  if (x === revNum) {return true} 
  else {return false}
}

console.log(isPalindrome(input))