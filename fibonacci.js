function fib(n) {
    if (n == 0) return 0;
    if (n == 1) return 1;

    let a = 0;
    let b = 1;
    for (let i = 2; i <= n; i++) {
        const nextNumber = a + b;
        a = b;
        b = nextNumber;
    }
    return b;
}
console.log(fib(0));
console.log(fib(1));
console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
console.log(fib(5));
console.log(fib(6));