function largestPalindromeProduct(n) {
    let num = parseInt('9'.repeat(n));
    let maxPalindrome = 0;

    for (let i = num; i > 0; i--) {
        for (let j = i; j > 0; j--) {
            const product = i * j;
            if (product <= maxPalindrome) break;
            if (isPalindrome(product.toString())) {
                maxPalindrome = product;
            }
        }
    }

    return maxPalindrome;
}

function isPalindrome(str) {
    // recursion method
    // const end = str.length - 1;

    // if (str.length === 1) return true;
    // if (str.length === 2 && str[0] === str[end]) return true;

    // if (str[0] === str[end]) {
    //     return isPalindrome(str.slice(1, end));
    // } else {
    //     return false;
    // }

    return str === str.split('').reverse().join('');
}