let numbers = [10, 21, 35,16, 33];
let max = numbers[0];
let i = 0;

while (i < numbers.length) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
  i++;
}

console.log(max);
