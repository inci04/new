function isPalindrome(s) 
{
    const cleaned = s.toLowerCase().replace(/[\W_]/g, '');
    const reversed = cleaned.split('').reverse().join('');
    return cleaned === reversed;
}
console.log(isPalindrome("wow!."));
console.log(isPalindrome("26hdjsd"));
console.log(isPalindrome("Refer!."));