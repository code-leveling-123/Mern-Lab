const express = require("express");
const app = express();
const port = 3000;

app.get("/find_prime_100", (req, res) => {
  const primes = findPrimes(100);
  res.json({ primes });
});

app.get("/find_cube_100", (req, res) => {
  const cubes = findCubes(100);
  res.json({ cubes });
});

function findPrimes(n) {
  const primes = [];
  for (let i = 2; i < n; i++) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primes.push(i);
    }
  }
  return primes;
}

function findCubes(n) {
  const cubes = [];
  for (let i = 1; i < n; i++) {
    const cube = i * i * i;
    if (cube < n) {
      cubes.push(cube);
    } else {
      break;
    }
  }
  return cubes;
}

app.listen(port, () => {
  console.log(`Server is listening to ${port}`);
});
