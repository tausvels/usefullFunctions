//! ----------------------------------------------- //
// Function returns the prime numbers that can
// be divided by the given number without remainder
export const findPrimeFactors = (n: number | any): number[] => {
  const prime = []
  let divisor = 2
  while (n >= 2) {
    if (n % divisor === 0) {
      prime.push(divisor)
      n = n / divisor
    } else {
      divisor++
    }
  }
  return prime
}
// * Test Case: findPrimeFactors(78) --> [2,3,13]
// ----------------------------------------------- //
//! ----------------------------------------------- //
// Recursive Function that returns the greatest 
// common divisor between 2 numbers
export const gcd = (a: number | any, b: number | any): number => {
  // Base case
  if (b === 0) return a
  gcd(b, a % b)
}
// ----------------------------------------------- //
//! ----------------------------------------------- //
// Function returns the GCD of n positive integers
export const generalizedGCD = (num, arr): number => {
  let factor = arr[0]
  // Method 1
  arr.forEach((n) => {
    factor = gcd(factor, n)
  })
  // Method 2
  /*
  for (let i = 0; i < num; i++) {
    factor = gcd(factor, arr[i])
  }
  */
  return factor
}
// * Test case: generalizedD(5, [2,4,6,8,10, 12]) --> 2
// ----------------------------------------------- //

// ! --------------------------------------------- //
export const checkPalindrom = (n: number | any): Boolean => {
  if (n < 10) return n
  const numberArr = Array.from(n.toString()).map(Number)
  let startIndex: number | any = 0
  let endIndex: number | any = [numberArr.length - 1]
  let status = true
  if (numberArr[startIndex] !== numberArr[endIndex]) return false
  while (endIndex >= 0) {
    if (numberArr[startIndex] === numberArr[endIndex]) {
      startIndex++
      endIndex--
    } else {
      startIndex++
      endIndex--
      return false
    }
  }
  return status
}
// * Test case: checkPalindrom(121) --> true
// ----------------------------------------------- //

// ! --------------------------------------------- //
// Returns the largest n digit palindrom product
export const palindromProduct = (n: number) => {
  const upperRange = Math.pow(10, n)-1
  let temp = upperRange - 1
  let largestPalindrom = upperRange * upperRange - 1
  while(!checkPalindrom(largestPalindrom)) {
    largestPalindrom = upperRange * temp
    temp--
    if (checkPalindrom(largestPalindrom)) {
      return largestPalindrom
    }
  }
  return 0
}