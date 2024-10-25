function evenFibonacciNumbers(limit) {
    let prev = 0;
    let current = 1;
    let sum = 0;

    for (let next = prev + current; next <= limit; next = prev + current) {
        prev = current;
        current = next;

        if (next % 2 === 0) {
            sum += next;
        }
    }

    return sum;
}