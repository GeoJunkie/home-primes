

  class Primes {
      constructor() {
          this.primes = [];
          this._file = './primes.db'
        }        
        /**
         * Returns an array of the prime factors of a number. It firsts checks for previously calculated primes
         * 
         * @param {positive integer} num 
         */
        factor( num ) {
            if (typeof this.primes[num] === 'undefined') {
                // Load the prime factorization for this number if it doesn't exist
                this.primes[num] =  this._getPrimeFactorsFor( num );
            }
            return this.primes[num];
        }

        isPrime( num ) {
            return this.factor( num ).length === 1;
        }

        /**
         * Returns an array of the prime factors of a number.
         * 
         * Source: https://stackoverflow.com/a/52202466
         * 
         * @param {positive integer} num 
         * @returns {array}
         */
         _getPrimeFactorsFor(num) {
            const primes = [];
            for (let factor = 2; factor <= num; factor++) {
              while ((num % factor) === 0) {
                primes.push(factor);
                num /= factor;
              }
            }
            return primes;
          }
  }

  module.exports = Primes;