/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') return 1;
    if (a === b) return a;

    for (let i = Math.min(a,b); i >= 0; i--) {
        if (a % i === 0 && b % i === 0) return i;
    }

    return 1;
}

module.exports = gcd;