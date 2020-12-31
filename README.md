# home-primes
 My attempt at solving the Home Primes problem

## Background

I chanced upon the home primes problem in the [Futility Closet blog](https://www.futilitycloset.com/2020/12/29/home-primes/), which refers in turn to details on Patrick De Geest’s website [World of Numbers](http://www.worldofnumbers.com/topic1.htm).

I saw this:

> A home prime should exist for every positive integer, but finding them can be stupendously hard. The sequence starting with 49 has been pressed through 118 steps now without producing a prime; the search continues.

And thought, "Why not?" Since I'm learning Node.js, I've written this to attempt to solve the problem as far as I can go.

## Usage

* Install Node.js
* Run `node app.js`

Results are output to the console log. My personal progress running it is contained in results.txt

## Next steps

* Create a database to store the prime factors and home primes that have been found so far to avoid having to recreate this every time
* Load the database with the results found so far: http://factordb.com/sequences.php?se=10
* Run the factors asynchronously
* Move this to a cloud-based calculation




