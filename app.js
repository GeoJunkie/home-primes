const HomePrimes = require('./homeprimes');

const homePrimes = new HomePrimes();

for ( i = 2; 1 === 1; i++ ) {
    console.log('Home Prime for ', i);
    let result = homePrimes.homePrime( i );

    console.log('= ', result);
    console.log('========================');
}