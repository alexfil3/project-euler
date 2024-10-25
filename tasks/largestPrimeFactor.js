function largestPrimeFactor(n) {
    let prime = 2;
    let maxPrime = 1;

    while (n % prime === 0) {
        maxPrime = prime;
        n /= prime; 
    }

    prime = 3;

    while (n !== 1) {
        while(n % prime === 0) {
            maxPrime = prime;
            n /= prime;
        }

        prime += 2;
    }

    return maxPrime;
}