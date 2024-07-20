const coffee = [2, 3, 1, 5];

function coffeeDate(coffee) {
  const totalBill = coffee.reduce((acc, item) => {
    acc += item * 1.25;
    return acc;
  }, 0)
  return totalBill;
}
console.log(`The total bill is $${coffeeDate(coffee)}`);