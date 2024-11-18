const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const evens = [];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        evens.push(numbers[i]);
    }
}
console.log('Even numbers:', evens);

const odds = [];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
        odds.push(numbers[i]);
    }
}
console.log('Odd numbers:', odds);

const n = 5;
for (let i = 1; i <= n; i++) {
    let stars = '';
    for (let j = 1; j <= i; j++) {
        stars += '*';
    }
    console.log(stars);
}