const Primes = require("./primes");

class HomePrimes {
  constructor() {
    this.primes = new Primes();
    this.homePrimes = [];
    this.primeFactors = [];
  }

  /**
   * Returns the Home Prime of the number.
   *
   * @param {positive integer} num
   * @returns {number} The home prime of the number
   */
  homePrime(num) {
    if (typeof this.homePrimes[num] === "undefined") {
      // Load the prime factorization for this number if it doesn't exist
      this.homePrimes[num] = this._getHomePrimeFor(num);
    }
    return this.homePrimes[num];
  }

  /**
   * Calculates the Home Prime of the number. When complete, the object will hold the home prime and
   * the factors that led to the home prime
   *
   * @param {positive integer} num
   */
  _getHomePrimeFor(num) {
    var numberToCheck = num;
    this.primeFactors[num] = [];

    // Loop until we find a prime number
    while (!this.primes.isPrime(numberToCheck)) {
      // Get the prime factors for num
      let factors = this.primes.factor(numberToCheck);
      // Merge sorted factors into a single number
      numberToCheck = factors.join("");
      this.primeFactors[num].push(numberToCheck);
      console.log(".... ", factors.join(" * "));
    }

    return numberToCheck;
  }
}

module.exports = HomePrimes;
