function isPalindrome(str) {
    str = str.toLowerCase().replace(/\W/g, "");
    
    return str === str.split("").reverse().join("");
}


console.log(isPalindrome("i topi non avevano nipoti")); // true
console.log(isPalindrome("ciao"));                     // false
console.log(isPalindrome("Anna"));                     // true





