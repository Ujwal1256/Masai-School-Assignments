

let price, discount;
while (true) {
    price = parseFloat(prompt("Enter the price:"));
    if (!isNaN(price) && price >= 0) break;
    console.log("price should be number and postive");
}
while (true) {
    let discountInput = prompt("Enter the discount:");
    discount = discountInput === "" ? 10 : parseFloat(discountInput);
    if (!isNaN(discount) && discount >= 0) break;
    alert("Discount should not be negative or non number value");
}

function calculatePrice(price, discount) {
    let result = (price * (discount / 100));
    return result; 
}
console.log(`Final Price: $${calculatePrice(price, discount).toFixed(2)}`);
