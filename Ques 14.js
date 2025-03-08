

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
    let result = price - (price * (discount / 100));
    return result; 
}
let final_price = calculatePrice(price, discount).toFixed(2);
console.log(`Final Price: $${final_price}`);
