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