const assert = require('assert')

async function resolveInParallel (fns) {
  // TODO: implement
  const allPromises = [];
  for (const func of fns) {
    allPromises.push(func());
  }
  return await Promise.all(allPromises);
 }
async function resolveInSeries (fns) {
// TODO: implement
  return fns.reduce((p, func) => {
    return p.then((result)=> Promise.resolve(func(result)));
  }, Promise.resolve()); // <-- resolved the first promise function.
}
 async function runTests () {
  // Setup
  const makeFN = i => (prev = 0) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(prev + i), 50)
    })
  }
  const n = 10
  const fns = []
  for (let i = 0; i < n; i++) {
    fns.push(makeFN(i))
  }
  // Exec
  const parallel = await resolveInParallel(fns)
  const series = await resolveInSeries(fns)
  
  console.log('parallel', parallel)
  console.log('series', series)
  assert(parallel.length === n, 'Parallel: wrong result length')
  for (let i = 0; i < n; i++) {
    assert(parallel[i] === i, 'Parallel: wrong result value at ' + i)
  }
  assert(series === getSum(n), 'Series: wrong result value')
}
function getSum (n) {
  let sum = 0
  for (let i = 0; i < n; i++) {
    sum += i
  }
  return sum
 }
 runTests()