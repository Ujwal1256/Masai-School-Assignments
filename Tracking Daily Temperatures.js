let temp = [];

function taleInputs(day) {
    let temp;
    do {
        temp = parseFloat(prompt(`Enter the temperature for day ${day}:`));
    } while (isNaN(temp)); // if user entered non numeric vaue then again prompt
    return temp;
}

// Take user input for 7 days
for (let i = 0; i < 7; i++) {
    temp.push(taleInputs(i + 1));
}

// Update the temperature for the 4th day by adding 2 degrees
temp[3] += 2;

// Log the updated temperatures
console.log("Updated Temperatures:", temp);
